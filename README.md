# PBS Admin Portal - Local Setup Guide

## Prerequisites

- XAMPP/WAMP/MAMP (PHP 8.0+ and MySQL)
- Node.js 18+ and npm
- Git (optional)

## Step 1: Install XAMPP

1. Download and install XAMPP from https://www.apachefriends.org/
2. Start Apache and MySQL services from XAMPP Control Panel

## Step 2: Database Setup

1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Create a new database named `pbs_admin_portal`
3. Import the database schema:
   - Click on the `pbs_admin_portal` database
   - Go to "Import" tab
   - Select `database/schema.sql` file
   - Click "Go"

## Step 3: Project Setup

### Option A: Using XAMPP htdocs (Recommended)

1. Copy the entire `project` folder to `C:\xampp\htdocs\pbs-admin`
2. Rename `.env` file and update database credentials:
   ```
   DB_HOST=localhost
   DB_NAME=pbs_admin_portal
   DB_USER=root
   DB_PASS=
   ```

### Option B: Using Project Folder Directly

1. Keep project in current location
2. Create a virtual host in Apache pointing to the project folder

## Step 4: Frontend Setup

1. Open terminal in project folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Step 5: Access the Application

### Frontend (React)
- URL: http://localhost:5173
- This is the main website with public pages

### Backend (PHP APIs)
- Base URL: http://localhost/pbs-admin/api/
- Test: http://localhost/pbs-admin/api/test-connection.php

### Admin Portal
- Login: http://localhost:5173/admin/login
- Default credentials:
  - Admin: `admin` / `admin123`
  - Admission Staff: `admission1` / `staff123`
  - Staff: `staff1` / `staff123`

## API Endpoints

### Authentication
- POST `/api/auth/login.php` - Login
- POST `/api/auth/logout.php` - Logout
- GET `/api/auth/verify.php` - Verify session

### Dashboard
- GET `/api/sync/dashboard.php` - Real-time sync (polling)

### Management APIs
- GET/POST/PUT/DELETE `/api/users/manage.php` - User management (Admin only)
- GET/POST/PUT/DELETE `/api/news/manage.php` - News management (Admin only)
- GET/POST/PUT/DELETE `/api/faculty/manage.php` - Faculty management (Admin only)
- GET/POST/PUT/DELETE `/api/gallery/manage.php` - Gallery management (Admin/Staff)
- GET/POST/PUT/DELETE `/api/achievers/manage.php` - Achievers management (Admin/Staff)
- GET/POST/PUT `/api/admissions/manage.php` - Admission enquiries (Admin/Admission Staff)

## Troubleshooting

### CORS Errors
If you get CORS errors, make sure:
1. Apache is running on port 80
2. React dev server is running on port 5173
3. API calls use full URLs or relative paths

### Database Connection Failed
1. Check if MySQL is running in XAMPP
2. Verify database credentials in `.env` file
3. Test connection: http://localhost/pbs-admin/api/test-connection.php

### File Upload Issues
1. Create `uploads` folder if not exists
2. Set permissions: `chmod 755 uploads` (Linux/Mac)
3. Check PHP `upload_max_filesize` in php.ini (default 5MB)

### Blog Feed Not Loading
1. Check internet connection
2. Verify RSS URL in `.env` file
3. Check `cache` folder permissions

## Production Deployment (cPanel)

1. Build React app: `npm run build`
2. Upload `dist` folder contents to `public_html`
3. Upload `api` folder to `public_html/api`
4. Upload `uploads` and `cache` folders
5. Import database using cPanel MySQL
6. Update `.env` with production database credentials

## File Structure

```
project/
├── api/                    # PHP backend APIs
│   ├── auth/              # Authentication
│   ├── config/            # Database config
│   ├── utils/             # Helper classes
│   ├── services/          # Blog scraper
│   ├── sync/              # Real-time sync
│   └── [module]/          # Management APIs
├── src/
│   ├── components/admin/  # Admin components
│   ├── contexts/          # AuthContext
│   ├── hooks/             # useRealtimeSync
│   └── pages/             # Page components
├── database/
│   └── schema.sql         # Database schema
├── uploads/               # File uploads
├── cache/                 # Blog feed cache
└── .env                   # Configuration
```

## Support

For issues or questions, check the browser console and PHP error logs at:
- XAMPP: `C:\xampp\apache\logs\error.log`
- PHP: `C:\xampp\php\logs\php_error_log`
