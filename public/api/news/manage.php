<?php
/**
 * News Management API
 * CRUD operations for news posts (Admin only)
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../auth/middleware.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

try {
    $db = getDB();
    
    switch ($method) {
        case 'GET':
            // Public endpoint - no auth required for visible posts
            if (isset($_GET['admin'])) {
                // Admin view - require auth
                $user = AuthMiddleware::requireRole('admin');
                
                if (isset($_GET['id'])) {
                    $stmt = $db->prepare("SELECT * FROM news_posts WHERE id = ?");
                    $stmt->execute([$_GET['id']]);
                    $post = $stmt->fetch();
                    
                    if (!$post) {
                        Response::notFound('News post not found');
                    }
                    
                    Response::success($post);
                } else {
                    $stmt = $db->query("
                        SELECT * FROM news_posts
                        ORDER BY created_at DESC
                    ");
                    $posts = $stmt->fetchAll();
                    Response::success($posts);
                }
            } else {
                // Public view - only visible posts
                $stmt = $db->query("
                    SELECT id, title, content, blog_url, image_url, category, published_date
                    FROM news_posts
                    WHERE is_visible = TRUE
                    ORDER BY is_featured DESC, published_date DESC
                ");
                $posts = $stmt->fetchAll();
                Response::success($posts);
            }
            break;
            
        case 'POST':
            // Create new post - Admin only
            $user = AuthMiddleware::requireRole('admin');
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            $title = trim($input['title'] ?? '');
            $content = trim($input['content'] ?? '');
            $blogUrl = trim($input['blog_url'] ?? '');
            $imageUrl = trim($input['image_url'] ?? '');
            $category = trim($input['category'] ?? 'General');
            $isVisible = isset($input['is_visible']) ? (bool)$input['is_visible'] : false;
            $isFeatured = isset($input['is_featured']) ? (bool)$input['is_featured'] : false;
            $publishedDate = $input['published_date'] ?? date('Y-m-d');
            
            // Validation
            $errors = [];
            if (empty($title)) $errors['title'] = 'Title is required';
            if (empty($content) && empty($blogUrl)) $errors['content'] = 'Content or blog URL is required';
            
            if (!empty($errors)) {
                Response::validationError($errors);
            }
            
            $stmt = $db->prepare("
                INSERT INTO news_posts (title, content, blog_url, image_url, category, is_visible, is_featured, published_date, created_by)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ");
            $stmt->execute([$title, $content, $blogUrl, $imageUrl, $category, $isVisible, $isFeatured, $publishedDate, $user['id']]);
            
            $newId = $db->lastInsertId();
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, new_values)
                VALUES (?, 'create', 'news_post', ?, ?)
            ");
            $stmt->execute([$user['id'], $newId, json_encode(['title' => $title])]);
            
            Response::success(['id' => $newId], 'News post created successfully', 201);
            break;
            
        case 'PUT':
            // Update post - Admin only
            $user = AuthMiddleware::requireRole('admin');
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Check for ID in both body and URL query parameter
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Post ID is required');
            }
            
            $stmt = $db->prepare("SELECT * FROM news_posts WHERE id = ?");
            $stmt->execute([$id]);
            $existing = $stmt->fetch();
            
            if (!$existing) {
                Response::notFound('News post not found');
            }
            
            // Build update query
            $updates = [];
            $params = [];
            
            $fields = ['title', 'content', 'blog_url', 'image_url', 'category', 'is_visible', 'is_featured', 'published_date'];
            foreach ($fields as $field) {
                if (isset($input[$field])) {
                    $updates[] = "$field = ?";
                    $params[] = $input[$field];
                }
            }
            
            if (empty($updates)) {
                Response::error('No fields to update');
            }
            
            $params[] = $id;
            $sql = "UPDATE news_posts SET " . implode(', ', $updates) . ", updated_at = NOW() WHERE id = ?";
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values, new_values)
                VALUES (?, 'update', 'news_post', ?, ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($existing), json_encode($input)]);
            
            Response::success(null, 'News post updated successfully');
            break;
            
        case 'DELETE':
            // Delete post - Admin only
            $user = AuthMiddleware::requireRole('admin');
            
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Post ID is required');
            }
            
            $stmt = $db->prepare("SELECT * FROM news_posts WHERE id = ?");
            $stmt->execute([$id]);
            $existing = $stmt->fetch();
            
            if (!$existing) {
                Response::notFound('News post not found');
            }
            
            $stmt = $db->prepare("DELETE FROM news_posts WHERE id = ?");
            $stmt->execute([$id]);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values)
                VALUES (?, 'delete', 'news_post', ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($existing)]);
            
            Response::success(null, 'News post deleted successfully');
            break;
            
        default:
            Response::error('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("News management error: " . $e->getMessage());
    Response::serverError('An error occurred');
}
