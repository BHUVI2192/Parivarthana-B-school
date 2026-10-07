<?php
/**
 * Dashboard Sync API
 * Unified endpoint for real-time updates with timestamp-based fetching
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../auth/middleware.php';
require_once __DIR__ . '/../services/BlogScraper.php';

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

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    Response::error('Method not allowed', 405);
}

try {
    $db = getDB();
    
    // Get last fetch timestamp from client
    $lastFetch = $_GET['last_fetch'] ?? '1970-01-01 00:00:00';
    $user = getCurrentUser();
    
    $response = [
        'timestamp' => date('Y-m-d H:i:s'),
        'has_updates' => false,
        'data' => []
    ];
    
    // Fetch visible news posts
    $stmt = $db->prepare("
        SELECT id, title, content, blog_url, image_url, category, published_date, updated_at
        FROM news_posts
        WHERE is_visible = TRUE AND updated_at > ?
        ORDER BY is_featured DESC, published_date DESC
    ");
    $stmt->execute([$lastFetch]);
    $news = $stmt->fetchAll();
    
    if (!empty($news)) {
        $response['has_updates'] = true;
        $response['data']['news'] = $news;
    }
    
    // Fetch active faculty
    $program = $_GET['program'] ?? null;
    $sql = "
        SELECT id, name, designation, qualifications, experience_years, photo_url, program, updated_at
        FROM faculty_members
        WHERE is_active = TRUE AND updated_at > ?
    ";
    $params = [$lastFetch];
    
    if ($program) {
        $sql .= " AND program = ?";
        $params[] = $program;
    }
    
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $faculty = $stmt->fetchAll();
    
    if (!empty($faculty)) {
        $response['has_updates'] = true;
        $response['data']['faculty'] = $faculty;
    }
    
    // Fetch active gallery items
    $category = $_GET['gallery_category'] ?? null;
    $sql = "
        SELECT id, title, description, image_url, category, created_at, updated_at
        FROM gallery_items
        WHERE is_active = TRUE AND updated_at > ?
    ";
    $params = [$lastFetch];
    
    if ($category && $category !== 'All') {
        $sql .= " AND category = ?";
        $params[] = $category;
    }
    
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $gallery = $stmt->fetchAll();
    
    if (!empty($gallery)) {
        $response['has_updates'] = true;
        $response['data']['gallery'] = $gallery;
    }
    
    // Fetch active achievers
    $achieverCategory = $_GET['achiever_category'] ?? null;
    $sql = "
        SELECT id, name, achievement, category, year, image_url, description, updated_at
        FROM student_achievers
        WHERE is_active = TRUE AND updated_at > ?
    ";
    $params = [$lastFetch];
    
    if ($achieverCategory && $achieverCategory !== 'All') {
        $sql .= " AND category = ?";
        $params[] = $achieverCategory;
    }
    
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    $achievers = $stmt->fetchAll();
    
    if (!empty($achievers)) {
        $response['has_updates'] = true;
        $response['data']['achievers'] = $achievers;
    }
    
    // Fetch blog posts (with caching)
    $scraper = new BlogScraper();
    $blogPosts = $scraper->fetchPosts();
    
    if (!empty($blogPosts)) {
        $response['data']['blog_posts'] = $blogPosts;
    }
    
    // If user is authenticated, include admin-specific data
    if ($user) {
        // Count pending enquiries for badge
        if (in_array($user['role'], ['admin', 'admission_staff'])) {
            $stmt = $db->query("
                SELECT COUNT(*) as count FROM admission_enquiries WHERE status = 'pending'
            ");
            $pendingCount = $stmt->fetch();
            $response['data']['pending_enquiries'] = $pendingCount['count'];
        }
        
        // Recent activity logs
        if ($user['role'] === 'admin') {
            $stmt = $db->prepare("
                SELECT al.*, u.full_name as user_name
                FROM activity_logs al
                LEFT JOIN users u ON al.user_id = u.id
                ORDER BY al.created_at DESC
                LIMIT 10
            ");
            $stmt->execute();
            $response['data']['recent_activity'] = $stmt->fetchAll();
        }
    }
    
    Response::success($response);
    
} catch (Exception $e) {
    error_log("Dashboard sync error: " . $e->getMessage());
    Response::serverError('An error occurred while fetching updates');
}
