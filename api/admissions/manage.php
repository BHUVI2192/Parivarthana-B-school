<?php
/**
 * Admission Enquiries Management API
 * Submit and manage admission enquiries (Admin and Admission Staff)
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../auth/middleware.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

try {
    $db = getDB();
    
    switch ($method) {
        case 'GET':
            // View enquiries - Admin and Admission Staff only
            $user = AuthMiddleware::requireRole(['admin', 'admission_staff']);
            
            $status = $_GET['status'] ?? null;
            $program = $_GET['program'] ?? null;
            
            $sql = "
                SELECT ae.*, u.full_name as assigned_to_name
                FROM admission_enquiries ae
                LEFT JOIN users u ON ae.assigned_to = u.id
                WHERE 1=1
            ";
            $params = [];
            
            if ($status && $status !== 'all') {
                $sql .= " AND ae.status = ?";
                $params[] = $status;
            }
            
            if ($program && $program !== 'all') {
                $sql .= " AND ae.program_interest = ?";
                $params[] = $program;
            }
            
            $sql .= " ORDER BY ae.created_at DESC";
            
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            $enquiries = $stmt->fetchAll();
            
            Response::success($enquiries);
            break;
            
        case 'POST':
            // Submit enquiry - Public endpoint (no auth required)
            $input = json_decode(file_get_contents('php://input'), true);
            
            $studentName = trim($input['student_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $phone = trim($input['phone'] ?? '');
            $programInterest = $input['program_interest'] ?? '';
            $qualification = trim($input['qualification'] ?? '');
            $message = trim($input['message'] ?? '');
            
            // Validation
            $errors = [];
            if (empty($studentName)) $errors['student_name'] = 'Name is required';
            if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errors['email'] = 'Valid email is required';
            }
            if (empty($phone)) $errors['phone'] = 'Phone number is required';
            if (!in_array($programInterest, ['BBA', 'BCA', 'BCom', 'MBA', 'MCA'])) {
                $errors['program_interest'] = 'Valid program is required';
            }
            
            if (!empty($errors)) {
                Response::validationError($errors);
            }
            
            $stmt = $db->prepare("
                INSERT INTO admission_enquiries (student_name, email, phone, program_interest, qualification, message, status)
                VALUES (?, ?, ?, ?, ?, ?, 'pending')
            ");
            $stmt->execute([$studentName, $email, $phone, $programInterest, $qualification, $message]);
            
            $newId = $db->lastInsertId();
            
            // Log activity (if user is logged in)
            $currentUser = getCurrentUser();
            if ($currentUser) {
                $stmt = $db->prepare("
                    INSERT INTO activity_logs (user_id, action, entity_type, entity_id, new_values)
                    VALUES (?, 'create', 'admission_enquiry', ?, ?)
                ");
                $stmt->execute([$currentUser['id'], $newId, json_encode(['student_name' => $studentName, 'program' => $programInterest])]);
            }
            
            Response::success(['id' => $newId], 'Enquiry submitted successfully', 201);
            break;
            
        case 'PUT':
            // Update enquiry status - Admin and Admission Staff
            $user = AuthMiddleware::requireRole(['admin', 'admission_staff']);
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Check for ID in both body and URL query parameter
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Enquiry ID is required');
            }
            
            $stmt = $db->prepare("SELECT * FROM admission_enquiries WHERE id = ?");
            $stmt->execute([$id]);
            $existing = $stmt->fetch();
            
            if (!$existing) {
                Response::notFound('Enquiry not found');
            }
            
            // Build update query
            $updates = [];
            $params = [];
            
            if (isset($input['status']) && in_array($input['status'], ['pending', 'contacted', 'admitted', 'rejected'])) {
                $updates[] = "status = ?";
                $params[] = $input['status'];
            }
            
            if (isset($input['assigned_to'])) {
                $updates[] = "assigned_to = ?";
                $params[] = $input['assigned_to'] ?: null;
            }
            
            if (isset($input['notes'])) {
                $updates[] = "notes = ?";
                $params[] = $input['notes'];
            }
            
            if (empty($updates)) {
                Response::error('No fields to update');
            }
            
            $params[] = $id;
            $sql = "UPDATE admission_enquiries SET " . implode(', ', $updates) . ", updated_at = NOW() WHERE id = ?";
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            
            // Log activity
            $stmt = $db->prepare("
                INSERT INTO activity_logs (user_id, action, entity_type, entity_id, old_values, new_values)
                VALUES (?, 'update', 'admission_enquiry', ?, ?, ?)
            ");
            $stmt->execute([$user['id'], $id, json_encode($existing), json_encode($input)]);
            
            Response::success(null, 'Enquiry updated successfully');
            break;
            
        default:
            Response::error('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("Admission management error: " . $e->getMessage());
    Response::serverError('An error occurred');
}
