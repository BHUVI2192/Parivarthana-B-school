<?php
/**
 * Gallery Management API
 * CRUD operations for gallery items (Admin and Staff)
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/FileUpload.php';
require_once __DIR__ . '/../auth/middleware.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

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
            // Public endpoint for viewing gallery
            $category = $_GET['category'] ?? null;
            
            if (isset($_GET['admin'])) {
                if (isset($_GET['id'])) {
                    $stmt = $db->prepare("SELECT * FROM gallery_items WHERE id = ?");
                    $stmt->execute([$_GET['id']]);
                    $item = $stmt->fetch();
                    
                    if (!$item) {
                        Response::notFound('Gallery item not found');
                    }
                    
                    Response::success($item);
                } else {
                    $sql = "SELECT * FROM gallery_items ORDER BY created_at DESC, id DESC";
                    $stmt = $db->query($sql);
                    $items = $stmt->fetchAll();
                    Response::success($items);
                }
            } else {
                // Public view - only active items
                $sql = "
                    SELECT id, title, description, image_url, category, created_at, is_active
                    FROM gallery_items
                    WHERE is_active = TRUE
                ";
                $params = [];
                
                if ($category && $category !== 'All') {
                    $sql .= " AND category = ?";
                    $params[] = $category;
                }
                
                $sql .= " ORDER BY created_at DESC, id DESC";
                
                $stmt = $db->prepare($sql);
                $stmt->execute($params);
                $items = $stmt->fetchAll();
                Response::success($items);
            }
            break;
            
        case 'POST':
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            if (!is_array($input)) {
                $input = $_POST;
            }
            
            $title = trim($input['title'] ?? $_POST['title'] ?? '');
            $description = trim($input['description'] ?? $_POST['description'] ?? '');
            $category = trim($input['category'] ?? $_POST['category'] ?? 'Campus');
            $isActive = isset($input['is_active']) ? ($input['is_active'] ? 1 : 0) : 1;
            
            // Validation
            $errors = [];
            if (empty($title)) $errors['title'] = 'Title is required';
            
            if (!empty($errors)) {
                Response::validationError($errors);
            }
            
            // Handle image upload (multipart, base64 data URL, or standard URL)
            $imageUrl = $input['image_url'] ?? $_POST['image_url'] ?? null;
            if (isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
                $uploader = new FileUpload();
                $result = $uploader->upload($_FILES['image'], 'gallery');
                
                if (!$result['success']) {
                    Response::error($result['message']);
                }
                
                $imageUrl = $result['file_path'];
            } elseif ($imageUrl && preg_match('/^data:image\/(\w+);base64,/', $imageUrl)) {
                $uploader = new FileUpload();
                $result = $uploader->uploadBase64($imageUrl, 'gallery');
                if ($result['success']) {
                    $imageUrl = $result['file_path'];
                } else {
                    Response::error($result['message']);
                }
            }
            
            if (empty($imageUrl)) {
                Response::error('Image file or URL is required');
            }
            
            $userId = 1;
            $user = AuthMiddleware::authenticate();
            if ($user && isset($user['id'])) {
                $userId = $user['id'];
            }
            
            $stmt = $db->prepare("
                INSERT INTO gallery_items (title, description, image_url, category, is_active, uploaded_by)
                VALUES (?, ?, ?, ?, ?, ?)
            ");
            $stmt->execute([$title, $description, $imageUrl, $category, $isActive, $userId]);
            
            $newId = $db->lastInsertId();
            
            Response::success([
                'id' => (int)$newId,
                'title' => $title,
                'description' => $description,
                'image_url' => $imageUrl,
                'category' => $category,
                'is_active' => (bool)$isActive,
                'created_at' => date('Y-m-d H:i:s')
            ], 'Gallery item created successfully', 201);
            break;
            
        case 'PUT':
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            if (!is_array($input)) {
                parse_str($rawInput, $input);
            }
            
            $id = $input['id'] ?? $_GET['id'] ?? null;
            if (!$id) {
                Response::error('Gallery item ID is required');
            }
            
            // Check if item exists
            $stmt = $db->prepare("SELECT * FROM gallery_items WHERE id = ?");
            $stmt->execute([$id]);
            $item = $stmt->fetch();
            
            if (!$item) {
                Response::notFound('Gallery item not found');
            }
            
            $title = isset($input['title']) ? trim($input['title']) : $item['title'];
            $description = isset($input['description']) ? trim($input['description']) : $item['description'];
            $category = isset($input['category']) ? trim($input['category']) : $item['category'];
            $imageUrl = isset($input['image_url']) ? trim($input['image_url']) : $item['image_url'];
            $isActive = isset($input['is_active']) ? ($input['is_active'] ? 1 : 0) : $item['is_active'];
            
            // If new base64 image provided
            if ($imageUrl && preg_match('/^data:image\/(\w+);base64,/', $imageUrl)) {
                $uploader = new FileUpload();
                $result = $uploader->uploadBase64($imageUrl, 'gallery');
                if ($result['success']) {
                    $imageUrl = $result['file_path'];
                }
            }
            
            $stmt = $db->prepare("
                UPDATE gallery_items
                SET title = ?, description = ?, image_url = ?, category = ?, is_active = ?, updated_at = NOW()
                WHERE id = ?
            ");
            $stmt->execute([$title, $description, $imageUrl, $category, $isActive, $id]);
            
            Response::success([
                'id' => (int)$id,
                'title' => $title,
                'description' => $description,
                'image_url' => $imageUrl,
                'category' => $category,
                'is_active' => (bool)$isActive
            ], 'Gallery item updated successfully');
            break;
            
        case 'DELETE':
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Gallery item ID is required');
            }
            
            // Fetch item to optionally clean up physical file
            $stmt = $db->prepare("SELECT * FROM gallery_items WHERE id = ?");
            $stmt->execute([$id]);
            $item = $stmt->fetch();
            
            if ($item && !empty($item['image_url']) && strpos($item['image_url'], 'uploads/gallery/') !== false) {
                $uploader = new FileUpload();
                $uploader->delete($item['image_url']);
            }
            
            $stmt = $db->prepare("DELETE FROM gallery_items WHERE id = ?");
            $stmt->execute([$id]);
            
            Response::success(null, 'Gallery item deleted successfully');
            break;
            
        default:
            Response::error('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("Gallery API Error: " . $e->getMessage());
    Response::serverError($e->getMessage());
}
