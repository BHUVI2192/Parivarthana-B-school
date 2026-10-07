<?php
/**
 * Session Verification API
 * Validates current session and returns user data
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/middleware.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    Response::error('Method not allowed', 405);
}

try {
    $user = AuthMiddleware::authenticate();
    
    if (!$user) {
        Response::unauthorized('Invalid or expired session');
    }
    
    // Get additional user details
    $db = getDB();
    $stmt = $db->prepare("
        SELECT last_login, created_at
        FROM users
        WHERE id = ?
    ");
    $stmt->execute([$user['id']]);
    $userDetails = $stmt->fetch();
    
    Response::success([
        'user' => [
            'id' => $user['id'],
            'username' => $user['username'],
            'role' => $user['role'],
            'full_name' => $user['full_name'],
            'email' => $user['email'],
            'last_login' => $userDetails['last_login'],
            'created_at' => $userDetails['created_at']
        ],
        'permissions' => AuthMiddleware::PERMISSIONS[$user['role']] ?? []
    ], 'Session valid');
    
} catch (Exception $e) {
    error_log("Verify error: " . $e->getMessage());
    Response::serverError('An error occurred during verification');
}
