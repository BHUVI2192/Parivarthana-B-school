-- Admin Portal Database Schema
-- Role-Based Access Control System

-- Create database
CREATE DATABASE IF NOT EXISTS pbs_admin_portal CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pbs_admin_portal;

-- Users table with role-based access control
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'admission_staff', 'staff') NOT NULL DEFAULT 'staff',
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_role (role),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sessions table for authentication
CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(255) NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_session_token (session_token),
    INDEX idx_expires_at (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- News posts table (Module 1 - Admin only)
CREATE TABLE news_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    blog_url VARCHAR(500),
    image_url VARCHAR(500),
    category VARCHAR(50) DEFAULT 'General',
    is_featured BOOLEAN DEFAULT FALSE,
    is_visible BOOLEAN DEFAULT FALSE,
    published_date DATE,
    scraped_from_blog BOOLEAN DEFAULT FALSE,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_is_visible (is_visible),
    INDEX idx_is_featured (is_featured),
    INDEX idx_category (category),
    INDEX idx_published_date (published_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Faculty members table (Module 2 - Admin only)
CREATE TABLE faculty_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    qualifications VARCHAR(255),
    experience_years VARCHAR(50),
    photo_url VARCHAR(500),
    program ENUM('BBA', 'BCA', 'BCom', 'MBA', 'MCA') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_program (program),
    INDEX idx_is_active (is_active),
    INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Gallery items table (Module 3 - Admin and Staff)
CREATE TABLE gallery_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    category VARCHAR(50) DEFAULT 'General',
    uploaded_by INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_category (category),
    INDEX idx_is_active (is_active),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student achievers table (Module 4 - Admin and Staff)
CREATE TABLE student_achievers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    achievement VARCHAR(255) NOT NULL,
    category ENUM('Academic', 'Sports', 'Cultural', 'Technical', 'Social Service', 'Leadership') NOT NULL,
    year VARCHAR(10) NOT NULL,
    image_url VARCHAR(500),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_category (category),
    INDEX idx_year (year),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Admission enquiries table (Module 5 - Admin and Admission Staff)
CREATE TABLE admission_enquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    program_interest ENUM('BBA', 'BCA', 'BCom', 'MBA', 'MCA') NOT NULL,
    qualification VARCHAR(100),
    message TEXT,
    status ENUM('pending', 'contacted', 'admitted', 'rejected') DEFAULT 'pending',
    assigned_to INT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_status (status),
    INDEX idx_program_interest (program_interest),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Activity log for audit trail
CREATE TABLE activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(50) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id INT,
    old_values JSON,
    new_values JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_entity (entity_type, entity_id),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (password: admin123 - change in production)
-- Password hash is for 'admin123' using bcrypt
INSERT INTO users (username, password_hash, role, full_name, email, is_active) VALUES 
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 'System Administrator', 'admin@pbs.edu', TRUE);

-- Insert sample admission staff user (password: staff123)
INSERT INTO users (username, password_hash, role, full_name, email, is_active) VALUES 
('admission1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admission_staff', 'Admission Officer', 'admission@pbs.edu', TRUE);

-- Insert sample staff user (password: staff123)
INSERT INTO users (username, password_hash, role, full_name, email, is_active) VALUES 
('staff1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'staff', 'Content Manager', 'staff@pbs.edu', TRUE);

-- Insert sample news posts
INSERT INTO news_posts (title, content, category, is_visible, is_featured, published_date) VALUES
('Admission Open for 2025-26', 'Applications are now open for all UG and PG programs. Apply now to secure your seat.', 'Events', TRUE, TRUE, '2025-03-15'),
('Campus Placement Drive 2025', 'Top companies visiting campus for recruitment. Do not miss this opportunity!', 'Events', TRUE, FALSE, '2025-03-10'),
('Research Paper Publication', 'Our faculty published groundbreaking research in international journals.', 'Achievement', TRUE, FALSE, '2025-03-05'),
('Industry Partnership Announcement', 'New MoU signed with leading industry partners for student internships.', 'Partnership', TRUE, FALSE, '2025-02-28');

-- Insert sample faculty members
INSERT INTO faculty_members (name, designation, qualifications, experience_years, program, is_active, display_order) VALUES
('Dr. Rajesh Kumar', 'Professor & Head', 'Ph.D. in Management, MBA', '20+ years', 'BBA', TRUE, 1),
('Prof. Sunita Sharma', 'Associate Professor', 'Ph.D. in Business Administration', '15+ years', 'BBA', TRUE, 2),
('Dr. Lakshmi Narayan', 'Professor & Head', 'Ph.D. in Commerce, M.Com', '20+ years', 'BCom', TRUE, 1),
('Prof. Kavita Sharma', 'Associate Professor', 'Ph.D. in Accounting, M.Com', '15+ years', 'BCom', TRUE, 2),
('Dr. Sanjay Kumar', 'Professor & Head', 'Ph.D. in Computer Applications, MCA', '18+ years', 'BCA', TRUE, 1),
('Prof. Neha Singh', 'Associate Professor', 'Ph.D. in Software Engineering', '12+ years', 'BCA', TRUE, 2),
('Dr. Vikram Mehta', 'Professor & Director', 'Ph.D. in Business Management, MBA (IIM)', '25+ years', 'MBA', TRUE, 1),
('Prof. Ananya Desai', 'Associate Professor', 'Ph.D. in Finance, MBA', '18+ years', 'MBA', TRUE, 2),
('Dr. Priya Krishnan', 'Professor & Head', 'Ph.D. in Computer Science, MCA', '22+ years', 'MCA', TRUE, 1),
('Prof. Arun Kumar', 'Associate Professor', 'Ph.D. in Information Technology', '16+ years', 'MCA', TRUE, 2);

-- Insert sample gallery items
INSERT INTO gallery_items (title, description, image_url, category, is_active) VALUES
('Annual Day Celebration', 'Students performing at the annual day function', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', 'Celebrations', TRUE),
('Campus Library', 'State-of-the-art library with extensive collection', 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800', 'Infrastructure', TRUE),
('Sports Meet 2024', 'Annual sports competition', 'https://images.unsplash.com/photo-1461896836934-voices-of-the-night?w=800', 'Sports', TRUE),
('Technical Workshop', 'Industry experts conducting workshop', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', 'Workshops', TRUE);

-- Insert sample student achievers
INSERT INTO student_achievers (name, achievement, category, year, description, is_active) VALUES
('Rahul Sharma', 'University Gold Medalist', 'Academic', '2024', 'Secured first rank in MBA program with exceptional academic performance.', TRUE),
('Priya Patel', 'National Level Basketball Champion', 'Sports', '2024', 'Led the college team to victory at the National Inter-University Basketball Championship.', TRUE),
('Amit Kumar', 'Best Cultural Ambassador', 'Cultural', '2024', 'Recognized for outstanding contribution to cultural activities and events.', TRUE),
('Sneha Reddy', 'Hackathon Winner', 'Technical', '2024', 'First place in the State Level Coding Hackathon with innovative solution.', TRUE),
('Vikram Rao', 'Community Service Excellence', 'Social Service', '2024', 'Organized multiple blood donation camps and community welfare programs.', TRUE),
('Ananya Gupta', 'Student Council President', 'Leadership', '2024', 'Elected as Student Council President for exceptional leadership qualities.', TRUE);
