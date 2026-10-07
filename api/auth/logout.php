<?php
/**
 * User Logout API
 * Destroys user session
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/middleware.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

try {
    $db = getDB();
    
    // Get session token
    $headers = getallheaders();
    $sessionToken = null;
    
    if (isset($headers['Authorization'])) {
        $authHeader = $headers['Authorization'];
        if (preg_match('/Bearer\s+(\S+)/', $authHeader, $matches)) {
            $sessionToken = $matches[1];
        }
    }
    
    if (!$sessionToken && isset($_COOKIE['session_token'])) {
        $sessionToken = $_COOKIE['session_token'];
    }
    
    // Get current user before destroying session
    $user = getCurrentUser();
    
    if ($sessionToken) {
        // Delete session from database
        $stmt = $db->prepare("DELETE FROM sessions WHERE session_token = ?");
        $stmt->execute([$sessionToken]);
        
        // Log activity if user was logged in
        if ($user) {
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, ip_address, user_agent)
                VALUES (?, 'logout', 'user', ?, ?)
            ");
            $stmt->execute([
                $user['id'],
                $_SERVER['REMOTE_ADDR'] ?? null,
                $_SERVER['HTTP_USER_AGENT'] ?? null
            ]);
        }
    }
    
    // Clear session cookie
    setcookie('session_token', '', [
        'expires' => time() - 3600,
        'path' => '/',
        'secure' => isset($_SERVER['HTTPS']),
        'httponly' => true,
        'samesite' => 'Strict'
    ]);
    
    // Clear session data
    session_unset();
    session_destroy();
    
    Response::success(null, 'Logout successful');
    
} catch (Exception $e) {
    error_log("Logout error: " . $e->getMessage());
    Response::serverError('An error occurred during logout');
}
