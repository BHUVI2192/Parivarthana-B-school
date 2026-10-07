<?php
/**
 * User Management API
 * CRUD operations for users (Admin only)
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

// Require admin role
$user = AuthMiddleware::requireRole('admin');

$method = $_SERVER['REQUEST_METHOD'];

try {
    $db = getDB();
    
    switch ($method) {
        case 'GET':
            // List all users or get single user
            if (isset($_GET['id'])) {
                $stmt = $db->prepare("
                    SELECT id, username, role, full_name, email, is_active, last_login, created_at
                    FROM users
                    WHERE id = ?
                ");
                $stmt->execute([$_GET['id']]);
                $userData = $stmt->fetch();
                
                if (!$userData) {
                    Response::notFound('User not found');
                }
                
                Response::success($userData);
            } else {
                $stmt = $db->query("
                    SELECT id, username, role, full_name, email, is_active, last_login, created_at
                    FROM users
                    ORDER BY created_at DESC
                ");
                $users = $stmt->fetchAll();
                Response::success($users);
            }
            break;
            
        case 'POST':
            // Create new user
            $input = json_decode(file_get_contents('php://input'), true);
            
            $username = trim($input['username'] ?? '');
            $password = $input['password'] ?? '';
            $role = $input['role'] ?? '';
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            
            // Validation
            $errors = [];
            if (empty($username)) $errors['username'] = 'Username is required';
            if (empty($password) || strlen($password) < 6) $errors['password'] = 'Password must be at least 6 characters';
            if (!in_array($role, ['admin', 'admission_staff', 'staff'])) $errors['role'] = 'Invalid role';
            if (empty($fullName)) $errors['full_name'] = 'Full name is required';
            if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Valid email is required';
            
            if (!empty($errors)) {
                Response::validationError($errors);
            }
            
            // Check if username or email exists
            $stmt = $db->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
            $stmt->execute([$username, $email]);
            if ($stmt->fetch()) {
                Response::error('Username or email already exists');
            }
            
            // Hash password
            $passwordHash = password_hash($password, PASSWORD_BCRYPT);
            
            // Insert user
            $stmt = $db->prepare("
                INSERT INTO users (username, password_hash, role, full_name, email, is_active)
                VALUES (?, ?, ?, ?, ?, TRUE)
            ");
            $stmt->execute([$username, $passwordHash, $role, $fullName, $email]);
            
            $newUserId = $db->lastInsertId();
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, new_values)
                VALUES (?, 'create', 'user', ?, ?)
            ");
            $stmt->execute([$user['id'], $newUserId, json_encode(['username' => $username, 'role' => $role])]);
            
            Response::success(['id' => $newUserId], 'User created successfully', 201);
            break;
            
        case 'PUT':
            // Update user
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Check for ID in both body and URL query parameter
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('User ID is required');
            }
            
            // Get existing user
            $stmt = $db->prepare("SELECT * FROM users WHERE id = ?");
            $stmt->execute([$id]);
            $existingUser = $stmt->fetch();
            
            if (!$existingUser) {
                Response::notFound('User not found');
            }
            
            // Prevent self-deactivation
            if ($id == $user['id'] && isset($input['is_active']) && !$input['is_active']) {
                Response::error('You cannot deactivate your own account');
            }
            
            // Build update query
            $updates = [];
            $params = [];
            
            if (isset($input['full_name'])) {
                $updates[] = 'full_name = ?';
                $params[] = trim($input['full_name']);
            }
            
            if (isset($input['email'])) {
                $updates[] = 'email = ?';
                $params[] = trim($input['email']);
            }
            
            if (isset($input['role']) && in_array($input['role'], ['admin', 'admission_staff', 'staff'])) {
                $updates[] = 'role = ?';
                $params[] = $input['role'];
            }
            
            if (isset($input['is_active'])) {
                $updates[] = 'is_active = ?';
                $params[] = $input['is_active'] ? 1 : 0;
            }
            
            if (isset($input['password']) && !empty($input['password'])) {
                if (strlen($input['password']) < 6) {
                    Response::error('Password must be at least 6 characters');
                }
                $updates[] = 'password_hash = ?';
                $params[] = password_hash($input['password'], PASSWORD_BCRYPT);
            }
            
            if (empty($updates)) {
                Response::error('No fields to update');
            }
            
            $params[] = $id;
            $sql = "UPDATE users SET " . implode(', ', $updates) . " WHERE id = ?";
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values, new_values)
                VALUES (?, 'update', 'user', ?, ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($existingUser), json_encode($input)]);
            
            Response::success(null, 'User updated successfully');
            break;
            
        case 'DELETE':
            // Delete user
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('User ID is required');
            }
            
            // Prevent self-deletion
            if ($id == $user['id']) {
                Response::error('You cannot delete your own account');
            }
            
            // Get user before deletion
            $stmt = $db->prepare("SELECT * FROM users WHERE id = ?");
            $stmt->execute([$id]);
            $userToDelete = $stmt->fetch();
            
            if (!$userToDelete) {
                Response::notFound('User not found');
            }
            
            // Delete user
            $stmt = $db->prepare("DELETE FROM users WHERE id = ?");
            $stmt->execute([$id]);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values)
                VALUES (?, 'delete', 'user', ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($userToDelete)]);
            
            Response::success(null, 'User deleted successfully');
            break;
            
        default:
            Response::error('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("User management error: " . $e->getMessage());
    Response::serverError('An error occurred');
}
