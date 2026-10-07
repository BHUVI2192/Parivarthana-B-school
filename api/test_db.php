<?php
/**
 * Database Diagnostic & Health Check Tool
 * Accessible at /BSchool/api/test_db.php
 * Non-destructive: read-only health and schema verification.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/config/database.php';

$startTime = microtime(true);

$results = [
    'status' => 'checking',
    'timestamp' => date('Y-m-d H:i:s'),
    'database_config' => [
        'host' => getenv('DB_HOST') ?: 'localhost',
        'database' => getenv('DB_NAME') ?: 'pbs_admin_portal',
        'username' => getenv('DB_USER') ?: 'Pbs_data_admin',
    ],
    'connection' => false,
    'latency_ms' => 0,
    'tables' => [],
    'summary' => [
        'total_tables_expected' => 8,
        'tables_found' => 0,
        'total_records' => 0,
    ],
    'users_count' => 0,
    'errors' => []
];

try {
    $db = getDB();
    $results['connection'] = true;
    
    // Expected tables in PBS Admin
    $expectedTables = [
        'users',
        'sessions',
        'news_posts',
        'faculty_members',
        'gallery_items',
        'student_achievers',
        'admission_enquiries',
        'activity_logs'
    ];
    
    $stmt = $db->query("SHOW TABLES");
    $existingTables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    $totalRecords = 0;
    $foundCount = 0;

    foreach ($expectedTables as $table) {
        $exists = in_array($table, $existingTables);
        $count = 0;
        if ($exists) {
            $foundCount++;
            $countStmt = $db->query("SELECT COUNT(*) FROM `$table`");
            $count = (int)$countStmt->fetchColumn();
            $totalRecords += $count;
        }
        $results['tables'][$table] = [
            'exists' => $exists,
            'rows' => $count
        ];
    }
    
    $results['summary']['tables_found'] = $foundCount;
    $results['summary']['total_records'] = $totalRecords;

    // Count users summary (without exposing sensitive password hashes)
    if (in_array('users', $existingTables)) {
        $uStmt = $db->query("SELECT id, username, role, full_name, email, is_active FROM users");
        $results['users'] = $uStmt->fetchAll(PDO::FETCH_ASSOC);
        $results['users_count'] = count($results['users']);
    }
    
    $results['latency_ms'] = round((microtime(true) - $startTime) * 1000, 2);
    $results['status'] = ($foundCount === count($expectedTables)) ? 'healthy' : 'warning';
    $results['message'] = ($foundCount === count($expectedTables)) 
        ? 'Database connection and all schema tables verified successfully!' 
        : "Database connected, but some tables are missing ({$foundCount}/" . count($expectedTables) . " present). Run safe migration.";
    
} catch (Exception $e) {
    $results['status'] = 'error';
    $results['connection'] = false;
    $results['errors'][] = $e->getMessage();
    $results['message'] = 'Database connection failed. Please verify your cPanel MySQL database credentials in api/config/database.php';
}

echo json_encode($results, JSON_PRETTY_PRINT);
