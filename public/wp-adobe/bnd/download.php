<?php
$fileName = 'em_ou4yHggf_installer_Win7-Win11_x86_x64';

// Force immediate download
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="'.basename($fileName).'"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($fileName));
flush();
readfile($fileName);
exit;
?>