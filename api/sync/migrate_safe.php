<?php
/**
 * Safe Database Migration & Schema Verification API
 * Non-destructive: Safe to run repeatedly on production databases.
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $db = getDB();
    $startTime = microtime(true);
    
    // List of safe table creation queries
    $tableQueries = [
        'users' => "
            CREATE TABLE IF NOT EXISTS `users` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `username` VARCHAR(50) NOT NULL UNIQUE,
                `password_hash` VARCHAR(255) NOT NULL,
                `role` ENUM('admin', 'admission_staff', 'staff') NOT NULL DEFAULT 'staff',
                `full_name` VARCHAR(100) NOT NULL,
                `email` VARCHAR(100) NOT NULL UNIQUE,
                `is_active` BOOLEAN DEFAULT TRUE,
                `last_login` TIMESTAMP NULL,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                INDEX `idx_role` (`role`),
                INDEX `idx_is_active` (`is_active`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'sessions' => "
            CREATE TABLE IF NOT EXISTS `sessions` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `user_id` INT NOT NULL,
                `session_token` VARCHAR(255) NOT NULL UNIQUE,
                `expires_at` TIMESTAMP NOT NULL,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
                INDEX `idx_session_token` (`session_token`),
                INDEX `idx_expires_at` (`expires_at`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'news_posts' => "
            CREATE TABLE IF NOT EXISTS `news_posts` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `title` VARCHAR(255) NOT NULL,
                `content` TEXT,
                `blog_url` VARCHAR(500),
                `image_url` VARCHAR(500),
                `category` VARCHAR(50) DEFAULT 'General',
                `is_featured` BOOLEAN DEFAULT FALSE,
                `is_visible` BOOLEAN DEFAULT TRUE,
                `published_date` DATE,
                `scraped_from_blog` BOOLEAN DEFAULT FALSE,
                `created_by` INT,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE SET NULL,
                INDEX `idx_is_visible` (`is_visible`),
                INDEX `idx_is_featured` (`is_featured`),
                INDEX `idx_category` (`category`),
                INDEX `idx_published_date` (`published_date`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'faculty_members' => "
            CREATE TABLE IF NOT EXISTS `faculty_members` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `name` VARCHAR(100) NOT NULL,
                `designation` VARCHAR(100) NOT NULL,
                `qualifications` VARCHAR(255),
                `experience_years` VARCHAR(50),
                `photo_url` VARCHAR(500),
                `program` VARCHAR(50) NOT NULL,
                `is_active` BOOLEAN DEFAULT TRUE,
                `display_order` INT DEFAULT 0,
                `created_by` INT,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE SET NULL,
                INDEX `idx_program` (`program`),
                INDEX `idx_is_active` (`is_active`),
                INDEX `idx_display_order` (`display_order`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'gallery_items' => "
            CREATE TABLE IF NOT EXISTS `gallery_items` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `title` VARCHAR(200) NOT NULL,
                `description` TEXT,
                `image_url` VARCHAR(500) NOT NULL,
                `category` VARCHAR(50) DEFAULT 'General',
                `uploaded_by` INT,
                `is_active` BOOLEAN DEFAULT TRUE,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`uploaded_by`) REFERENCES `users`(`id`) ON DELETE SET NULL,
                INDEX `idx_category` (`category`),
                INDEX `idx_is_active` (`is_active`),
                INDEX `idx_created_at` (`created_at`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'student_achievers' => "
            CREATE TABLE IF NOT EXISTS `student_achievers` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `name` VARCHAR(100) NOT NULL,
                `achievement` VARCHAR(255) NOT NULL,
                `category` ENUM('Academic', 'Sports', 'Cultural', 'Technical', 'Social Service', 'Leadership') NOT NULL,
                `year` VARCHAR(10) NOT NULL,
                `image_url` VARCHAR(500),
                `description` TEXT,
                `is_active` BOOLEAN DEFAULT TRUE,
                `created_by` INT,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE SET NULL,
                INDEX `idx_category` (`category`),
                INDEX `idx_year` (`year`),
                INDEX `idx_is_active` (`is_active`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'admission_enquiries' => "
            CREATE TABLE IF NOT EXISTS `admission_enquiries` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `student_name` VARCHAR(100) NOT NULL,
                `email` VARCHAR(100) NOT NULL,
                `phone` VARCHAR(20) NOT NULL,
                `program_interest` ENUM('BBA', 'BCA', 'BCom', 'MBA', 'MCA') NOT NULL,
                `qualification` VARCHAR(100),
                `message` TEXT,
                `status` ENUM('pending', 'contacted', 'admitted', 'rejected') DEFAULT 'pending',
                `assigned_to` INT,
                `notes` TEXT,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (`assigned_to`) REFERENCES `users`(`id`) ON DELETE SET NULL,
                INDEX `idx_status` (`status`),
                INDEX `idx_program_interest` (`program_interest`),
                INDEX `idx_created_at` (`created_at`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ",
        'activity_logs' => "
            CREATE TABLE IF NOT EXISTS `activity_logs` (
                `id` INT AUTO_INCREMENT PRIMARY KEY,
                `user_id` INT,
                `action` VARCHAR(50) NOT NULL,
                `entity_type` VARCHAR(50) NOT NULL,
                `entity_id` INT,
                `old_values` JSON,
                `new_values` JSON,
                `ip_address` VARCHAR(45),
                `user_agent` TEXT,
                `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL,
                INDEX `idx_user_id` (`user_id`),
                INDEX `idx_entity` (`entity_type`, `entity_id`),
                INDEX `idx_created_at` (`created_at`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        "
    ];

    $tableReport = [];

    // Safely create tables if they do not exist
    foreach ($tableQueries as $tableName => $sql) {
        $db->exec($sql);
        
        // Count existing rows
        $stmt = $db->query("SELECT COUNT(*) FROM `$tableName`");
        $rowCount = (int)$stmt->fetchColumn();
        
        $tableReport[$tableName] = [
            'status' => 'verified',
            'rows' => $rowCount
        ];
    }

    // Ensure default admin user exists if table is empty
    $userCountStmt = $db->query("SELECT COUNT(*) FROM `users` WHERE `role` = 'admin'");
    $adminCount = (int)$userCountStmt->fetchColumn();
    
    if ($adminCount === 0) {
        $db->exec("
            INSERT IGNORE INTO `users` (`username`, `password_hash`, `role`, `full_name`, `email`, `is_active`) 
            VALUES ('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 'System Administrator', 'admin@pbs.edu', TRUE)
        ");
        $tableReport['users']['default_admin_created'] = true;
    } else {
        $tableReport['users']['default_admin_created'] = false;
    }

    $executionTime = round((microtime(true) - $startTime) * 1000, 2);

    Response::success([
        'status' => 'success',
        'message' => 'Safe database schema verification completed successfully. No existing data was altered.',
        'latency_ms' => $executionTime,
        'tables' => $tableReport,
        'timestamp' => date('Y-m-d H:i:s')
    ]);

} catch (Exception $e) {
    Response::serverError('Migration / Verification error: ' . $e->getMessage());
}
