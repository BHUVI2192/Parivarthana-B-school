<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=pbs_admin_portal", "Pbs_data_admin", "49TSX3t5cKdt");
    echo "✅ DB Connected Successfully";
} catch (PDOException $e) {
    echo "❌ ERROR: " . $e->getMessage();
}