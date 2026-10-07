<?php
/**
 * API Response Utility Class
 * Standardizes JSON responses across all API endpoints
 */

class Response {
    
    /**
     * Send success response
     * @param mixed $data - Response data
     * @param string $message - Success message
     * @param int $code - HTTP status code
     */
    public static function success($data = null, $message = 'Success', $code = 200) {
        http_response_code($code);
        header('Content-Type: application/json');
        
        $response = [
            'success' => true,
            'message' => $message,
            'data' => $data,
            'timestamp' => date('Y-m-d H:i:s')
        ];
        
        echo json_encode($response);
        exit;
    }
    
    /**
     * Send error response
     * @param string $message - Error message
     * @param int $code - HTTP status code
     * @param mixed $errors - Detailed errors (optional)
     */
    public static function error($message = 'Error occurred', $code = 400, $errors = null) {
        http_response_code($code);
        header('Content-Type: application/json');
        
        $response = [
            'success' => false,
            'message' => $message,
            'timestamp' => date('Y-m-d H:i:s')
        ];
        
        if ($errors !== null) {
            $response['errors'] = $errors;
        }
        
        echo json_encode($response);
        exit;
    }
    
    /**
     * Send unauthorized response
     */
    public static function unauthorized($message = 'Unauthorized access') {
        self::error($message, 401);
    }
    
    /**
     * Send forbidden response
     */
    public static function forbidden($message = 'Forbidden - Insufficient permissions') {
        self::error($message, 403);
    }
    
    /**
     * Send not found response
     */
    public static function notFound($message = 'Resource not found') {
        self::error($message, 404);
    }
    
    /**
     * Send validation error response
     */
    public static function validationError($errors) {
        self::error('Validation failed', 422, $errors);
    }
    
    /**
     * Send server error response
     */
    public static function serverError($message = 'Internal server error') {
        self::error($message, 500);
    }
}

/**
 * Helper function to send JSON response
 */
function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}
