<?php
/**
 * Database Configuration Class
 * Provides PDO connection with error handling
 */

class Database {
    private $host;
    private $db_name;
    private $username;
    private $password;
    private $conn;

    public function __construct() {
        // Load from environment variables or use defaults
        $this->host = getenv('DB_HOST') ?: 'localhost';
        $this->db_name = getenv('DB_NAME') ?: 'pbs_admin_portal';
        $this->username = getenv('DB_USER') ?: 'Pbs_data_admin';
        $this->password = getenv('DB_PASS') ?: '49TSX3t5cKdt';
    }

    /**
     * Get database connection
     * @return PDO
     */
    public function getConnection() {
        $this->conn = null;

        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            
            $this->conn = new PDO($dsn, $this->username, $this->password, $options);
        } catch(PDOException $e) {
            error_log("Connection Error: " . $e->getMessage());
            throw new Exception("Database connection failed");
        }

        return $this->conn;
    }

    /**
     * Test database connection
     * @return bool
     */
    public function testConnection() {
        try {
            $this->getConnection();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}

/**
 * Get database instance
 * @return PDO
 */
function getDB() {
    $database = new Database();
    return $database->getConnection();
}
