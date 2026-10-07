<?php
/**
 * Authentication and Authorization Middleware
 * Validates sessions and checks role-based permissions
 */

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';

class AuthMiddleware {
    
    /**
     * Valid roles in the system
     */
    const ROLES = ['admin', 'admission_staff', 'staff'];
    
    /**
     * Role permissions matrix
     */
    const PERMISSIONS = [
        'admin' => [
            'news_manage',
            'faculty_manage',
            'gallery_manage',
            'achievers_manage',
            'admissions_view',
            'users_manage',
            'all_modules'
        ],
        'admission_staff' => [
            'admissions_view'
        ],
        'staff' => [
            'gallery_manage',
            'achievers_manage'
        ]
    ];
    
    /**
     * Authenticate request and return user data
     * @return array|null - User data if authenticated, null otherwise
     */
    public static function authenticate() {
        $headers = getallheaders();
        $sessionToken = null;
        
        // Check for session token in header
        if (isset($headers['Authorization'])) {
            $authHeader = $headers['Authorization'];
            if (preg_match('/Bearer\s+(\S+)/', $authHeader, $matches)) {
                $sessionToken = $matches[1];
            }
        }
        
        // Check for session token in cookie
        if (!$sessionToken && isset($_COOKIE['session_token'])) {
            $sessionToken = $_COOKIE['session_token'];
        }
        
        // Check for session token in query params (for GET requests)
        if (!$sessionToken && isset($_GET['token'])) {
            $sessionToken = $_GET['token'];
        }
        
        // Check for session token in POST body
        if (!$sessionToken && $_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);
            if (isset($input['token'])) {
                $sessionToken = $input['token'];
            }
        }
        
        if (!$sessionToken) {
            return null;
        }
        
        try {
            $db = getDB();
            
            // Get session with user data
            $stmt = $db->prepare("
                SELECT s.*, u.id as user_id, u.username, u.role, u.full_name, u.email, u.is_active
                FROM sessions s
                JOIN users u ON s.user_id = u.id
                WHERE s.session_token = ? AND s.expires_at > NOW()
            ");
            $stmt->execute([$sessionToken]);
            $session = $stmt->fetch();
            
            if (!$session || !$session['is_active']) {
                return null;
            }
            
            return [
                'id' => $session['user_id'],
                'username' => $session['username'],
                'role' => $session['role'],
                'full_name' => $session['full_name'],
                'email' => $session['email'],
                'session_token' => $sessionToken
            ];
            
        } catch (Exception $e) {
            error_log("Auth error: " . $e->getMessage());
            return null;
        }
    }
    
    /**
     * Require authentication - returns user or sends error response
     * @return array
     */
    public static function requireAuth() {
        $user = self::authenticate();
        
        if (!$user) {
            Response::unauthorized('Authentication required. Please log in.');
        }
        
        return $user;
    }
    
    /**
     * Check if user has specific permission
     * @param array $user - User data
     * @param string $permission - Required permission
     * @return bool
     */
    public static function hasPermission($user, $permission) {
        if (!isset($user['role']) || !in_array($user['role'], self::ROLES)) {
            return false;
        }
        
        $role = $user['role'];
        return in_array($permission, self::PERMISSIONS[$role] ?? []);
    }
    
    /**
     * Require specific permission
     * @param string $permission
     * @return array - User data
     */
    public static function requirePermission($permission) {
        $user = self::requireAuth();
        
        if (!self::hasPermission($user, $permission)) {
            Response::forbidden('You do not have permission to access this resource');
        }
        
        return $user;
    }
    
    /**
     * Require specific role
     * @param string|array $roles - Required role(s)
     * @return array - User data
     */
    public static function requireRole($roles) {
        $user = self::requireAuth();
        
        if (is_string($roles)) {
            $roles = [$roles];
        }
        
        if (!in_array($user['role'], $roles)) {
            Response::forbidden('Access denied. Required role: ' . implode(' or ', $roles));
        }
        
        return $user;
    }
    
    /**
     * Check if user is admin
     * @param array $user
     * @return bool
     */
    public static function isAdmin($user) {
        return isset($user['role']) && $user['role'] === 'admin';
    }
    
    /**
     * Generate CSRF token
     * @return string
     */
    public static function generateCsrfToken() {
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        return $_SESSION['csrf_token'];
    }
    
    /**
     * Validate CSRF token
     * @param string $token
     * @return bool
     */
    public static function validateCsrfToken($token) {
        return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
    }
}

/**
 * Helper function to get current authenticated user
 * @return array|null
 */
function getCurrentUser() {
    return AuthMiddleware::authenticate();
}

/**
 * Helper function to check if user is logged in
 * @return bool
 */
function isLoggedIn() {
    return AuthMiddleware::authenticate() !== null;
}
