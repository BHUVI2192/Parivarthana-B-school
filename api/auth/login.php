<?php
/**
 * User Login API (Final Corrected Version)
 */

session_start();

// ðŸ”¥ DEBUG (remove after testing)
// ini_set('display_errors', 1);
// error_reporting(E_ALL);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';

// Headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

// âœ… Handle JSON + form-data safely
$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!is_array($input)) {
    $input = $_POST;
}

// Validate input
$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');

if (empty($username) || empty($password)) {
    Response::validationError([
        'username' => empty($username) ? 'Username is required' : null,
        'password' => empty($password) ? 'Password is required' : null
    ]);
}

try {
    $db = getDB();

    // âœ… Correct table & column
    $stmt = $db->prepare("
        SELECT id, username, password_hash, role, full_name, email, is_active
        FROM users
        WHERE username = ?
        LIMIT 1
    ");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    // User not found
    if (!$user) {
        Response::error('Invalid username or password', 401);
    }

    // Check active
    if ((int)$user['is_active'] !== 1) {
        Response::error('Account is disabled', 403);
    }

    // âœ… Correct password verification
    if (!password_verify($password, $user['password_hash'])) {
        Response::error('Invalid username or password', 401);
    }

    // Generate session token
    $sessionToken = bin2hex(random_bytes(32));
    $expiresAt = date('Y-m-d H:i:s', strtotime('+24 hours'));

    // âœ… Store session (safe)
    try {
        $stmt = $db->prepare("
            INSERT INTO sessions (user_id, session_token, expires_at)
            VALUES (?, ?, ?)
        ");
        $stmt->execute([$user['id'], $sessionToken, $expiresAt]);
    } catch (Exception $e) {
        error_log("Session insert failed: " . $e->getMessage());
    }

    // âœ… Update last login (safe)
    try {
        $stmt = $db->prepare("
            UPDATE users SET last_login = NOW() WHERE id = ?
        ");
        $stmt->execute([$user['id']]);
    } catch (Exception $e) {
        error_log("Last login update failed: " . $e->getMessage());
    }

    // âœ… Log activity (safe)
    try {
        $stmt = $db->prepare("
            INSERT INTO activity_logs (user_id, action, entity_type, ip_address, user_agent)
            VALUES (?, 'login', 'user', ?, ?)
        ");
        $stmt->execute([
            $user['id'],
            $_SERVER['REMOTE_ADDR'] ?? null,
            $_SERVER['HTTP_USER_AGENT'] ?? null
        ]);
    } catch (Exception $e) {
        error_log("Activity log failed: " . $e->getMessage());
    }

    // Set cookie
    setcookie('session_token', $sessionToken, [
        'expires' => time() + 86400,
        'path' => '/',
        'secure' => isset($_SERVER['HTTPS']),
        'httponly' => true,
        'samesite' => 'Strict'
    ]);

    // Success response - return exact format expected by frontend
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode([
        'access_token' => $sessionToken,
        'user' => [
            'id' => $user['id'],
            'username' => $user['username'],
            'role' => $user['role'],
            'full_name' => $user['full_name'],
            'email' => $user['email']
        ],
        'expires_at' => $expiresAt
    ]);
    exit;

} catch (Exception $e) {
    error_log("Login error: " . $e->getMessage());
    Response::serverError('Internal server error');
}