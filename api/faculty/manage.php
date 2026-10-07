<?php
/**
 * Faculty Management API
 * CRUD operations for faculty members (Admin and Staff)
 */

session_start();

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/FileUpload.php';
require_once __DIR__ . '/../auth/middleware.php';

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

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
            // Public endpoint for viewing faculty
            $program = $_GET['program'] ?? null;
            
            if (isset($_GET['admin'])) {
                // Admin view
                if (isset($_GET['id'])) {
                    $stmt = $db->prepare("SELECT * FROM faculty_members WHERE id = ?");
                    $stmt->execute([$_GET['id']]);
                    $faculty = $stmt->fetch();
                    
                    if (!$faculty) {
                        Response::notFound('Faculty member not found');
                    }
                    
                    Response::success($faculty);
                } else {
                    $sql = "SELECT * FROM faculty_members ORDER BY display_order ASC, id ASC";
                    $stmt = $db->query($sql);
                    $faculty = $stmt->fetchAll();
                    Response::success($faculty);
                }
            } else {
                // Public view - only active faculty
                $sql = "
                    SELECT id, name, designation, qualifications, experience_years, photo_url, program, display_order, is_active
                    FROM faculty_members
                    WHERE is_active = TRUE
                ";
                $params = [];
                
                if ($program) {
                    $sql .= " AND program = ?";
                    $params[] = $program;
                }
                
                $sql .= " ORDER BY display_order ASC, id ASC";
                
                $stmt = $db->prepare($sql);
                $stmt->execute($params);
                $faculty = $stmt->fetchAll();
                Response::success($faculty);
            }
            break;
            
        case 'POST':
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            if (!is_array($input)) {
                $input = $_POST;
            }
            
            // Check for batch reorder
            if (isset($input['action']) && $input['action'] === 'reorder' && isset($input['items']) && is_array($input['items'])) {
                $db->beginTransaction();
                $updateStmt = $db->prepare("UPDATE faculty_members SET display_order = ? WHERE id = ?");
                foreach ($input['items'] as $item) {
                    if (isset($item['id']) && isset($item['display_order'])) {
                        $updateStmt->execute([intval($item['display_order']), intval($item['id'])]);
                    }
                }
                $db->commit();
                Response::success(null, 'Faculty order updated successfully');
                break;
            }
            
            $name = trim($input['name'] ?? $_POST['name'] ?? '');
            $designation = trim($input['designation'] ?? $_POST['designation'] ?? '');
            $qualifications = trim($input['qualifications'] ?? $_POST['qualifications'] ?? '');
            $experienceYears = trim($input['experience_years'] ?? $_POST['experience_years'] ?? '');
            $program = trim($input['program'] ?? $_POST['program'] ?? 'BBA');
            $displayOrder = intval($input['display_order'] ?? $_POST['display_order'] ?? 1);
            $isActive = isset($input['is_active']) ? ($input['is_active'] ? 1 : 0) : 1;
            
            // Validation
            $errors = [];
            if (empty($name)) $errors['name'] = 'Name is required';
            if (empty($designation)) $errors['designation'] = 'Designation is required';
            
            if (!empty($errors)) {
                Response::validationError($errors);
            }
            
            // Handle photo upload (multipart or base64)
            $photoUrl = trim($input['photo_url'] ?? $_POST['photo_url'] ?? '');
            if (isset($_FILES['photo']) && $_FILES['photo']['error'] !== UPLOAD_ERR_NO_FILE) {
                $uploader = new FileUpload();
                $result = $uploader->upload($_FILES['photo'], 'faculty');
                if ($result['success']) {
                    $photoUrl = $result['file_path'];
                }
            } else if (!empty($photoUrl) && strpos($photoUrl, 'data:image/') === 0) {
                $uploader = new FileUpload();
                $result = $uploader->uploadBase64($photoUrl, 'faculty');
                if ($result['success']) {
                    $photoUrl = $result['file_path'];
                }
            }
            
            $userId = 1;
            $user = AuthMiddleware::authenticate();
            if ($user && isset($user['id'])) {
                $userId = $user['id'];
            }
            
            $stmt = $db->prepare("
                INSERT INTO faculty_members (name, designation, qualifications, experience_years, photo_url, program, display_order, is_active, created_by)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ");
            $stmt->execute([$name, $designation, $qualifications, $experienceYears, $photoUrl, $program, $displayOrder, $isActive, $userId]);
            
            $newId = $db->lastInsertId();
            
            Response::success([
                'id' => $newId,
                'name' => $name,
                'designation' => $designation,
                'qualifications' => $qualifications,
                'experience_years' => $experienceYears,
                'photo_url' => $photoUrl,
                'program' => $program,
                'display_order' => $displayOrder,
                'is_active' => (bool)$isActive
            ], 'Faculty member created successfully', 201);
            break;
            
        case 'PUT':
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            if (!is_array($input)) {
                parse_str($rawInput, $input);
            }
            
            // Check for batch reorder
            if (isset($input['action']) && $input['action'] === 'reorder' && isset($input['items']) && is_array($input['items'])) {
                $db->beginTransaction();
                $updateStmt = $db->prepare("UPDATE faculty_members SET display_order = ? WHERE id = ?");
                foreach ($input['items'] as $item) {
                    if (isset($item['id']) && isset($item['display_order'])) {
                        $updateStmt->execute([intval($item['display_order']), intval($item['id'])]);
                    }
                }
                $db->commit();
                Response::success(null, 'Faculty order updated successfully');
                break;
            }
            
            $id = $input['id'] ?? $_GET['id'] ?? null;
            if (!$id) {
                Response::error('Faculty member ID is required');
            }
            
            // Fetch existing
            $stmt = $db->prepare("SELECT * FROM faculty_members WHERE id = ?");
            $stmt->execute([$id]);
            $faculty = $stmt->fetch();
            
            if (!$faculty) {
                Response::notFound('Faculty member not found');
            }
            
            $name = isset($input['name']) ? trim($input['name']) : $faculty['name'];
            $designation = isset($input['designation']) ? trim($input['designation']) : $faculty['designation'];
            $qualifications = isset($input['qualifications']) ? trim($input['qualifications']) : $faculty['qualifications'];
            $experienceYears = isset($input['experience_years']) ? trim($input['experience_years']) : $faculty['experience_years'];
            $program = isset($input['program']) ? trim($input['program']) : $faculty['program'];
            $displayOrder = isset($input['display_order']) ? intval($input['display_order']) : $faculty['display_order'];
            $photoUrl = isset($input['photo_url']) ? trim($input['photo_url']) : $faculty['photo_url'];
            $isActive = isset($input['is_active']) ? ($input['is_active'] ? 1 : 0) : $faculty['is_active'];
            
            // Handle photo upload (multipart or base64)
            if (isset($_FILES['photo']) && $_FILES['photo']['error'] !== UPLOAD_ERR_NO_FILE) {
                $uploader = new FileUpload();
                $result = $uploader->upload($_FILES['photo'], 'faculty');
                if ($result['success']) {
                    $photoUrl = $result['file_path'];
                }
            } else if (!empty($photoUrl) && strpos($photoUrl, 'data:image/') === 0) {
                $uploader = new FileUpload();
                $result = $uploader->uploadBase64($photoUrl, 'faculty');
                if ($result['success']) {
                    $photoUrl = $result['file_path'];
                }
            }
            
            $stmt = $db->prepare("
                UPDATE faculty_members
                SET name = ?, designation = ?, qualifications = ?, experience_years = ?, photo_url = ?, program = ?, display_order = ?, is_active = ?, updated_at = NOW()
                WHERE id = ?
            ");
            $stmt->execute([$name, $designation, $qualifications, $experienceYears, $photoUrl, $program, $displayOrder, $isActive, $id]);
            
            Response::success([
                'id' => $id,
                'name' => $name,
                'designation' => $designation,
                'qualifications' => $qualifications,
                'experience_years' => $experienceYears,
                'photo_url' => $photoUrl,
                'program' => $program,
                'display_order' => $displayOrder,
                'is_active' => (bool)$isActive
            ], 'Faculty member updated successfully');
            break;
            
        case 'DELETE':
            $rawInput = file_get_contents('php://input');
            $input = json_decode($rawInput, true);
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                Response::error('Faculty member ID is required');
            }
            
            $stmt = $db->prepare("DELETE FROM faculty_members WHERE id = ?");
            $stmt->execute([$id]);
            
            Response::success(null, 'Faculty member deleted successfully');
            break;
            
        default:
            Response::error('Method not allowed', 405);
    }
    
} catch (Exception $e) {
    error_log("Faculty API Error: " . $e->getMessage());
    Response::serverError($e->getMessage());
}
