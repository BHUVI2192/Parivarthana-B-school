<?php
/**
 * Student Achievers Management API
 * CRUD operations for student achievements (Admin and Staff)
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/FileUpload.php';
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
            // Public endpoint for viewing achievers
            $category = $_GET['category'] ?? null;
            $year = $_GET['year'] ?? null;
            
            if (isset($_GET['admin'])) {
                // Admin/Staff view - require auth
                $user = AuthMiddleware::requireRole(['admin', 'staff']);
                
                if (isset($_GET['id'])) {
                    $stmt = $db->prepare("SELECT * FROM student_achievers WHERE id = ?");
                    $stmt->execute([$_GET['id']]);
                    $achiever = $stmt->fetch();
                    
                    if (!$achiever) {
                        Response::notFound('Achievement not found');
                    }
                    
                    Response::success($achiever);
                } else {
                    $sql = "SELECT * FROM student_achievers ORDER BY year DESC, created_at DESC";
                    $stmt = $db->query($sql);
                    $achievers = $stmt->fetchAll();
                    Response::success($achievers);
                }
            } else {
                // Public view - only active achievers
                $sql = "
                    SELECT id, name, achievement, category, year, image_url, description
                    FROM student_achievers
                    WHERE is_active = TRUE
                ";
                $params = [];
                
                if ($category && $category !== 'All') {
                    $sql .= " AND category = ?";
                    $params[] = $category;
                }
                
                if ($year) {
                    $sql .= " AND year = ?";
                    $params[] = $year;
                }
                
                $sql .= " ORDER BY year DESC, created_at DESC";
                
                $stmt = $db->prepare($sql);
                $stmt->execute($params);
                $achievers = $stmt->fetchAll();
                Response::success($achievers);
            }
            break;
            
        case 'POST':
            // Create new achievement - Admin and Staff
            $user = AuthMiddleware::requireRole(['admin', 'staff']);
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            $name = trim($input['name'] ?? '');
            $achievement = trim($input['achievement'] ?? '');
            $category = $input['category'] ?? '';
            $year = trim($input['year'] ?? '');
            $description = trim($input['description'] ?? '');
            $imageUrl = trim($input['image_url'] ?? '');
            
            // Validation
            $errors = [];
            if (empty($name)) $errors['name'] = 'Name is required';
            if (empty($achievement)) $errors['achievement'] = 'Achievement is required';
            if (!in_array($category, ['Academic', 'Sports', 'Cultural', 'Technical', 'Social Service', 'Leadership'])) {
                $errors['category'] = 'Valid category is required';
            }
            if (empty($year)) $errors['year'] = 'Year is required';
            
            if (!empty($errors)) {
                Response::validationError($errors);
            }
            
            $stmt = $db->prepare("
                INSERT INTO student_achievers (name, achievement, category, year, image_url, description, created_by)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ");
            $stmt->execute([$name, $achievement, $category, $year, $imageUrl, $description, $user['id']]);
            
            $newId = $db->lastInsertId();
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, new_values)
                VALUES (?, 'create', 'student_achiever', ?, ?)
            ");
            $stmt->execute([$user['id'], $newId, json_encode(['name' => $name, 'achievement' => $achievement])]);
            
            Response::success(['id' => $newId], 'Achievement created successfully', 201);
            break;
            
        case 'PUT':
            // Update achievement - Admin and Staff
            $user = AuthMiddleware::requireRole(['admin', 'staff']);
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Check for ID in both body and URL query parameter
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Achievement ID is required');
            }
            
            // Check if user owns the record or is admin
            $stmt = $db->prepare("SELECT * FROM student_achievers WHERE id = ?");
            $stmt->execute([$id]);
            $existing = $stmt->fetch();
            
            if (!$existing) {
                Response::notFound('Achievement not found');
            }
            
            // Only admin or owner can update
            if ($user['role'] !== 'admin' && $existing['created_by'] != $user['id']) {
                Response::forbidden('You can only update your own records');
            }
            
            // Build update query
            $updates = [];
            $params = [];
            
            $fields = ['name', 'achievement', 'category', 'year', 'image_url', 'description', 'is_active'];
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
            $sql = "UPDATE student_achievers SET " . implode(', ', $updates) . ", updated_at = NOW() WHERE id = ?";
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values, new_values)
                VALUES (?, 'update', 'student_achiever', ?, ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($existing), json_encode($input)]);
            
            Response::success(null, 'Achievement updated successfully');
            break;
            
        case 'DELETE':
            // Delete achievement - Admin and Staff
            $user = AuthMiddleware::requireRole(['admin', 'staff']);
            
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Achievement ID is required');
            }
            
            $stmt = $db->prepare("SELECT * FROM student_achievers WHERE id = ?");
            $stmt->execute([$id]);
            $existing = $stmt->fetch();
            
            if (!$existing) {
                Response::notFound('Achievement not found');
            }
            
            // Only admin or owner can delete
            if ($user['role'] !== 'admin' && $existing['created_by'] != $user['id']) {
                Response::forbidden('You can only delete your own records');
            }
            
            $stmt = $db->prepare("DELETE FROM student_achievers WHERE id = ?");
            $stmt->execute([$id]);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values)
                VALUES (?, 'delete', 'student_achiever', ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($existing)]);
            
            Response::success(null, 'Achievement deleted successfully');
            break;
            
        default:
            Response::error('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("Achievers management error: " . $e->getMessage());
    Response::serverError('An error occurred');
}
