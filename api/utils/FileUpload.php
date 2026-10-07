<?php
/**
 * File Upload Utility Class
 * Handles secure file uploads for faculty photos and gallery images
 */

class FileUpload {
    
    private $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    private $maxFileSize = 10485760; // 10MB
    private $uploadPath;
    
    public function __construct($uploadDir = 'uploads/') {
        $this->uploadPath = __DIR__ . '/../../' . $uploadDir;
    }
    
    /**
     * Upload a multipart file
     * @param array $file - $_FILES array element
     * @param string $subdirectory - Subdirectory (faculty/gallery)
     * @return array - Upload result with success status and file path
     */
    public function upload($file, $subdirectory = '') {
        // Check for upload errors
        if ($file['error'] !== UPLOAD_ERR_OK) {
            return [
                'success' => false,
                'message' => $this->getUploadError($file['error'])
            ];
        }
        
        // Validate file size
        if ($file['size'] > $this->maxFileSize) {
            return [
                'success' => false,
                'message' => 'File size exceeds maximum limit of 10MB'
            ];
        }
        
        // Validate file extension
        $fileName = $file['name'];
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
        if ($fileExtension === 'jpeg') $fileExtension = 'jpg';
        
        if (!in_array($fileExtension, $this->allowedExtensions)) {
            return [
                'success' => false,
                'message' => 'Invalid file type. Allowed: ' . implode(', ', $this->allowedExtensions)
            ];
        }
        
        // Validate MIME type
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);
        
        $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!in_array($mimeType, $allowedMimeTypes)) {
            return [
                'success' => false,
                'message' => 'Invalid file content type'
            ];
        }
        
        // Create directory if not exists
        $targetDir = $this->uploadPath . $subdirectory;
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0755, true);
        }
        
        // Generate unique filename
        $newFileName = uniqid() . '_' . time() . '.' . $fileExtension;
        $targetPath = $targetDir . '/' . $newFileName;
        
        // Move uploaded file
        if (move_uploaded_file($file['tmp_name'], $targetPath)) {
            $relativePath = 'uploads/' . ($subdirectory ? $subdirectory . '/' : '') . $newFileName;
            
            return [
                'success' => true,
                'message' => 'File uploaded successfully',
                'file_path' => $relativePath,
                'file_name' => $newFileName
            ];
        }
        
        return [
            'success' => false,
            'message' => 'Failed to move uploaded file'
        ];
    }

    /**
     * Upload base64 encoded image data URL
     * @param string $base64Data - Data URL string (e.g. data:image/jpeg;base64,...)
     * @param string $subdirectory - Subdirectory (faculty/gallery)
     * @return array - Upload result with success status and file path
     */
    public function uploadBase64($base64Data, $subdirectory = '') {
        if (!preg_match('/^data:image\/(\w+);base64,/', $base64Data, $type)) {
            return [
                'success' => false,
                'message' => 'Invalid base64 image format'
            ];
        }
        
        $extension = strtolower($type[1]);
        if ($extension === 'jpeg') $extension = 'jpg';
        
        if (!in_array($extension, $this->allowedExtensions)) {
            return [
                'success' => false,
                'message' => 'Invalid file extension'
            ];
        }
        
        $data = substr($base64Data, strpos($base64Data, ',') + 1);
        $data = base64_decode($data);
        
        if ($data === false) {
            return [
                'success' => false,
                'message' => 'Failed to decode base64 image'
            ];
        }
        
        $targetDir = $this->uploadPath . $subdirectory;
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0755, true);
        }
        
        $newFileName = uniqid() . '_' . time() . '.' . $extension;
        $targetPath = $targetDir . '/' . $newFileName;
        
        if (file_put_contents($targetPath, $data)) {
            $relativePath = 'uploads/' . ($subdirectory ? $subdirectory . '/' : '') . $newFileName;
            return [
                'success' => true,
                'message' => 'File saved successfully',
                'file_path' => $relativePath,
                'file_name' => $newFileName
            ];
        }
        
        return [
            'success' => false,
            'message' => 'Failed to write file to disk'
        ];
    }
    
    /**
     * Delete a file
     * @param string $filePath - Relative file path
     * @return bool
     */
    public function delete($filePath) {
        $cleanPath = preg_replace('#^/BSchool/#', '', $filePath);
        $cleanPath = ltrim($cleanPath, '/');
        $fullPath = __DIR__ . '/../../' . $cleanPath;
        
        if (file_exists($fullPath)) {
            return unlink($fullPath);
        }
        
        return false;
    }
    
    /**
     * Get upload error message
     * @param int $errorCode
     * @return string
     */
    private function getUploadError($errorCode) {
        $errors = [
            UPLOAD_ERR_INI_SIZE => 'File exceeds upload_max_filesize directive',
            UPLOAD_ERR_FORM_SIZE => 'File exceeds MAX_FILE_SIZE directive',
            UPLOAD_ERR_PARTIAL => 'File was only partially uploaded',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded',
            UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
            UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the upload'
        ];
        
        return $errors[$errorCode] ?? 'Unknown upload error';
    }
}
