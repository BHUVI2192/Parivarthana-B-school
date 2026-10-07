-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 18, 2026 at 10:00 AM
-- Server version: 10.11.18-MariaDB-cll-lve
-- PHP Version: 8.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pbs_admin_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `action` varchar(50) NOT NULL,
  `entity_type` varchar(50) NOT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `old_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`old_values`)),
  `new_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`new_values`)),
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `action`, `entity_type`, `entity_id`, `old_values`, `new_values`, `ip_address`, `user_agent`, `created_at`) VALUES
(1, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:54:52'),
(2, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:54:54'),
(3, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:54:58'),
(4, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:55:21'),
(5, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:58:42'),
(6, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:58:43'),
(7, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 19:58:44'),
(8, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:02:01'),
(9, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:02:13'),
(10, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:03:37'),
(11, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:05:24'),
(12, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:05:30'),
(13, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:05:59'),
(14, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:07:25'),
(15, 4, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:14:16'),
(16, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:24:13'),
(17, 4, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:24:26'),
(18, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:39:07'),
(19, 1, 'login', 'user', NULL, NULL, NULL, '106.51.196.112', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-30 20:49:33'),
(20, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 03:28:07'),
(21, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 03:57:48'),
(22, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 04:17:20'),
(23, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 04:17:56'),
(24, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 04:20:25'),
(25, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 04:22:53'),
(26, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 04:26:28'),
(27, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 06:59:34'),
(28, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 06:59:41'),
(29, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 06:59:43'),
(30, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 07:08:04'),
(31, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 08:12:59'),
(32, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:15:49'),
(33, 1, 'login', 'user', NULL, NULL, NULL, '152.57.70.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:16:06'),
(34, 1, 'login', 'user', NULL, NULL, NULL, '152.57.70.144', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:16:11'),
(35, 4, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:34:22'),
(36, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:34:49'),
(37, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:34:52'),
(38, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:34:52'),
(39, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:35:13'),
(40, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:48:27'),
(41, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 09:51:06'),
(42, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 15:00:21'),
(43, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:34'),
(44, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:35'),
(45, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:36'),
(46, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:44'),
(47, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:44'),
(48, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:44'),
(49, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:45'),
(50, 1, 'login', 'user', NULL, NULL, NULL, '157.50.190.109', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Mobile Safari/537.36', '2026-03-31 15:00:45'),
(51, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 15:06:16'),
(52, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 15:07:30'),
(53, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 15:10:14'),
(54, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 18:24:47'),
(55, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 18:26:09'),
(56, 1, 'create', 'news_post', 5, NULL, '{\"title\":\"FDP: Next-Gen Analytics for Academicians and Researchers\"}', NULL, NULL, '2026-03-31 18:26:25'),
(57, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 19:42:21'),
(58, 1, 'logout', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 19:43:10'),
(59, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 19:50:33'),
(60, 1, 'logout', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 19:55:59'),
(61, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 20:29:19'),
(62, 1, 'logout', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 20:29:32'),
(63, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 20:29:41'),
(64, 1, 'logout', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 20:35:19'),
(65, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-03-31 20:35:38'),
(66, 1, 'create', 'news_post', 6, NULL, '{\"title\":\"FDP: Next-Gen Analytics for Academicians and Researchers\"}', NULL, NULL, '2026-03-31 20:36:34'),
(67, 1, 'delete', 'news_post', 1, '{\"id\":1,\"title\":\"Admission Open for 2025-26\",\"content\":\"Applications are now open for all UG and PG programs. Apply now to secure your seat.\",\"blog_url\":null,\"image_url\":null,\"category\":\"Events\",\"is_featured\":1,\"is_visible\":1,\"published_date\":\"2025-03-15\",\"scraped_from_blog\":0,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-03-31 20:36:42'),
(68, 1, 'delete', 'news_post', 5, '{\"id\":5,\"title\":\"FDP: Next-Gen Analytics for Academicians and Researchers\",\"content\":\"Parivarthana Business School (PBS), Mysuru, successfully organized a three-day Faculty Development Programme (FDP) titled \\u201cNext-Gen Analytics for Academicians and Researchers\\u201d from 5th to 7th Janu...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/01\\/fdp-next-gen-analytics-for-academicians.html\",\"image_url\":\"\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-03-31\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-03-31 11:26:25\",\"updated_at\":\"2026-03-31 11:26:25\"}', NULL, NULL, NULL, '2026-03-31 20:37:01'),
(69, 1, 'create', 'news_post', 7, NULL, '{\"title\":\"SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS\"}', NULL, NULL, '2026-03-31 20:39:00'),
(70, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 20:49:20'),
(71, 4, 'login', 'user', NULL, NULL, NULL, '106.51.195.3', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-03-31 20:54:05'),
(72, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 05:22:13'),
(73, 1, 'update', 'faculty_member', 1, '{\"id\":1,\"name\":\"Dr. Rajesh Kumar\",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Management, MBA\",\"experience_years\":\"20+ years\",\"photo_url\":null,\"program\":\"BBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', '{\"name\":\"Dr. Rajesh Kumar\",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Management, MBA\",\"experience_years\":\"20+ years\",\"program\":\"BBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":1}', NULL, NULL, '2026-04-01 05:26:25'),
(74, 1, 'update', 'faculty_member', 1, '{\"id\":1,\"name\":\"Dr. Rajesh Kumar\",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Management, MBA\",\"experience_years\":\"20+ years\",\"photo_url\":\"\",\"program\":\"BBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-31 22:26:25\"}', '{\"name\":\"Dr. Rajesh \",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Management, MBA\",\"experience_years\":\"20+ years\",\"program\":\"BBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":1}', NULL, NULL, '2026-04-01 05:26:32'),
(75, 1, 'update', 'news_post', 7, '{\"id\":7,\"title\":\"SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS\",\"content\":\"Special Lecture on \\u201cAptitude and Tech Readiness \\u2013 Your First Step to Placement Success\\u201dOrganised by the Placement Cell, Parivarthana Business SchoolThe Placement Cell of Parivarthana Business Sc...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/skillvex-founder-addresses-mba-and-mca.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEj1T4tFWcL9N6gmXXNkMElLSjfDqvUaQJxgVExhyB9WO1K_MhKVnHH0rnM0MTGTCSGDmG2kv5pEQYBRK1XBpuxyBNMJ20JN8hOQsq5UKSVQ_jnAsc3GoN2LiyXHP5hTcPFaMyeQyIPReBReKghYN_WfK6oJe_OwT1XV1qUom7s4sDVcunf7aT6fzy0Ojfdy=w405-h304\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-03-31\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-03-31 13:39:00\",\"updated_at\":\"2026-03-31 13:39:00\"}', '{\"title\":\"SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS\",\"content\":\"Special Lecture on \\u201cAptitude and Tech Readiness \\u2013 Your First Step to Placement Success\\u201dOrganised by the Placement Cell, Parivarthana Business SchoolThe Placement Cell of Parivarthana Business Sc...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/skillvex-founder-addresses-mba-and-mca.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEj1T4tFWcL9N6gmXXNkMElLSjfDqvUaQJxgVExhyB9WO1K_MhKVnHH0rnM0MTGTCSGDmG2kv5pEQYBRK1XBpuxyBNMJ20JN8hOQsq5UKSVQ_jnAsc3GoN2LiyXHP5hTcPFaMyeQyIPReBReKghYN_WfK6oJe_OwT1XV1qUom7s4sDVcunf7aT6fzy0Ojfdy=w405-h304\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1}', NULL, NULL, '2026-04-01 05:31:12'),
(76, 1, 'update', 'news_post', 7, '{\"id\":7,\"title\":\"SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS\",\"content\":\"Special Lecture on \\u201cAptitude and Tech Readiness \\u2013 Your First Step to Placement Success\\u201dOrganised by the Placement Cell, Parivarthana Business SchoolThe Placement Cell of Parivarthana Business Sc...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/skillvex-founder-addresses-mba-and-mca.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEj1T4tFWcL9N6gmXXNkMElLSjfDqvUaQJxgVExhyB9WO1K_MhKVnHH0rnM0MTGTCSGDmG2kv5pEQYBRK1XBpuxyBNMJ20JN8hOQsq5UKSVQ_jnAsc3GoN2LiyXHP5hTcPFaMyeQyIPReBReKghYN_WfK6oJe_OwT1XV1qUom7s4sDVcunf7aT6fzy0Ojfdy=w405-h304\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-03-31\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-03-31 13:39:00\",\"updated_at\":\"2026-03-31 22:31:12\"}', '{\"title\":\"SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS\",\"content\":\"Special Lecture on \\u201cAptitude and Tech Readiness \\u2013 Your First Step to Placement Success\\u201dOrganised by the Placement Cell, Parivarthana Business SchoolThe Placement Cell of Parivarthana Business Sc...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/skillvex-founder-addresses-mba-and-mca.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEj1T4tFWcL9N6gmXXNkMElLSjfDqvUaQJxgVExhyB9WO1K_MhKVnHH0rnM0MTGTCSGDmG2kv5pEQYBRK1XBpuxyBNMJ20JN8hOQsq5UKSVQ_jnAsc3GoN2LiyXHP5hTcPFaMyeQyIPReBReKghYN_WfK6oJe_OwT1XV1qUom7s4sDVcunf7aT6fzy0Ojfdy=w405-h304\",\"category\":\"Blog\",\"is_featured\":true,\"is_visible\":1}', NULL, NULL, '2026-04-01 05:31:45'),
(77, 1, 'login', 'user', NULL, NULL, NULL, '157.50.191.61', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 13:52:52'),
(78, 1, 'logout', 'user', NULL, NULL, NULL, '157.50.191.61', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 13:55:28'),
(79, 1, 'login', 'user', NULL, NULL, NULL, '157.50.191.61', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 13:56:02'),
(80, 1, 'delete', 'faculty_member', 1, '{\"id\":1,\"name\":\"Dr. Rajesh \",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Management, MBA\",\"experience_years\":\"20+ years\",\"photo_url\":\"\",\"program\":\"BBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-31 22:26:32\"}', NULL, NULL, NULL, '2026-04-01 13:56:13'),
(81, 1, 'delete', 'faculty_member', 3, '{\"id\":3,\"name\":\"Dr. Lakshmi Narayan\",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Commerce, M.Com\",\"experience_years\":\"20+ years\",\"photo_url\":null,\"program\":\"BCom\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-01 13:56:17'),
(82, 1, 'delete', 'faculty_member', 5, '{\"id\":5,\"name\":\"Dr. Sanjay Kumar\",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Computer Applications, MCA\",\"experience_years\":\"18+ years\",\"photo_url\":null,\"program\":\"BCA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-01 13:56:20'),
(83, 4, 'login', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 14:05:25'),
(84, 4, 'create', 'news_post', 8, NULL, '{\"title\":\"Guest Lecture on \\u201cAI in Business Automation\\u201d Organised by IIIC at Parivarthana Business School\"}', NULL, NULL, '2026-04-01 14:08:11'),
(85, 4, 'logout', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 14:08:21'),
(86, 4, 'login', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-01 14:16:00'),
(87, 1, 'update', 'news_post', 8, '{\"id\":8,\"title\":\"Guest Lecture on \\u201cAI in Business Automation\\u201d Organised by IIIC at Parivarthana Business School\",\"content\":\"\\u00a0Guest Lecture on \\u201cAI in Business Automation\\u201d Organised by IIIC at Parivarthana Business SchoolThe Industry Institution Interaction Cell (IIIC) of Parivarthana Business School (PBS) organised a g...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/guest-lecture-on-ai-in-business.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEjTF7iKrkD5wrYDUr4P7FLwrytTAvcZ-Nky2gXMlGbBKPh-512VgXc-VgjKuIgB_2rZvRv2euZsI4jZAD2pNnwcy4NNXQ8Od2vlOv4J_DkCmOE9QMaSODB6NYGrTxZfUUvBs4PWZhRp8GK7ByznzlZPv7N1If9CGtYEWfUy7b8vfw_Zx3zkqqkgqr2nZmQe=w539-h304\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-04-01\",\"scraped_from_blog\":0,\"created_by\":4,\"created_at\":\"2026-04-01 07:08:11\",\"updated_at\":\"2026-04-01 07:08:11\"}', '{\"is_visible\":false}', NULL, NULL, '2026-04-01 14:42:51'),
(88, 1, 'update', 'news_post', 8, '{\"id\":8,\"title\":\"Guest Lecture on \\u201cAI in Business Automation\\u201d Organised by IIIC at Parivarthana Business School\",\"content\":\"\\u00a0Guest Lecture on \\u201cAI in Business Automation\\u201d Organised by IIIC at Parivarthana Business SchoolThe Industry Institution Interaction Cell (IIIC) of Parivarthana Business School (PBS) organised a g...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/guest-lecture-on-ai-in-business.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEjTF7iKrkD5wrYDUr4P7FLwrytTAvcZ-Nky2gXMlGbBKPh-512VgXc-VgjKuIgB_2rZvRv2euZsI4jZAD2pNnwcy4NNXQ8Od2vlOv4J_DkCmOE9QMaSODB6NYGrTxZfUUvBs4PWZhRp8GK7ByznzlZPv7N1If9CGtYEWfUy7b8vfw_Zx3zkqqkgqr2nZmQe=w539-h304\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":0,\"published_date\":\"2026-04-01\",\"scraped_from_blog\":0,\"created_by\":4,\"created_at\":\"2026-04-01 07:08:11\",\"updated_at\":\"2026-04-01 07:42:51\"}', '{\"is_visible\":true}', NULL, NULL, '2026-04-01 14:43:00'),
(89, 1, 'login', 'user', NULL, NULL, NULL, '152.57.79.70', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 05:30:18'),
(90, 1, 'update', 'faculty_member', 7, '{\"id\":7,\"name\":\"Dr. Vikram Mehta\",\"designation\":\"Professor & Director\",\"qualifications\":\"Ph.D. in Business Management, MBA (IIM)\",\"experience_years\":\"25+ years\",\"photo_url\":null,\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', '{\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":7}', NULL, NULL, '2026-04-02 05:33:45'),
(91, 1, 'update', 'faculty_member', 7, '{\"id\":7,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-04-01 22:33:45\"}', '{\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":7}', NULL, NULL, '2026-04-02 05:34:43'),
(92, 1, 'update', 'faculty_member', 9, '{\"id\":9,\"name\":\"Dr. Priya Krishnan\",\"designation\":\"Professor & Head\",\"qualifications\":\"Ph.D. in Computer Science, MCA\",\"experience_years\":\"22+ years\",\"photo_url\":null,\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', '{\"name\":\"Dr. Raghu Kumar\",\"designation\":\"Professor\",\"qualifications\":\"BE, M.Tech, Ph.D, MBA\",\"experience_years\":\"20+ years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":2,\"is_active\":1,\"id\":9}', NULL, NULL, '2026-04-02 05:38:07'),
(93, 1, 'delete', 'faculty_member', 10, '{\"id\":10,\"name\":\"Prof. Arun Kumar\",\"designation\":\"Associate Professor\",\"qualifications\":\"Ph.D. in Information Technology\",\"experience_years\":\"16+ years\",\"photo_url\":null,\"program\":\"MCA\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 05:54:47'),
(94, 1, 'delete', 'faculty_member', 6, '{\"id\":6,\"name\":\"Prof. Neha Singh\",\"designation\":\"Associate Professor\",\"qualifications\":\"Ph.D. in Software Engineering\",\"experience_years\":\"12+ years\",\"photo_url\":null,\"program\":\"BCA\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 05:54:47'),
(95, 1, 'delete', 'faculty_member', 8, '{\"id\":8,\"name\":\"Prof. Ananya Desai\",\"designation\":\"Associate Professor\",\"qualifications\":\"Ph.D. in Finance, MBA\",\"experience_years\":\"18+ years\",\"photo_url\":null,\"program\":\"MBA\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 05:54:55'),
(96, 1, 'delete', 'faculty_member', 2, '{\"id\":2,\"name\":\"Prof. Sunita Sharma\",\"designation\":\"Associate Professor\",\"qualifications\":\"Ph.D. in Business Administration\",\"experience_years\":\"15+ years\",\"photo_url\":null,\"program\":\"BBA\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 05:55:04'),
(97, 1, 'delete', 'faculty_member', 4, '{\"id\":4,\"name\":\"Prof. Kavita Sharma\",\"designation\":\"Associate Professor\",\"qualifications\":\"Ph.D. in Accounting, M.Com\",\"experience_years\":\"15+ years\",\"photo_url\":null,\"program\":\"BCom\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 05:55:09'),
(98, 1, 'create', 'faculty_member', 11, NULL, '{\"name\":\"Mr. Praveen Joshi\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 05:56:53'),
(99, 1, 'create', 'faculty_member', 12, NULL, '{\"name\":\"Ms. Shambhavi P Bhounsle\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 05:59:06'),
(100, 1, 'create', 'faculty_member', 13, NULL, '{\"name\":\"Ms. Tejaswini C K\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 06:06:12'),
(101, 1, 'update', 'faculty_member', 13, '{\"id\":13,\"name\":\"Ms. Tejaswini C K\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MDIT, PGDIM, PGDFM, DIM, MBA, B.Ed, MSc., KSET, (Ph.D)\",\"experience_years\":\"14+ years\",\"photo_url\":\"uploads\\/faculty\\/69ce0754945df_1775109972.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":4,\"created_by\":1,\"created_at\":\"2026-04-01 23:06:12\",\"updated_at\":\"2026-04-01 23:06:12\"}', '{\"name\":\"Ms. Tejaswini C K\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MDIT, PGDIM, PGDFM, DIM, MBA, B.Ed, MSc., KSET, (Ph.D)\",\"experience_years\":\"14+ years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":4,\"is_active\":1,\"id\":13}', NULL, NULL, '2026-04-02 06:06:50'),
(102, 1, 'update', 'faculty_member', 12, '{\"id\":12,\"name\":\"Ms. Shambhavi P Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA,\",\"experience_years\":\"14+ years\",\"photo_url\":\"uploads\\/faculty\\/69ce05aaad70d_1775109546.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":4,\"created_by\":1,\"created_at\":\"2026-04-01 22:59:06\",\"updated_at\":\"2026-04-01 22:59:06\"}', '{\"name\":\"Ms. Shambhavi P Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA,\",\"experience_years\":\"14+ years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":4,\"is_active\":1,\"id\":12}', NULL, NULL, '2026-04-02 06:07:19'),
(103, 1, 'create', 'faculty_member', 14, NULL, '{\"name\":\"Mr. Ravichandra K K\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 06:09:31'),
(104, 1, 'update', 'faculty_member', 14, '{\"id\":14,\"name\":\"Mr. Ravichandra K K\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA\",\"experience_years\":\"15\",\"photo_url\":\"uploads\\/faculty\\/69ce081b877ec_1775110171.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-01 23:09:31\",\"updated_at\":\"2026-04-01 23:09:31\"}', '{\"name\":\"Mr. Ravichandra K K\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA\",\"experience_years\":\"15\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":6,\"is_active\":1,\"id\":14}', NULL, NULL, '2026-04-02 06:11:09'),
(105, 1, 'create', 'faculty_member', 15, NULL, '{\"name\":\"Mr. Ranganatha Y\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 06:12:41'),
(106, 1, 'update', 'faculty_member', 12, '{\"id\":12,\"name\":\"Ms. Shambhavi P Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA,\",\"experience_years\":\"14+ years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":4,\"created_by\":1,\"created_at\":\"2026-04-01 22:59:06\",\"updated_at\":\"2026-04-01 23:07:19\"}', '{\"name\":\"Ms. Shambhavi P Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA, DFA, PGDBA\",\"experience_years\":\"14+ years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":4,\"is_active\":1,\"id\":12}', NULL, NULL, '2026-04-02 06:13:26'),
(107, 1, 'create', 'faculty_member', 16, NULL, '{\"name\":\"Ms. Chaithanya K\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 06:14:40'),
(108, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:16:34'),
(109, 1, 'login', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:17:36'),
(110, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:22:53'),
(111, 1, 'login', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:23:41'),
(112, 1, 'update', 'gallery_item', 2, '{\"id\":2,\"title\":\"Campus Library\",\"description\":\"State-of-the-art library with extensive collection\",\"image_url\":\"https:\\/\\/images.unsplash.com\\/photo-1568667256549-094345857637?w=800\",\"category\":\"Infrastructure\",\"uploaded_by\":null,\"is_active\":1,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', '{\"title\":\"Campus Library\",\"description\":\"Student Achievement\",\"category\":\"Infrastructure\",\"image_url\":\"https:\\/\\/images.unsplash.com\\/photo-1568667256549-094345857637?w=800\",\"is_active\":1,\"id\":2}', NULL, NULL, '2026-04-02 06:25:18'),
(113, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:25:32'),
(114, 1, 'login', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:26:29'),
(115, 1, 'create', 'gallery_item', 5, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:28:30'),
(116, 1, 'create', 'gallery_item', 6, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:29:30'),
(117, 1, 'create', 'gallery_item', 7, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:29:36'),
(118, 1, 'create', 'gallery_item', 8, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:29:36'),
(119, 1, 'create', 'gallery_item', 9, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:29:37'),
(120, 1, 'create', 'gallery_item', 10, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:29:37'),
(121, 1, 'create', 'gallery_item', 11, NULL, '{\"title\":\"Student Achievement\",\"category\":\"Students\"}', NULL, NULL, '2026-04-02 06:29:37'),
(122, 1, 'delete', 'gallery_item', 10, '{\"id\":10,\"title\":\"Student Achievement\",\"description\":\"Student Achievemet\",\"image_url\":\"uploads\\/gallery\\/69ce0cd136bd5_1775111377.jpeg\",\"category\":\"Students\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:29:37\",\"updated_at\":\"2026-04-01 23:29:37\"}', NULL, NULL, NULL, '2026-04-02 06:30:01'),
(123, 1, 'delete', 'gallery_item', 9, '{\"id\":9,\"title\":\"Student Achievement\",\"description\":\"Student Achievemet\",\"image_url\":\"uploads\\/gallery\\/69ce0cd105711_1775111377.jpeg\",\"category\":\"Students\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:29:37\",\"updated_at\":\"2026-04-01 23:29:37\"}', NULL, NULL, NULL, '2026-04-02 06:30:03'),
(124, 1, 'delete', 'gallery_item', 11, '{\"id\":11,\"title\":\"Student Achievement\",\"description\":\"Student Achievemet\",\"image_url\":\"uploads\\/gallery\\/69ce0cd1adf05_1775111377.jpeg\",\"category\":\"Students\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:29:37\",\"updated_at\":\"2026-04-01 23:29:37\"}', NULL, NULL, NULL, '2026-04-02 06:30:07'),
(125, 1, 'delete', 'gallery_item', 7, '{\"id\":7,\"title\":\"Student Achievement\",\"description\":\"Student Achievemet\",\"image_url\":\"uploads\\/gallery\\/69ce0cd05b78b_1775111376.jpeg\",\"category\":\"Students\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:29:36\",\"updated_at\":\"2026-04-01 23:29:36\"}', NULL, NULL, NULL, '2026-04-02 06:30:09'),
(126, 1, 'delete', 'gallery_item', 8, '{\"id\":8,\"title\":\"Student Achievement\",\"description\":\"Student Achievemet\",\"image_url\":\"uploads\\/gallery\\/69ce0cd0ab686_1775111376.jpeg\",\"category\":\"Students\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:29:36\",\"updated_at\":\"2026-04-01 23:29:36\"}', NULL, NULL, NULL, '2026-04-02 06:30:12'),
(127, 1, 'delete', 'gallery_item', 6, '{\"id\":6,\"title\":\"Student Achievement\",\"description\":\"Student Achievemet\",\"image_url\":\"uploads\\/gallery\\/69ce0ccaa0890_1775111370.jpeg\",\"category\":\"Students\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:29:30\",\"updated_at\":\"2026-04-01 23:29:30\"}', NULL, NULL, NULL, '2026-04-02 06:30:15'),
(128, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:30:20'),
(129, 1, 'login', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:30:59'),
(130, 1, 'create', 'gallery_item', 12, NULL, '{\"title\":\"Events\",\"category\":\"Events\"}', NULL, NULL, '2026-04-02 06:33:42'),
(131, 1, 'create', 'gallery_item', 13, NULL, '{\"title\":\"Events\",\"category\":\"Events\"}', NULL, NULL, '2026-04-02 06:33:43'),
(132, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:34:03'),
(133, 1, 'login', 'user', NULL, NULL, NULL, '152.57.78.213', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 06:34:48'),
(134, 4, 'login', 'user', NULL, NULL, NULL, '106.51.222.83', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 09:47:58'),
(135, 4, 'login', 'user', NULL, NULL, NULL, '106.51.222.83', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 09:50:47'),
(136, 1, 'login', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 14:00:49'),
(137, 1, 'login', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 14:19:03'),
(138, 4, 'update', 'faculty_member', 15, '{\"id\":15,\"name\":\"Mr. Ranganatha Y\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom., NET, KSET, (MBA)\",\"experience_years\":\"5+ Years\",\"photo_url\":\"\\/uploads\\/faculty\\/69ce08d92fe14_1775110361.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":7,\"created_by\":1,\"created_at\":\"2026-04-01 23:12:41\",\"updated_at\":\"2026-04-02 07:47:12\"}', '{\"name\":\"Mr. Ranganatha Y\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom., NET, KSET, (MBA)\",\"experience_years\":\"5+ Years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":7,\"is_active\":1,\"id\":15}', NULL, NULL, '2026-04-02 14:55:28'),
(139, 4, 'update', 'faculty_member', 15, '{\"id\":15,\"name\":\"Mr. Ranganatha Y\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom., NET, KSET, (MBA)\",\"experience_years\":\"5+ Years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":7,\"created_by\":1,\"created_at\":\"2026-04-01 23:12:41\",\"updated_at\":\"2026-04-02 07:55:28\"}', '{\"name\":\"Mr. Ranganatha Y\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom., NET, KSET, (MBA)\",\"experience_years\":\"5+ Years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":7,\"is_active\":1,\"id\":15}', NULL, NULL, '2026-04-02 14:56:04'),
(140, 4, 'create', 'faculty_member', 17, NULL, '{\"name\":\"proff\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-02 14:57:00'),
(141, 4, 'delete', 'faculty_member', 17, '{\"id\":17,\"name\":\"proff\",\"designation\":\"proff\",\"qualifications\":\"\",\"experience_years\":\"\",\"photo_url\":\"\\/uploads\\/faculty\\/69ce83bce220d_1775141820.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":10,\"created_by\":4,\"created_at\":\"2026-04-02 07:57:00\",\"updated_at\":\"2026-04-02 07:57:00\"}', NULL, NULL, NULL, '2026-04-02 14:57:27'),
(142, 4, 'delete', 'faculty_member', 15, '{\"id\":15,\"name\":\"Mr. Ranganatha Y\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom., NET, KSET, (MBA)\",\"experience_years\":\"5+ Years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":7,\"created_by\":1,\"created_at\":\"2026-04-01 23:12:41\",\"updated_at\":\"2026-04-02 07:56:04\"}', NULL, NULL, NULL, '2026-04-02 14:57:31'),
(143, 4, 'create', 'gallery_item', 14, NULL, '{\"title\":\"Earn while You Learn\",\"category\":\"Events\"}', NULL, NULL, '2026-04-02 15:33:24'),
(144, 4, 'logout', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 15:33:35'),
(145, 4, 'login', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-02 15:34:27'),
(146, 4, 'delete', 'gallery_item', 13, '{\"id\":13,\"title\":\"Events\",\"description\":\"Events\",\"image_url\":\"\\/uploads\\/gallery\\/69ce0dc7344f6_1775111623.jpeg\",\"category\":\"Events\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:33:43\",\"updated_at\":\"2026-04-02 08:04:14\"}', NULL, NULL, NULL, '2026-04-02 15:35:09'),
(147, 4, 'delete', 'gallery_item', 12, '{\"id\":12,\"title\":\"Events\",\"description\":\"Events\",\"image_url\":\"\\/uploads\\/gallery\\/69ce0dc6ec3c7_1775111622.jpeg\",\"category\":\"Events\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-01 23:33:42\",\"updated_at\":\"2026-04-02 08:04:02\"}', NULL, NULL, NULL, '2026-04-02 15:35:13'),
(148, 1, 'login', 'user', NULL, NULL, NULL, '106.51.197.249', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36 Edg/146.0.0.0', '2026-04-02 16:17:44'),
(149, 1, 'create', 'news_post', 9, NULL, '{\"title\":\"Anti-Ragging Committee Organises Drugs Mukta Karnataka Abhiyaana at PBS Mysuru\"}', NULL, NULL, '2026-04-02 16:18:46'),
(150, 1, 'delete', 'news_post', 2, '{\"id\":2,\"title\":\"Campus Placement Drive 2025\",\"content\":\"Top companies visiting campus for recruitment. Do not miss this opportunity!\",\"blog_url\":null,\"image_url\":null,\"category\":\"Events\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2025-03-10\",\"scraped_from_blog\":0,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 16:18:58'),
(151, 1, 'delete', 'news_post', 3, '{\"id\":3,\"title\":\"Research Paper Publication\",\"content\":\"Our faculty published groundbreaking research in international journals.\",\"blog_url\":null,\"image_url\":null,\"category\":\"Achievement\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2025-03-05\",\"scraped_from_blog\":0,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 16:19:03'),
(152, 1, 'delete', 'news_post', 4, '{\"id\":4,\"title\":\"Industry Partnership Announcement\",\"content\":\"New MoU signed with leading industry partners for student internships.\",\"blog_url\":null,\"image_url\":null,\"category\":\"Partnership\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2025-02-28\",\"scraped_from_blog\":0,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-03-30 12:02:06\"}', NULL, NULL, NULL, '2026-04-02 16:19:08'),
(153, 1, 'update', 'news_post', 9, '{\"id\":9,\"title\":\"Anti-Ragging Committee Organises Drugs Mukta Karnataka Abhiyaana at PBS Mysuru\",\"content\":\"\\u00a0Report on DRUGS MUKTA KARNATAKA ABHIYAANA\\n\\nThe Anti-Ragging Committee of Parivarthana Business School (PBS), Mysuru, organised the \\u201cDrugs Mukta Karnataka Abhiyaana\\u201d awareness programme in associ...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/anti-ragging-committee-organises-drugs.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEg_sbvd_gOeb1XUyIMuBrdCFoXdI5afcaFUUqk_wwd_OeCgvepjnSYUgZBNzkneXa643KeLa9EJOcf3YacNW6tzzvDwB27EEgAhOKrB-mo1-6bfzOJYs8hrSgyiqrtNBKCDc4tZLDLhgH0iF17sBv9G_cPr_jpfq6rztih_G5m5vlBmKf0CAVNbbfpBcfKP=w318-h398\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-04-02\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-04-02 09:18:46\",\"updated_at\":\"2026-04-02 09:18:46\"}', '{\"title\":\"Anti-Ragging Committee Organises Drugs Mukta Karnataka Abhiyaana at PBS Mysuru\",\"content\":\"\\u00a0Report on DRUGS MUKTA KARNATAKA ABHIYAANA\\n\\nThe Anti-Ragging Committee of Parivarthana Business School (PBS), Mysuru, organised the \\u201cDrugs Mukta Karnataka Abhiyaana\\u201d awareness programme in associ...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2025\\/12\\/anti-ragging-committee-organises-drugs.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/a\\/AVvXsEg_sbvd_gOeb1XUyIMuBrdCFoXdI5afcaFUUqk_wwd_OeCgvepjnSYUgZBNzkneXa643KeLa9EJOcf3YacNW6tzzvDwB27EEgAhOKrB-mo1-6bfzOJYs8hrSgyiqrtNBKCDc4tZLDLhgH0iF17sBv9G_cPr_jpfq6rztih_G5m5vlBmKf0CAVNbbfpBcfKP=w318-h398\",\"category\":\"Event\",\"is_featured\":0,\"is_visible\":1}', NULL, NULL, '2026-04-02 16:19:37'),
(154, 1, 'create', 'news_post', 10, NULL, '{\"title\":\"Bridging the Gap: Hands-on Workshop on Web App Development at PBS Campus\"}', NULL, NULL, '2026-04-02 16:31:07'),
(155, 1, 'login', 'user', NULL, NULL, NULL, '152.57.128.99', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-03 12:43:47'),
(156, 1, 'update', 'faculty_member', 7, '{\"id\":7,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-04-01 22:34:43\"}', '{\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":7}', NULL, NULL, '2026-04-03 12:47:46'),
(157, 1, 'update', 'faculty_member', 9, '{\"id\":9,\"name\":\"Dr. Raghu Kumar\",\"designation\":\"Professor\",\"qualifications\":\"BE, M.Tech, Ph.D, MBA\",\"experience_years\":\"20+ years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-04-01 22:38:07\"}', '{\"name\":\"Dr. Raghu Kumar\",\"designation\":\"Professor\",\"qualifications\":\"BE, M.Tech, Ph.D, MBA\",\"experience_years\":\"20+ years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":2,\"is_active\":1,\"id\":9}', NULL, NULL, '2026-04-03 12:48:37'),
(158, 1, 'update', 'faculty_member', 7, '{\"id\":7,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-04-03 05:47:46\"}', '{\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":7}', NULL, NULL, '2026-04-03 12:49:02'),
(159, 1, 'create', 'faculty_member', 18, NULL, '{\"name\":\"Ms. Niharka Joshi\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 12:55:53'),
(160, 1, 'create', 'faculty_member', 19, NULL, '{\"name\":\"Nandan G Swamy\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 12:57:06'),
(161, 1, 'create', 'faculty_member', 20, NULL, '{\"name\":\"Nandan G Swamy\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 12:57:09'),
(162, 1, 'create', 'faculty_member', 21, NULL, '{\"name\":\"Mr. Shamanth Kumar B U\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 12:58:11');
INSERT INTO `activity_logs` (`id`, `user_id`, `action`, `entity_type`, `entity_id`, `old_values`, `new_values`, `ip_address`, `user_agent`, `created_at`) VALUES
(163, 1, 'delete', 'faculty_member', 7, '{\"id\":7,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Associate Professor & HOD\",\"qualifications\":\"MBA (PhD.,)\",\"experience_years\":\"13+ Years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-04-03 05:49:02\"}', NULL, NULL, NULL, '2026-04-03 12:58:19'),
(164, 1, 'create', 'faculty_member', 22, NULL, '{\"name\":\"Mr. Raghu Kumar R\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:00:31'),
(165, 1, 'update', 'faculty_member', 21, '{\"id\":21,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA, (PhD.)\",\"experience_years\":\"13+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfb96372ea4_1775221091.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-04-03 05:58:11\",\"updated_at\":\"2026-04-03 05:58:11\"}', '{\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"MBA, (PhD.)\",\"experience_years\":\"13+\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":21}', NULL, NULL, '2026-04-03 13:00:52'),
(166, 1, 'delete', 'faculty_member', 21, '{\"id\":21,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"MBA, (PhD.)\",\"experience_years\":\"13+\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-04-03 05:58:11\",\"updated_at\":\"2026-04-03 06:00:52\"}', NULL, NULL, NULL, '2026-04-03 13:00:57'),
(167, 1, 'create', 'faculty_member', 23, NULL, '{\"name\":\"Mr. Shamanth Kumar B U\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:01:44'),
(168, 1, 'create', 'faculty_member', 24, NULL, '{\"name\":\"Mr. Shamanth Kumar B U\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:01:47'),
(169, 1, 'delete', 'faculty_member', 9, '{\"id\":9,\"name\":\"Dr. Raghu Kumar\",\"designation\":\"Professor\",\"qualifications\":\"BE, M.Tech, Ph.D, MBA\",\"experience_years\":\"20+ years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":2,\"created_by\":null,\"created_at\":\"2026-03-30 12:02:06\",\"updated_at\":\"2026-04-03 05:48:37\"}', NULL, NULL, NULL, '2026-04-03 13:01:49'),
(170, 1, 'create', 'faculty_member', 25, NULL, '{\"name\":\"Ms. Tejaswinin C K\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:03:37'),
(171, 1, 'delete', 'faculty_member', 13, '{\"id\":13,\"name\":\"Ms. Tejaswini C K\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MDIT, PGDIM, PGDFM, DIM, MBA, B.Ed, MSc., KSET, (Ph.D)\",\"experience_years\":\"14+ years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":4,\"created_by\":1,\"created_at\":\"2026-04-01 23:06:12\",\"updated_at\":\"2026-04-01 23:06:50\"}', NULL, NULL, NULL, '2026-04-03 13:03:44'),
(172, 1, 'create', 'faculty_member', 26, NULL, '{\"name\":\"Mr. Ranganatha Y\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:06:18'),
(173, 1, 'create', 'faculty_member', 27, NULL, '{\"name\":\"Ms. Shambhavi Bhounsle\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:07:30'),
(174, 1, 'delete', 'faculty_member', 24, '{\"id\":24,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"MBA, (PhD.)\",\"experience_years\":\"13+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfba3b65868_1775221307.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-04-03 06:01:47\",\"updated_at\":\"2026-04-03 06:01:47\"}', NULL, NULL, NULL, '2026-04-03 13:07:45'),
(175, 1, 'delete', 'faculty_member', 12, '{\"id\":12,\"name\":\"Ms. Shambhavi P Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA, DFA, PGDBA\",\"experience_years\":\"14+ years\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":4,\"created_by\":1,\"created_at\":\"2026-04-01 22:59:06\",\"updated_at\":\"2026-04-01 23:13:26\"}', NULL, NULL, NULL, '2026-04-03 13:07:51'),
(176, 1, 'delete', 'faculty_member', 19, '{\"id\":19,\"name\":\"Nandan G Swamy\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA\",\"experience_years\":\"1\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfb922b5a2b_1775221026.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":11,\"created_by\":1,\"created_at\":\"2026-04-03 05:57:06\",\"updated_at\":\"2026-04-03 05:57:06\"}', NULL, NULL, NULL, '2026-04-03 13:08:02'),
(177, 1, 'create', 'faculty_member', 28, NULL, '{\"name\":\"Mr. Ravichandra K K\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:09:38'),
(178, 1, 'create', 'faculty_member', 29, NULL, '{\"name\":\"Mr. Shamanth Kumar B U\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-03 13:10:53'),
(179, 1, 'delete', 'faculty_member', 23, '{\"id\":23,\"name\":\"Mr. Shamanth Kumar B U\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"MBA, (PhD.)\",\"experience_years\":\"13+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfba38eea32_1775221304.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-04-03 06:01:44\",\"updated_at\":\"2026-04-03 06:01:44\"}', NULL, NULL, NULL, '2026-04-03 13:10:58'),
(180, 1, 'delete', 'faculty_member', 14, '{\"id\":14,\"name\":\"Mr. Ravichandra K K\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA\",\"experience_years\":\"15\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":6,\"created_by\":1,\"created_at\":\"2026-04-01 23:09:31\",\"updated_at\":\"2026-04-01 23:11:09\"}', NULL, NULL, NULL, '2026-04-03 13:11:07'),
(181, 1, 'create', 'faculty_member', 30, NULL, '{\"name\":\"Ms. Ramya V J\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:16:32'),
(182, 1, 'create', 'faculty_member', 31, NULL, '{\"name\":\"Ms. Chaithra M D\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:18:22'),
(183, 1, 'create', 'faculty_member', 32, NULL, '{\"name\":\"Ms. Megha S\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:21:19'),
(184, 1, 'create', 'faculty_member', 33, NULL, '{\"name\":\"Ms. Megha S\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:21:23'),
(185, 1, 'create', 'faculty_member', 34, NULL, '{\"name\":\"Ms. Megha S\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:21:24'),
(186, 1, 'create', 'faculty_member', 35, NULL, '{\"name\":\"Ms. Megha S\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:21:24'),
(187, 1, 'delete', 'faculty_member', 34, '{\"id\":34,\"name\":\"Ms. Megha S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCA\",\"experience_years\":\"2+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfbed46261c_1775222484.jpg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:21:24\",\"updated_at\":\"2026-04-03 06:21:24\"}', NULL, NULL, NULL, '2026-04-03 13:21:28'),
(188, 1, 'delete', 'faculty_member', 35, '{\"id\":35,\"name\":\"Ms. Megha S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCA\",\"experience_years\":\"2+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfbed4e1be4_1775222484.jpg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:21:24\",\"updated_at\":\"2026-04-03 06:21:24\"}', NULL, NULL, NULL, '2026-04-03 13:21:31'),
(189, 1, 'delete', 'faculty_member', 33, '{\"id\":33,\"name\":\"Ms. Megha S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCA\",\"experience_years\":\"2+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfbed3c36c3_1775222483.jpg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:21:23\",\"updated_at\":\"2026-04-03 06:21:23\"}', NULL, NULL, NULL, '2026-04-03 13:21:35'),
(190, 1, 'create', 'faculty_member', 36, NULL, '{\"name\":\"Mr. Suhas B Raj\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:22:25'),
(191, 1, 'create', 'faculty_member', 37, NULL, '{\"name\":\"Ms. Poornashree Y\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:23:11'),
(192, 1, 'create', 'faculty_member', 38, NULL, '{\"name\":\"Ms. Megha S\",\"program\":\"MCA\"}', NULL, NULL, '2026-04-03 13:23:55'),
(193, 1, 'delete', 'faculty_member', 32, '{\"id\":32,\"name\":\"Ms. Megha S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCA\",\"experience_years\":\"2+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfbecfe8850_1775222479.jpg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:21:19\",\"updated_at\":\"2026-04-03 06:21:19\"}', NULL, NULL, NULL, '2026-04-03 13:24:01'),
(194, 1, 'create', 'faculty_member', 39, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:32:18'),
(195, 1, 'create', 'faculty_member', 40, NULL, '{\"name\":\"Ms. Chaithra M D\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:33:35'),
(196, 1, 'create', 'faculty_member', 41, NULL, '{\"name\":\"Ms. Megha S\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:34:36'),
(197, 1, 'create', 'faculty_member', 42, NULL, '{\"name\":\"Ms. Suhas B Raj\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:35:37'),
(198, 1, 'create', 'faculty_member', 43, NULL, '{\"name\":\"Ms. Poornashree Y\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:36:47'),
(199, 4, 'create', 'faculty_member', 44, NULL, '{\"name\":\"Test\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:38:17'),
(200, 4, 'delete', 'faculty_member', 44, '{\"id\":44,\"name\":\"Test\",\"designation\":\"test\",\"qualifications\":\"Test\",\"experience_years\":\"\",\"photo_url\":null,\"program\":\"BCom\",\"is_active\":1,\"display_order\":1,\"created_by\":4,\"created_at\":\"2026-04-03 06:38:17\",\"updated_at\":\"2026-04-03 06:38:17\"}', NULL, NULL, NULL, '2026-04-03 13:38:40'),
(201, 4, 'update', 'news_post', 10, '{\"id\":10,\"title\":\"Bridging the Gap: Hands-on Workshop on Web App Development at PBS Campus\",\"content\":\"\\u00a0Bridging the Gap: Hands-on Workshop on Web App Development at PBS CampusThe Industry Institution Interaction Cell (IIIC) recently took a significant step toward narrowing the divide between academic...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/04\\/bridging-gap-hands-on-workshop-on-web.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/b\\/R29vZ2xl\\/AVvXsEiRzga231Tmyss1YQq5amZ3V02Md_I6hn0uNaTbeBwmUDmXyO2C_AvTuZbkbNC_5aoSsLT3TpunNssN2jiCjkpCNV8T7va0cUsgMM7taEADHy8KI1PCIh_9atyOGw_MB-FaGPboBuIgpBG-ZZ4PNn6CPJd8895YpdUkm6IfWxvsAHE1M8J1KivOOhVTVsKC\\/w670-h374\\/WhatsApp%20Image%202026-04-02%20at%209.55.08%20PM%20(1).jpeg\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-04-02\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-04-02 09:31:07\",\"updated_at\":\"2026-04-02 09:31:07\"}', '{\"is_featured\":true}', NULL, NULL, '2026-04-03 13:39:32'),
(202, 1, 'create', 'faculty_member', 45, NULL, '{\"name\":\"Mr. Nikhil Chowdayya\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:41:06'),
(203, 1, 'create', 'faculty_member', 46, NULL, '{\"name\":\"Ms. Shruthi\",\"program\":\"BCA\"}', NULL, NULL, '2026-04-03 13:44:40'),
(204, 1, 'create', 'faculty_member', 47, NULL, '{\"name\":\"Mr. Imran Khan S\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:46:49'),
(205, 1, 'create', 'faculty_member', 48, NULL, '{\"name\":\"Ms. Laxith Mouna\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:48:51'),
(206, 1, 'create', 'faculty_member', 49, NULL, '{\"name\":\"Ms. Amulya\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:50:48'),
(207, 1, 'create', 'faculty_member', 50, NULL, '{\"name\":\"Mr. Chandan M S\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:52:26'),
(208, 1, 'create', 'faculty_member', 51, NULL, '{\"name\":\"Ms. Mahalaxmi K S\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:56:38'),
(209, 1, 'create', 'faculty_member', 52, NULL, '{\"name\":\"Ms. Mahalaxmi K S\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:56:40'),
(210, 1, 'delete', 'faculty_member', 52, '{\"id\":52,\"name\":\"Ms. Mahalaxmi K S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.Com., B.Ed., KSET\",\"experience_years\":\"6+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfc718a0fa9_1775224600.jpeg\",\"program\":\"BCom\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:56:40\",\"updated_at\":\"2026-04-03 06:56:40\"}', NULL, NULL, NULL, '2026-04-03 13:56:50'),
(211, 1, 'create', 'faculty_member', 53, NULL, '{\"name\":\"Ms. Shruthi N T\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 13:58:29'),
(212, 1, 'create', 'faculty_member', 54, NULL, '{\"name\":\"Mr. Nikhil Chowdayya\",\"program\":\"BCom\"}', NULL, NULL, '2026-04-03 14:35:31'),
(213, 1, 'create', 'faculty_member', 55, NULL, '{\"name\":\"Mr. Imran Khan S\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:36:37'),
(214, 1, 'create', 'faculty_member', 56, NULL, '{\"name\":\"Ms. Laxith Mouna\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:38:58'),
(215, 1, 'create', 'faculty_member', 57, NULL, '{\"name\":\"Ms. Amulya\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:40:04'),
(216, 1, 'create', 'faculty_member', 58, NULL, '{\"name\":\"Mr. Chandan M S\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:40:57'),
(217, 1, 'create', 'faculty_member', 59, NULL, '{\"name\":\"Ms. Mahalaxmi K S\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:41:57'),
(218, 1, 'create', 'faculty_member', 60, NULL, '{\"name\":\"Ms. Shruthi N T\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:43:12'),
(219, 1, 'create', 'faculty_member', 61, NULL, '{\"name\":\"Mr. Nikhil Chowdayya\",\"program\":\"BBA\"}', NULL, NULL, '2026-04-03 14:44:03'),
(220, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.128.99', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-03 14:45:57'),
(221, 4, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-04 03:59:07'),
(222, 1, 'login', 'user', NULL, NULL, NULL, '152.57.115.72', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-04 05:13:01'),
(223, 1, 'create', 'gallery_item', 15, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-04 05:33:29'),
(224, 1, 'create', 'gallery_item', 16, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-04 05:33:29'),
(225, 1, 'create', 'gallery_item', 17, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-04 05:33:29'),
(226, 1, 'create', 'gallery_item', 18, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-04 05:33:29'),
(227, 1, 'create', 'gallery_item', 19, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-04 05:33:29'),
(228, 1, 'create', 'gallery_item', 20, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-04 05:33:29'),
(229, 1, 'delete', 'gallery_item', 15, '{\"id\":15,\"title\":\"ABHYUDAY LOGO LAUCH\",\"description\":\"Unveiling the symbol of innovation, growth, and entrepreneurial spirit.\",\"image_url\":\"data:image\\/jpeg;base64,\\/9j\\/4AAQSkZJRgABAQAAAQABAAD\\/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys\\/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N\\/\\/AABEIAJQBDgMBIgACEQEDEQH\\/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB\\/\\/EADgQAAIBAwMCAwUHAwQDAQAAAAECAwAEEQUSITFBE1FhBhQicYEjMkKRobHwUsHxFSTR4TNicrL\\/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG\\/8QAJREAAgICAgMAAwADAQAAAAAAAAECEQMhEjEEIkETMlFCsfEF\\/9oADAMBAAIRAxEAPwD5ThqmmR2orwRUTHis\\/IzFW\",\"category\":\"Campus\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-03 22:33:29\",\"updated_at\":\"2026-04-03 22:33:29\"}', NULL, NULL, NULL, '2026-04-04 05:34:40'),
(230, 1, 'delete', 'gallery_item', 16, '{\"id\":16,\"title\":\"ABHYUDAY LOGO LAUCH\",\"description\":\"Unveiling the symbol of innovation, growth, and entrepreneurial spirit.\",\"image_url\":\"data:image\\/jpeg;base64,\\/9j\\/4AAQSkZJRgABAQAAAQABAAD\\/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys\\/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N\\/\\/AABEIAJQBDgMBIgACEQEDEQH\\/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB\\/\\/EADgQAAIBAwMCAwUHAwQDAQAAAAECAwAEEQUSITFBE1FhBhQicYEjMkKRobHwUsHxFSTR4TNicrL\\/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG\\/8QAJREAAgICAgMAAwADAQAAAAAAAAECEQMhEjEEIkETMlFCsfEF\\/9oADAMBAAIRAxEAPwD5ThqmmR2orwRUTHis\\/IzFW\",\"category\":\"Campus\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-03 22:33:29\",\"updated_at\":\"2026-04-03 22:33:29\"}', NULL, NULL, NULL, '2026-04-04 05:34:45'),
(231, 1, 'delete', 'gallery_item', 17, '{\"id\":17,\"title\":\"ABHYUDAY LOGO LAUCH\",\"description\":\"Unveiling the symbol of innovation, growth, and entrepreneurial spirit.\",\"image_url\":\"data:image\\/jpeg;base64,\\/9j\\/4AAQSkZJRgABAQAAAQABAAD\\/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys\\/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N\\/\\/AABEIAJQBDgMBIgACEQEDEQH\\/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB\\/\\/EADgQAAIBAwMCAwUHAwQDAQAAAAECAwAEEQUSITFBE1FhBhQicYEjMkKRobHwUsHxFSTR4TNicrL\\/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG\\/8QAJREAAgICAgMAAwADAQAAAAAAAAECEQMhEjEEIkETMlFCsfEF\\/9oADAMBAAIRAxEAPwD5ThqmmR2orwRUTHis\\/IzFW\",\"category\":\"Campus\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-03 22:33:29\",\"updated_at\":\"2026-04-03 22:33:29\"}', NULL, NULL, NULL, '2026-04-04 05:34:49'),
(232, 1, 'delete', 'gallery_item', 18, '{\"id\":18,\"title\":\"ABHYUDAY LOGO LAUCH\",\"description\":\"Unveiling the symbol of innovation, growth, and entrepreneurial spirit.\",\"image_url\":\"data:image\\/jpeg;base64,\\/9j\\/4AAQSkZJRgABAQAAAQABAAD\\/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys\\/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N\\/\\/AABEIAJQBDgMBIgACEQEDEQH\\/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB\\/\\/EADgQAAIBAwMCAwUHAwQDAQAAAAECAwAEEQUSITFBE1FhBhQicYEjMkKRobHwUsHxFSTR4TNicrL\\/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG\\/8QAJREAAgICAgMAAwADAQAAAAAAAAECEQMhEjEEIkETMlFCsfEF\\/9oADAMBAAIRAxEAPwD5ThqmmR2orwRUTHis\\/IzFW\",\"category\":\"Campus\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-03 22:33:29\",\"updated_at\":\"2026-04-03 22:33:29\"}', NULL, NULL, NULL, '2026-04-04 05:34:53'),
(233, 1, 'delete', 'gallery_item', 19, '{\"id\":19,\"title\":\"ABHYUDAY LOGO LAUCH\",\"description\":\"Unveiling the symbol of innovation, growth, and entrepreneurial spirit.\",\"image_url\":\"data:image\\/jpeg;base64,\\/9j\\/4AAQSkZJRgABAQAAAQABAAD\\/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys\\/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N\\/\\/AABEIAJQBDgMBIgACEQEDEQH\\/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB\\/\\/EADgQAAIBAwMCAwUHAwQDAQAAAAECAwAEEQUSITFBE1FhBhQicYEjMkKRobHwUsHxFSTR4TNicrL\\/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG\\/8QAJREAAgICAgMAAwADAQAAAAAAAAECEQMhEjEEIkETMlFCsfEF\\/9oADAMBAAIRAxEAPwD5ThqmmR2orwRUTHis\\/IzFW\",\"category\":\"Campus\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-03 22:33:29\",\"updated_at\":\"2026-04-03 22:33:29\"}', NULL, NULL, NULL, '2026-04-04 05:34:57'),
(234, 1, 'delete', 'gallery_item', 20, '{\"id\":20,\"title\":\"ABHYUDAY LOGO LAUCH\",\"description\":\"Unveiling the symbol of innovation, growth, and entrepreneurial spirit.\",\"image_url\":\"data:image\\/jpeg;base64,\\/9j\\/4AAQSkZJRgABAQAAAQABAAD\\/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys\\/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N\\/\\/AABEIAJQBDgMBIgACEQEDEQH\\/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB\\/\\/EADgQAAIBAwMCAwUHAwQDAQAAAAECAwAEEQUSITFBE1FhBhQicYEjMkKRobHwUsHxFSTR4TNicrL\\/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG\\/8QAJREAAgICAgMAAwADAQAAAAAAAAECEQMhEjEEIkETMlFCsfEF\\/9oADAMBAAIRAxEAPwD5ThqmmR2orwRUTHis\\/IzFW\",\"category\":\"Campus\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-03 22:33:29\",\"updated_at\":\"2026-04-03 22:33:29\"}', NULL, NULL, NULL, '2026-04-04 05:35:00'),
(235, 1, 'create', 'gallery_item', 21, NULL, '{\"title\":\"ABHYUDAY LOGO LAUNCH\",\"category\":\"Events\"}', NULL, NULL, '2026-04-04 05:38:04'),
(236, 1, 'create', 'gallery_item', 22, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Events\"}', NULL, NULL, '2026-04-04 05:51:29'),
(237, 1, 'create', 'gallery_item', 23, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Events\"}', NULL, NULL, '2026-04-04 05:53:40'),
(238, 1, 'create', 'gallery_item', 24, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Events\"}', NULL, NULL, '2026-04-04 05:55:07'),
(239, 1, 'create', 'gallery_item', 25, NULL, '{\"title\":\"ABHYUDAY LOGO LAUCH\",\"category\":\"Events\"}', NULL, NULL, '2026-04-04 05:56:52'),
(240, 1, 'login', 'user', NULL, NULL, NULL, '152.57.125.171', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-04 14:23:33'),
(241, 1, 'update', 'faculty_member', 27, '{\"id\":27,\"name\":\"Ms. Shambhavi Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MBA, DFA, PGDBA\",\"experience_years\":\"14+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfbb92d1eb6_1775221650.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":6,\"created_by\":1,\"created_at\":\"2026-04-03 06:07:30\",\"updated_at\":\"2026-04-03 06:07:30\"}', '{\"name\":\"Ms. Shambhavi Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.Com., DFA, PGDBA\",\"experience_years\":\"14+\",\"program\":\"MBA\",\"photo_url\":\"\",\"display_order\":6,\"is_active\":1,\"id\":27}', NULL, NULL, '2026-04-04 14:25:08'),
(242, 1, 'create', 'faculty_member', 62, NULL, '{\"name\":\"Ms. Shambhavi Bhounsle\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-04 14:27:11'),
(243, 1, 'delete', 'faculty_member', 27, '{\"id\":27,\"name\":\"Ms. Shambhavi Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.Com., DFA, PGDBA\",\"experience_years\":\"14+\",\"photo_url\":\"\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":6,\"created_by\":1,\"created_at\":\"2026-04-03 06:07:30\",\"updated_at\":\"2026-04-04 07:25:08\"}', NULL, NULL, NULL, '2026-04-04 14:27:27'),
(244, 1, 'login', 'user', NULL, NULL, NULL, '152.57.120.59', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-06 07:14:57'),
(245, 1, 'create', 'faculty_member', 63, NULL, '{\"name\":\"Ms. Shambhavi Bhounsle\",\"program\":\"MBA\"}', NULL, NULL, '2026-04-06 07:17:48'),
(246, 1, 'delete', 'faculty_member', 62, '{\"id\":62,\"name\":\"Ms. Shambhavi Bhounsle\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.Com., DFA, PGDBA\",\"experience_years\":\"14+\",\"photo_url\":\"\\/uploads\\/faculty\\/69d11fbf9a4c8_1775312831.jpeg\",\"program\":\"MBA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-04 07:27:11\",\"updated_at\":\"2026-04-04 07:27:11\"}', NULL, NULL, NULL, '2026-04-06 07:18:07'),
(247, 1, 'create', 'gallery_item', 26, NULL, '{\"title\":\"ABHYUDAY\",\"category\":\"Events\"}', NULL, NULL, '2026-04-06 07:26:20'),
(248, 1, 'create', 'gallery_item', 27, NULL, '{\"title\":\"ABHYUDAY\",\"category\":\"Events\"}', NULL, NULL, '2026-04-06 07:26:34'),
(249, 1, 'delete', 'gallery_item', 27, '{\"id\":27,\"title\":\"ABHYUDAY\",\"description\":\"\",\"image_url\":\"\\/uploads\\/gallery\\/69d3602a2b0c1_1775460394.jpg\",\"category\":\"Events\",\"uploaded_by\":1,\"is_active\":1,\"created_at\":\"2026-04-06 00:26:34\",\"updated_at\":\"2026-04-06 00:26:34\"}', NULL, NULL, NULL, '2026-04-06 07:26:49'),
(250, 1, 'create', 'gallery_item', 28, NULL, '{\"title\":\"ABHYUDAY-2k26\",\"category\":\"Events\"}', NULL, NULL, '2026-04-06 07:28:13'),
(251, 1, 'create', 'gallery_item', 29, NULL, '{\"title\":\"ABHYUDAY-2k26\",\"category\":\"Events\"}', NULL, NULL, '2026-04-06 07:40:15'),
(252, 1, 'create', 'gallery_item', 30, NULL, '{\"title\":\"ABHYUDAY-2k26\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:41:12'),
(253, 1, 'create', 'gallery_item', 31, NULL, '{\"title\":\"ABHYUDAY-Stall Trading\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:49:23'),
(254, 1, 'create', 'gallery_item', 32, NULL, '{\"title\":\"ABHYUDAY-Stall Trading\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:50:06'),
(255, 1, 'create', 'gallery_item', 33, NULL, '{\"title\":\"FACULTY DEVELOPMENT PROGRAM\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:52:50'),
(256, 1, 'create', 'gallery_item', 34, NULL, '{\"title\":\"FACULTY DEVELOPMENT PROGRAM\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:53:47'),
(257, 1, 'create', 'gallery_item', 35, NULL, '{\"title\":\"FACULTY DEVELOPMENT PROGRAM\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:54:46'),
(258, 1, 'create', 'gallery_item', 36, NULL, '{\"title\":\"FACULTY DEVELOPMENT PROGRAM\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:56:08'),
(259, 1, 'create', 'gallery_item', 37, NULL, '{\"title\":\"FACULTY DEVELOPMENT PROGRAM\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:58:16'),
(260, 1, 'create', 'gallery_item', 38, NULL, '{\"title\":\"FACULTY DEVELOPMENT PROGRAM\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 07:59:02'),
(261, 1, 'create', 'gallery_item', 39, NULL, '{\"title\":\"Consumer Awareness Program\",\"category\":\"General\"}', NULL, NULL, '2026-04-06 08:02:25'),
(262, 1, 'create', 'gallery_item', 40, NULL, '{\"title\":\"Youth Day\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 08:04:55'),
(263, 1, 'create', 'gallery_item', 41, NULL, '{\"title\":\"Youth Day\",\"category\":\"Students\"}', NULL, NULL, '2026-04-06 08:05:45'),
(264, 1, 'create', 'gallery_item', 42, NULL, '{\"title\":\"From Idea to Impact: The Journey of Entrepreneur\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 08:08:49'),
(265, 1, 'create', 'gallery_item', 43, NULL, '{\"title\":\"VIMUKTHI\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-06 08:12:01'),
(266, 1, 'create', 'news_post', 11, NULL, '{\"title\":\"VIMUKTHI\\u201d Awareness Programme Held at Parivarthana Business School\"}', NULL, NULL, '2026-04-06 08:44:33'),
(267, 1, 'login', 'user', NULL, NULL, NULL, '152.57.66.253', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-07 08:28:10'),
(268, 1, 'create', 'gallery_item', 44, NULL, '{\"title\":\"Visit to Adavi\",\"category\":\"Campus\"}', NULL, NULL, '2026-04-07 08:33:42'),
(269, 1, 'create', 'gallery_item', 45, NULL, '{\"title\":\"Cleanliness drive at the foothills of the B R Temple\",\"category\":\"General\"}', NULL, NULL, '2026-04-07 08:35:21'),
(270, 1, 'create', 'gallery_item', 46, NULL, '{\"title\":\"Digital Transformation at B R Hills\",\"category\":\"General\"}', NULL, NULL, '2026-04-07 08:36:30'),
(271, 1, 'create', 'gallery_item', 47, NULL, '{\"title\":\"Visit to K Gudi\",\"category\":\"General\"}', NULL, NULL, '2026-04-07 08:37:31'),
(272, 1, 'create', 'news_post', 12, NULL, '{\"title\":\"\\u00a0VIMUKTHI\"}', NULL, NULL, '2026-04-07 08:58:25'),
(273, 1, 'create', 'news_post', 13, NULL, '{\"title\":\"VIMUKTHI\"}', NULL, NULL, '2026-04-07 09:34:36'),
(274, 1, 'delete', 'news_post', 13, '{\"id\":13,\"title\":\"VIMUKTHI\",\"content\":\"Digital Transformation at B R Hills \\u2013 Villagers\\u2019 Interaction by ISR Committee, Parivarthana Business School\",\"blog_url\":\"\",\"image_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/04\\/digital-transformation-at-b-r-hills.html\",\"category\":\"General\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-04-07\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-04-07 02:34:36\",\"updated_at\":\"2026-04-07 02:34:36\"}', NULL, NULL, NULL, '2026-04-07 10:18:29'),
(275, 1, 'delete', 'news_post', 12, '{\"id\":12,\"title\":\"\\u00a0VIMUKTHI\",\"content\":\"\\u00a0VIMUKTHI \\u2013 A Step Towards a Drug-Free MysuruParivarthana Business School (PBS) organised an anti-drug awareness programme titled \\u201cVIMUKTHI \\u2013 A Step Towards a Drug-Free Mysuru\\u201d today at 12:00...\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/04\\/vimukthi-step-towards-drug-free-mysuru.html\",\"image_url\":\"\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-04-07\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-04-07 01:58:25\",\"updated_at\":\"2026-04-07 01:58:25\"}', NULL, NULL, NULL, '2026-04-07 10:19:29'),
(276, 1, 'login', 'user', NULL, NULL, NULL, '152.57.71.203', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-08 10:24:37'),
(277, 1, 'create', 'news_post', 14, NULL, '{\"title\":\"Cleanliness drive at the foothills of the B R Temple\"}', NULL, NULL, '2026-04-08 10:44:37'),
(278, 1, 'update', 'news_post', 11, '{\"id\":11,\"title\":\"VIMUKTHI\\u201d Awareness Programme Held at Parivarthana Business School\",\"content\":\"Mysuru, Feb 9:\\nParivarthana Business School (PBS) organised an anti-drug awareness programme titled \\u201cVIMUKTHI \\u2013 A Step Towards a Drug-Free Mysuru\\u201d today at 12:00 PM on the PBS Campus. The initiative aimed to educate students about the dangers of substance abuse and promote youth safety and social responsibility.\\n\\nThe programme was conducted by the guidance of the Principal Dr Raghunandan. G and the Managing Trustee B. V. Kumar in association with Mysuru City Police as part of their ongoing efforts to build a drug-free society. Students actively participated in the session, which highlighted the importance of staying away from drugs and contributing positively to the community.\\n\\nThe chief guest for the event was Mr. Ravi Prasad, ACP, Vijayanagar Sub-Division, Mysuru City, who addressed the gathering on the role of youth in shaping a healthy society. In his speech, he emphasized awareness, self-discipline, and responsible choices among young people.\\n\\nThe institution also had the honour of welcoming police Inspector Arun L. and Police Sub-Inspector Gowtham Gowda from Metgalli Police Station, Mysuru, who shared valuable insights on law enforcement initiatives and community participation in preventing drug abuse.\\n\\nThe management and faculty of Parivarthana Business School expressed their gratitude to the police officers for their guidance and support. The programme concluded with a strong message encouraging students to stand united against drugs and work towards a safer future for Mysuru.\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/04\\/vimukthi-step-towards-drug-free-mysuru.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/b\\/R29vZ2xl\\/AVvXsEiTgFYlCdO_Rl9PjnMkZRnXuYSA8tmCPsU9fCqzVB6bAwEsIxT5cxDSuR12-KQ-CdzRJ9a88hP0hTOSZotS8RAUksJfwudWWuqnQms2KIgo-CtIduP1wMEI49KC7156xrLG9f3s1bYd1YK3XCpPiWKj1yRaBIsUc27du_CTUgPTlviFMh7kMdCHR9d4Uw8L\\/w489-h275\\/WhatsApp%20Image%202026-04-06%20at%2012.52.34.jpeg\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-04-06\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-04-06 01:44:33\",\"updated_at\":\"2026-04-06 01:44:33\"}', '{\"title\":\"VIMUKTHI\\u201d Awareness Programme Held at Parivarthana Business School\",\"content\":\"Parivarthana Business School (PBS) organised an anti-drug awareness programme titled \\u201cVIMUKTHI \\u2013 A Step Towards a Drug-Free Mysuru\\u201d today at 12:00 PM on the PBS Campus. \",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/04\\/vimukthi-step-towards-drug-free-mysuru.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/b\\/R29vZ2xl\\/AVvXsEiTgFYlCdO_Rl9PjnMkZRnXuYSA8tmCPsU9fCqzVB6bAwEsIxT5cxDSuR12-KQ-CdzRJ9a88hP0hTOSZotS8RAUksJfwudWWuqnQms2KIgo-CtIduP1wMEI49KC7156xrLG9f3s1bYd1YK3XCpPiWKj1yRaBIsUc27du_CTUgPTlviFMh7kMdCHR9d4Uw8L\\/w489-h275\\/WhatsApp%20Image%202026-04-06%20at%2012.52.34.jpeg\",\"category\":\"Blog\"}', NULL, NULL, '2026-04-08 10:48:01'),
(279, 1, 'login', 'user', NULL, NULL, NULL, '152.57.71.203', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-08 10:59:07'),
(280, 1, 'create', 'news_post', 15, NULL, '{\"title\":\"\\u00a0Visit to K Gudi \\u2013 Student Recreation and Learning Experience\"}', NULL, NULL, '2026-04-08 11:00:23'),
(281, 1, 'create', 'news_post', 16, NULL, '{\"title\":\"Digital Transformation at B R Hills\"}', NULL, NULL, '2026-04-08 11:04:47'),
(282, 1, 'create', 'news_post', 17, NULL, '{\"title\":\"Industrial visit to Adavi : Honey manufacturing unit\"}', NULL, NULL, '2026-04-08 11:08:49'),
(283, 1, 'create', 'news_post', 18, NULL, '{\"title\":\"Abhyuday-2k26\"}', NULL, NULL, '2026-04-08 11:16:00'),
(284, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.71.203', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-08 11:16:11'),
(285, 1, 'login', 'user', NULL, NULL, NULL, '106.51.199.24', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-12 10:06:16'),
(286, 1, 'logout', 'user', NULL, NULL, NULL, '106.51.199.24', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', '2026-04-12 10:08:57'),
(287, 1, 'login', 'user', NULL, NULL, NULL, '152.57.26.39', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', '2026-04-29 05:53:49'),
(288, 1, 'login', 'user', NULL, NULL, NULL, '152.57.60.234', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', '2026-05-06 09:50:57'),
(289, 1, 'create', 'news_post', 19, NULL, '{\"title\":\"\\u00a0Earth Day Celebration\\u00a0\"}', NULL, NULL, '2026-05-06 09:51:47'),
(290, 1, 'create', 'news_post', 20, NULL, '{\"title\":\"World Book Day\"}', NULL, NULL, '2026-05-06 10:04:10'),
(291, 1, 'create', 'news_post', 21, NULL, '{\"title\":\"Placements\"}', NULL, NULL, '2026-05-06 10:04:53'),
(292, 1, 'create', 'news_post', 22, NULL, '{\"title\":\"Congratulations\"}', NULL, NULL, '2026-05-06 10:10:53'),
(293, 1, 'create', 'news_post', 23, NULL, '{\"title\":\"Congratulations\"}', NULL, NULL, '2026-05-06 10:24:28'),
(294, 1, 'login', 'user', NULL, NULL, NULL, '152.57.55.35', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36', '2026-05-27 04:48:17'),
(295, 1, 'delete', 'faculty_member', 42, '{\"id\":42,\"name\":\"Ms. Suhas B Raj\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCA\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfc2293e0f2_1775223337.jpeg\",\"program\":\"BCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:35:37\",\"updated_at\":\"2026-04-03 06:35:37\"}', NULL, NULL, NULL, '2026-05-27 04:52:10'),
(296, 1, 'create', 'faculty_member', 64, NULL, '{\"name\":\"Mr. Suhas B Raj\",\"program\":\"BCA\"}', NULL, NULL, '2026-05-27 04:59:27'),
(297, 1, 'create', 'faculty_member', 65, NULL, '{\"name\":\"Mr. Suhas B Raj\",\"program\":\"BCA\"}', NULL, NULL, '2026-05-27 04:59:28'),
(298, 1, 'login', 'user', NULL, NULL, NULL, '152.57.58.106', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36', '2026-05-27 05:02:32'),
(299, 1, 'delete', 'faculty_member', 65, '{\"id\":65,\"name\":\"Mr. Suhas B Raj\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"MCA\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167a30b6744_1779857968.jpeg\",\"program\":\"BCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 21:59:28\",\"updated_at\":\"2026-05-26 21:59:28\"}', NULL, NULL, NULL, '2026-05-27 05:02:49'),
(300, 1, 'delete', 'faculty_member', 39, '{\"id\":39,\"name\":\"Mr. Pavan L R\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"MSc.(Cs)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfc162c6ccf_1775223138.jpeg\",\"program\":\"BCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-04-03 06:32:18\",\"updated_at\":\"2026-04-03 06:32:18\"}', NULL, NULL, NULL, '2026-05-27 05:03:15'),
(301, 1, 'create', 'faculty_member', 66, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"MCA\"}', NULL, NULL, '2026-05-27 05:06:34'),
(302, 1, 'create', 'faculty_member', 67, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"MCA\"}', NULL, NULL, '2026-05-27 05:06:55'),
(303, 1, 'create', 'faculty_member', 68, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"MCA\"}', NULL, NULL, '2026-05-27 05:07:18'),
(304, 1, 'create', 'faculty_member', 69, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"MCA\"}', NULL, NULL, '2026-05-27 05:07:26'),
(305, 1, 'create', 'faculty_member', 70, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"MCA\"}', NULL, NULL, '2026-05-27 05:07:29'),
(306, 1, 'create', 'faculty_member', 71, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"MCA\"}', NULL, NULL, '2026-05-27 05:07:29'),
(307, 1, 'delete', 'faculty_member', 69, '{\"id\":69,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167c0e2c31d_1779858446.jpeg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:07:26\",\"updated_at\":\"2026-05-26 22:07:26\"}', NULL, NULL, NULL, '2026-05-27 05:07:38'),
(308, 1, 'delete', 'faculty_member', 70, '{\"id\":70,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167c117562c_1779858449.jpeg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:07:29\",\"updated_at\":\"2026-05-26 22:07:29\"}', NULL, NULL, NULL, '2026-05-27 05:07:41'),
(309, 1, 'delete', 'faculty_member', 71, '{\"id\":71,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167c11a0c40_1779858449.jpeg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:07:29\",\"updated_at\":\"2026-05-26 22:07:29\"}', NULL, NULL, NULL, '2026-05-27 05:07:44'),
(310, 1, 'delete', 'faculty_member', 68, '{\"id\":68,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167c06ee5cc_1779858438.jpeg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:07:18\",\"updated_at\":\"2026-05-26 22:07:18\"}', NULL, NULL, NULL, '2026-05-27 05:07:48'),
(311, 1, 'delete', 'faculty_member', 67, '{\"id\":67,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167bef75887_1779858415.jpeg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:55\",\"updated_at\":\"2026-05-26 22:06:55\"}', NULL, NULL, NULL, '2026-05-27 05:07:51'),
(312, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-18 05:34:48'),
(313, 1, 'update', 'news_post', 23, '{\"id\":23,\"title\":\"Congratulations\",\"content\":\"Parivarthana Business School proudly congratulates Ms. Kavana H M and Ms. Rakshitha K on their successful placement at Material Depot as Experience Centre Advisors with a package of 6 LPA.\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/05\\/parivarthana-business-school-proudly_6.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/b\\/R29vZ2xl\\/AVvXsEiARd93KLwHgLYg-W-_UDlw_8raB7Wcopzp95vAAihYuSFKQWT_WipegQQI0lxyn6ObcdnAvMGPh5fYAfDOKo235dOdoByWgZuMpkEvmE2DxzGMRDL8oLsqu1EbQy92IcJqNM_6Cz0LlV6rLhlKyRK4apHn9FxQwGBDg6vWQ1IQVsGZxHN1ZH1MYqU45_Wa\\/w332-h429\\/WhatsApp%20Image%202026-05-05%20at%2017.04.44.jpeg\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-05-06\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-05-06 03:24:28\",\"updated_at\":\"2026-05-06 03:24:28\"}', '{\"is_visible\":true}', NULL, NULL, '2026-07-18 05:52:17'),
(314, 1, 'update', 'news_post', 23, '{\"id\":23,\"title\":\"Congratulations\",\"content\":\"Parivarthana Business School proudly congratulates Ms. Kavana H M and Ms. Rakshitha K on their successful placement at Material Depot as Experience Centre Advisors with a package of 6 LPA.\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/05\\/parivarthana-business-school-proudly_6.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/b\\/R29vZ2xl\\/AVvXsEiARd93KLwHgLYg-W-_UDlw_8raB7Wcopzp95vAAihYuSFKQWT_WipegQQI0lxyn6ObcdnAvMGPh5fYAfDOKo235dOdoByWgZuMpkEvmE2DxzGMRDL8oLsqu1EbQy92IcJqNM_6Cz0LlV6rLhlKyRK4apHn9FxQwGBDg6vWQ1IQVsGZxHN1ZH1MYqU45_Wa\\/w332-h429\\/WhatsApp%20Image%202026-05-05%20at%2017.04.44.jpeg\",\"category\":\"Blog\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-05-06\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-05-06 03:24:28\",\"updated_at\":\"2026-07-17 22:52:17\"}', '{\"is_visible\":false}', NULL, NULL, '2026-07-18 05:52:19'),
(315, 1, 'update', 'news_post', 22, '{\"id\":22,\"title\":\"Congratulations\",\"content\":\"Parivarthana Business School proudly congratulates Ms. Vaishnavi Patil on her successful placement at Material Depot as an Experience Centre Advisor with a package of 6 LPA.\",\"blog_url\":\"https:\\/\\/latestnewsandeventspbs.blogspot.com\\/2026\\/05\\/parivarthana-business-school-proudly.html\",\"image_url\":\"https:\\/\\/blogger.googleusercontent.com\\/img\\/b\\/R29vZ2xl\\/AVvXsEjXBEhI13CwmFRQCPFDoN3AT6fpHnOSxmljSaxotM9mMwB7qsyKYaz_VSf6H2WM3pA1QMhVWjrVOxpGTVetweK5ZAhdNf8KggaEEkXoY8uNQKnEcFkSxFkj-1bCT-qx8yrccDZIB6u8QLX_5_32PHaOuOi1LYxGd50vPQSxoHhAxlzGY2MKejpIUbbCvxh2\\/w450-h384\\/WhatsApp%20Image%202026-04-27%20at%2010.21.54%20(1).jpeg\",\"category\":\"General\",\"is_featured\":0,\"is_visible\":1,\"published_date\":\"2026-05-06\",\"scraped_from_blog\":0,\"created_by\":1,\"created_at\":\"2026-05-06 03:10:53\",\"updated_at\":\"2026-05-06 03:10:53\"}', '{\"is_visible\":false}', NULL, NULL, '2026-07-18 05:52:21'),
(316, 1, 'logout', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-18 05:54:55'),
(317, 1, 'login', 'user', NULL, NULL, NULL, '152.57.59.138', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-18 06:21:00'),
(318, 1, 'login', 'user', NULL, NULL, NULL, '152.57.49.124', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-21 05:04:55'),
(319, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.49.22', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-21 05:07:46'),
(320, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.49.22', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-21 05:07:46'),
(321, 1, 'login', 'user', NULL, NULL, NULL, '152.57.49.22', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-21 05:07:48'),
(322, 1, 'login', 'user', NULL, NULL, NULL, '152.57.77.60', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-25 03:59:18'),
(323, 1, 'login', 'user', NULL, NULL, NULL, '152.57.77.60', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-25 04:04:43'),
(324, 1, 'login', 'user', NULL, NULL, NULL, '152.57.77.200', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-27 05:40:23'),
(325, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a167bda65146_1779858394.jpeg\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-05-26 22:06:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:47:51'),
(326, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:47:51\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:47:52'),
(327, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:47:52\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:47:53'),
(328, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:47:53\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:34'),
(329, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:34'),
(330, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:34'),
(331, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:34'),
(332, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:34');
INSERT INTO `activity_logs` (`id`, `user_id`, `action`, `entity_type`, `entity_id`, `old_values`, `new_values`, `ip_address`, `user_agent`, `created_at`) VALUES
(333, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:34'),
(334, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:34\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(335, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(336, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(337, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(338, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(339, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(340, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(341, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(342, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(343, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(344, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:35'),
(345, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:35\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(346, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(347, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(348, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(349, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(350, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(351, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(352, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(353, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(354, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:36'),
(355, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:36\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(356, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(357, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(358, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(359, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(360, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(361, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(362, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(363, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(364, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(365, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(366, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(367, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(368, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(369, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:49:41'),
(370, 1, 'logout', 'user', NULL, NULL, NULL, '152.57.77.200', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-27 05:50:11'),
(371, 1, 'login', 'user', NULL, NULL, NULL, '152.57.77.200', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-27 05:51:35'),
(372, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:49:41\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:52:11'),
(373, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:52:11\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-27 05:53:05'),
(374, 1, 'login', 'user', NULL, NULL, NULL, '152.57.76.123', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-29 10:49:10'),
(375, 1, 'login', 'user', NULL, NULL, NULL, '122.171.23.108', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-29 15:35:19'),
(376, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-26 22:53:05\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":1,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-29 15:36:11'),
(377, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-29 08:36:11\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":0,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-29 15:37:13'),
(378, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-29 08:37:13\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":0,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-29 15:37:13'),
(379, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-29 08:37:13\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":0,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-29 15:37:13'),
(380, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.12', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-29 16:52:27'),
(381, 1, 'update', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-29 08:37:13\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"\",\"display_order\":0,\"is_active\":1,\"id\":66}', NULL, NULL, '2026-07-29 16:59:38'),
(382, 1, 'create', 'faculty_member', 72, NULL, '{\"name\":\"Mr. Pavan L R\",\"program\":\"BBA\"}', NULL, NULL, '2026-07-29 17:01:17'),
(383, 1, 'delete', 'faculty_member', 66, '{\"id\":66,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M.sc(CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\",\"program\":\"MCA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-05-26 22:06:34\",\"updated_at\":\"2026-07-29 09:59:38\"}', NULL, NULL, NULL, '2026-07-29 17:01:21'),
(384, 1, 'update', 'faculty_member', 72, '{\"id\":72,\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M Sc. (CS)\",\"experience_years\":\"5+\",\"photo_url\":\"\\/uploads\\/faculty\\/6a6a31dd7ac0c_1785344477.jpeg\",\"program\":\"BBA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-07-29 10:01:17\",\"updated_at\":\"2026-07-29 10:01:17\"}', '{\"name\":\"Mr. Pavan L R\",\"designation\":\"Assistant Professor\",\"qualifications\":\"M Sc. (CS)\",\"experience_years\":\"5+\",\"program\":\"MCA\",\"photo_url\":\"https:\\/\\/www.parivarthanabschool.in\\/uploads\\/faculty\\/6a6a31dd7ac0c_1785344477.jpeg\",\"display_order\":0,\"is_active\":1,\"id\":72}', NULL, NULL, '2026-07-29 17:02:45'),
(385, 1, 'update', 'faculty_member', 58, '{\"id\":58,\"name\":\"Mr. Chandan M S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom.\",\"experience_years\":\"1+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfd17987750_1775227257.jpeg\",\"program\":\"BBA\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 07:40:57\",\"updated_at\":\"2026-04-03 07:40:57\"}', '{\"name\":\"Mr. Chandan M S\",\"designation\":\"Assistant Professor\",\"qualifications\":\"MCom.\",\"experience_years\":\"1+\",\"program\":\"BBA\",\"photo_url\":\"https:\\/\\/www.parivarthanabschool.in\\/\\/uploads\\/faculty\\/69cfd17987750_1775227257.jpeg\",\"display_order\":6,\"is_active\":1,\"id\":58}', NULL, NULL, '2026-07-29 17:05:53'),
(386, 1, 'update', 'faculty_member', 47, '{\"id\":47,\"name\":\"Mr. Imran Khan S\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"M.Com., MBA\",\"experience_years\":\"11+\",\"photo_url\":\"\\/uploads\\/faculty\\/69cfc4c91d979_1775224009.jpeg\",\"program\":\"BCom\",\"is_active\":1,\"display_order\":1,\"created_by\":1,\"created_at\":\"2026-04-03 06:46:49\",\"updated_at\":\"2026-04-03 06:46:49\"}', '{\"name\":\"Mr. Imran Khan S\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"M.Com., MBA\",\"experience_years\":\"11+\",\"program\":\"BCom\",\"photo_url\":\"https:\\/\\/www.parivarthanabschool.in\\/\\/uploads\\/faculty\\/69cfc4c91d979_1775224009.jpeg\",\"display_order\":0,\"is_active\":1,\"id\":47}', NULL, NULL, '2026-07-29 17:06:22'),
(387, 1, 'update', 'faculty_member', 47, '{\"id\":47,\"name\":\"Mr. Imran Khan S\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"M.Com., MBA\",\"experience_years\":\"11+\",\"photo_url\":\"https:\\/\\/www.parivarthanabschool.in\\/\\/uploads\\/faculty\\/69cfc4c91d979_1775224009.jpeg\",\"program\":\"BCom\",\"is_active\":1,\"display_order\":0,\"created_by\":1,\"created_at\":\"2026-04-03 06:46:49\",\"updated_at\":\"2026-07-29 10:06:22\"}', '{\"name\":\"Mr. Imran Khan S\",\"designation\":\"HOD & Assistant Professor\",\"qualifications\":\"M.Com., MBA\",\"experience_years\":\"11+\",\"program\":\"BCom\",\"photo_url\":\"https:\\/\\/www.parivarthanabschool.in\\/\\/uploads\\/faculty\\/69cfc4c91d979_1775224009.jpeg\",\"display_order\":8,\"is_active\":1,\"id\":47}', NULL, NULL, '2026-07-29 17:07:44'),
(388, 1, 'login', 'user', NULL, NULL, NULL, '106.51.195.12', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-29 17:08:36'),
(389, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-30 09:37:50'),
(390, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-30 12:01:05'),
(391, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-07-30 12:08:08'),
(392, 1, 'login', 'user', NULL, NULL, NULL, '152.57.72.189', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 04:58:12'),
(393, 1, 'login', 'user', NULL, NULL, NULL, '212.8.249.143', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 05:06:42'),
(394, 1, 'login', 'user', NULL, NULL, NULL, '152.57.63.253', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 05:24:38'),
(395, 1, 'login', 'user', NULL, NULL, NULL, '152.57.58.180', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 05:29:14'),
(396, 1, 'create', 'gallery_item', 48, NULL, '{\"title\":\"Kaveri back water clean up drive\",\"category\":\"Events\"}', NULL, NULL, '2026-08-01 05:51:03'),
(397, 1, 'login', 'user', NULL, NULL, NULL, '152.57.57.119', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 05:55:35'),
(398, 1, 'create', 'news_post', 24, NULL, '{\"title\":\"SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS\"}', NULL, NULL, '2026-08-01 05:56:10'),
(399, 1, 'login', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 08:24:22'),
(400, 1, 'logout', 'user', NULL, NULL, NULL, '106.51.76.109', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-01 08:24:35'),
(401, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-08 05:52:58'),
(402, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-08 05:52:59'),
(403, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-08 05:53:03'),
(404, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-08 05:53:04'),
(405, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-08 05:53:04'),
(406, 1, 'login', 'user', NULL, NULL, NULL, '118.151.211.34', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36', '2026-08-08 05:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `admission_enquiries`
--

CREATE TABLE `admission_enquiries` (
  `id` int(11) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `program_interest` enum('BBA','BCA','BCom','MBA','MCA') NOT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` enum('pending','contacted','admitted','rejected') DEFAULT 'pending',
  `assigned_to` int(11) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_backup`
--

CREATE TABLE `faculty_backup` (
  `id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `qualifications` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience_years` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `program` enum('BBA','BCA','BCom','MBA','MCA') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `display_order` int(11) DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `faculty_backup`
--

INSERT INTO `faculty_backup` (`id`, `name`, `designation`, `qualifications`, `experience_years`, `photo_url`, `program`, `is_active`, `display_order`, `created_by`, `created_at`, `updated_at`) VALUES
(11, 'Mr. Praveen Joshi', 'Assistant Professor', 'MBA, (PhD)', '8+ Years', '/uploads/faculty/69ce05253b7d0_1775109413.jpeg', 'MBA', 1, 3, 1, '2026-04-02 05:56:53', '2026-04-02 14:32:00'),
(16, 'Ms. Chaithanya K', 'Assistant Professor', 'MBA', '2+ years', '/uploads/faculty/69ce095041998_1775110480.jpeg', 'MBA', 1, 8, 1, '2026-04-02 06:14:40', '2026-04-02 14:47:30'),
(18, 'Ms. Niharka Joshi', 'Assistant Professor', 'MBA', '1', '/uploads/faculty/69cfb8d929f96_1775220953.jpeg', 'MBA', 1, 10, 1, '2026-04-03 12:55:53', '2026-04-03 12:55:53'),
(20, 'Nandan G Swamy', 'Assistant Professor', 'MBA', '1', '/uploads/faculty/69cfb92541f46_1775221029.jpeg', 'MBA', 1, 11, 1, '2026-04-03 12:57:09', '2026-04-03 12:57:09'),
(22, 'Mr. Raghu Kumar R', 'Professor', 'B.E., M.Tech., PhD., MBA', '18+', '/uploads/faculty/69cfb9ef02920_1775221231.jpeg', 'MBA', 1, 2, 1, '2026-04-03 13:00:31', '2026-04-03 13:00:31'),
(25, 'Ms. Tejaswinin C K', 'Assistant Professor', 'MDIT, PGDIM, PGDFM, DIM, MBA, B.Ed., MSc., KSET, (PhD.)', '14+', '/uploads/faculty/69cfbaa9925b2_1775221417.jpeg', 'MBA', 1, 4, 1, '2026-04-03 13:03:37', '2026-04-03 13:03:37'),
(26, 'Mr. Ranganatha Y', 'Assistant Professor', 'MCom., BEd., KSET, NET, MBA', '5+', '/uploads/faculty/69cfbb4a108a3_1775221578.jpeg', 'MBA', 1, 5, 1, '2026-04-03 13:06:18', '2026-04-03 13:06:18'),
(28, 'Mr. Ravichandra K K', 'Assistant Professor', 'MBA', '3+', '/uploads/faculty/69cfbc1247e61_1775221778.jpeg', 'MBA', 1, 7, 1, '2026-04-03 13:09:38', '2026-04-03 13:09:38'),
(29, 'Mr. Shamanth Kumar B U', 'HOD & Associate Professor', 'MBA, (PhD.)', '13+', '/uploads/faculty/69cfbc5d7ccec_1775221853.jpeg', 'MBA', 1, 1, 1, '2026-04-03 13:10:53', '2026-04-03 13:10:53'),
(30, 'Ms. Ramya V J', 'HOD & Assistant Professor', 'MCA, (PhD.)', '7+', 'https://www.parivarthanabschool.in//uploads/faculty/69cfbdb0bd498_1775222192.png', 'MCA', 1, 0, 1, '2026-04-03 13:16:32', '2026-07-30 12:10:31'),
(31, 'Ms. Chaithra M D', 'Assistant Professor', 'MCA', '2+', 'https://www.parivarthanabschool.in//uploads/faculty/69cfbe1e8fec2_1775222302.jpeg', 'MCA', 1, 3, 1, '2026-04-03 13:18:22', '2026-07-30 12:09:31'),
(36, 'Mr. Suhas B Raj', 'Assistant Professor', 'MCA', '5+', 'https://www.parivarthanabschool.in//uploads/faculty/69cfbf1176035_1775222545.jpeg', 'MCA', 1, 5, 1, '2026-04-03 13:22:25', '2026-07-30 12:10:19'),
(37, 'Ms. Poornashree Y', 'Assistant Professor', 'MCA', '1', 'https://www.parivarthanabschool.in//uploads/faculty/69cfbf3f3b0dd_1775222591.jpeg', 'MCA', 1, 4, 1, '2026-04-03 13:23:11', '2026-07-30 12:09:51'),
(38, 'Ms. Megha S', 'Assistant Professor', 'MCA', '2+', 'https://www.parivarthanabschool.in//uploads/faculty/69cfbf6b73412_1775222635.jpg', 'MCA', 1, 2, 1, '2026-04-03 13:23:55', '2026-07-30 12:09:06'),
(40, 'Ms. Chaithra M D', 'Assistant Professor', 'MCA', '2+', '/uploads/faculty/69cfc1af1fe98_1775223215.jpeg', 'BCA', 1, 2, 1, '2026-04-03 13:33:35', '2026-04-03 13:33:35'),
(41, 'Ms. Megha S', 'Assistant Professor', 'MCA', '2+', '/uploads/faculty/69cfc1ecc64c1_1775223276.jpg', 'BCA', 1, 0, 1, '2026-04-03 13:34:36', '2026-04-03 13:34:36'),
(43, 'Ms. Poornashree Y', 'Assistant Professor', 'MCA', '1', '/uploads/faculty/69cfc26f3e7e0_1775223407.jpeg', 'BCA', 1, 0, 1, '2026-04-03 13:36:47', '2026-04-03 13:36:47'),
(45, 'Mr. Nikhil Chowdayya', 'Assistant Professor', 'M.A, B.Ed.', '2+', '/uploads/faculty/69cfc372e1222_1775223666.jpeg', 'BCA', 1, 0, 1, '2026-04-03 13:41:06', '2026-04-03 13:41:06'),
(46, 'Ms. Shruthi', 'Assistant Professor', 'M.A, B.Ed.', '2+', '/uploads/faculty/69cfc448cee66_1775223880.jpeg', 'BCA', 1, 0, 1, '2026-04-03 13:44:40', '2026-04-03 13:44:40'),
(47, 'Mr. Imran Khan S', 'HOD & Assistant Professor', 'M.Com., MBA', '11+', 'https://www.parivarthanabschool.in//uploads/faculty/69cfc4c91d979_1775224009.jpeg', 'BCom', 1, 8, 1, '2026-04-03 13:46:49', '2026-07-29 17:07:44'),
(48, 'Ms. Laxith Mouna', 'Assistant Professor', 'MBA', '2+', '/uploads/faculty/69cfc54301a85_1775224131.jpeg', 'BCom', 1, 0, 1, '2026-04-03 13:48:51', '2026-04-03 13:48:51'),
(49, 'Ms. Amulya', 'Assistant Professor', 'M.Com., B.Ed., KSET', '6+', '/uploads/faculty/69cfc5b805325_1775224248.jpeg', 'BCom', 1, 0, 1, '2026-04-03 13:50:48', '2026-04-03 13:50:48'),
(50, 'Mr. Chandan M S', 'Assistant Professor', 'M.Com.', '1+', '/uploads/faculty/69cfc61a1b26e_1775224346.jpeg', 'BCom', 1, 0, 1, '2026-04-03 13:52:26', '2026-04-03 13:52:26'),
(51, 'Ms. Mahalaxmi K S', 'Assistant Professor', 'M.Com., B.Ed., KSET', '6+', '/uploads/faculty/69cfc716c8468_1775224598.jpeg', 'BCom', 1, 0, 1, '2026-04-03 13:56:38', '2026-04-03 13:56:38'),
(53, 'Ms. Shruthi N T', 'Assistant Professor', 'M.A, B.Ed., NET', '2+', '/uploads/faculty/69cfc785cf1a5_1775224709.jpeg', 'BCom', 1, 0, 1, '2026-04-03 13:58:29', '2026-04-03 13:58:29'),
(54, 'Mr. Nikhil Chowdayya', 'Assistant Professor', 'M.A, B.Ed.', '2+', '/uploads/faculty/69cfd033bcd54_1775226931.jpeg', 'BCom', 1, 0, 1, '2026-04-03 14:35:31', '2026-04-03 14:35:31'),
(55, 'Mr. Imran Khan S', 'Assistant Professor', 'MCom., MBA', '11+', '/uploads/faculty/69cfd075ba17b_1775226997.jpeg', 'BBA', 1, 1, 1, '2026-04-03 14:36:37', '2026-04-03 14:36:37'),
(56, 'Ms. Laxith Mouna', 'Assistant Professor', 'MBA', '2+', '/uploads/faculty/69cfd1026a5d6_1775227138.jpeg', 'BBA', 1, 0, 1, '2026-04-03 14:38:58', '2026-04-03 14:38:58'),
(57, 'Ms. Amulya', 'Assistant Professor', 'MCom., B.Ed., KSET', '6', '/uploads/faculty/69cfd144231e9_1775227204.jpeg', 'BBA', 1, 0, 1, '2026-04-03 14:40:04', '2026-04-03 14:40:04'),
(58, 'Mr. Chandan M S', 'Assistant Professor', 'MCom.', '1+', 'https://www.parivarthanabschool.in//uploads/faculty/69cfd17987750_1775227257.jpeg', 'BBA', 1, 6, 1, '2026-04-03 14:40:57', '2026-07-29 17:05:53'),
(59, 'Ms. Mahalaxmi K S', 'Assistant Professor', 'MCom., B.Ed., KSET', '6', '/uploads/faculty/69cfd1b56a743_1775227317.jpeg', 'BBA', 1, 0, 1, '2026-04-03 14:41:57', '2026-04-03 14:41:57'),
(60, 'Ms. Shruthi N T', 'Assistant Professor', 'M.A., B.Ed., NET', '2+', '/uploads/faculty/69cfd2004ff96_1775227392.jpeg', 'BBA', 1, 0, 1, '2026-04-03 14:43:12', '2026-04-03 14:43:12'),
(61, 'Mr. Nikhil Chowdayya', 'Assistant Professor', 'M.A., B.Ed.', '2+', '/uploads/faculty/69cfd2332867f_1775227443.jpeg', 'BBA', 1, 0, 1, '2026-04-03 14:44:03', '2026-04-03 14:44:03'),
(63, 'Ms. Shambhavi Bhounsle', 'Assistant Professor', 'M.Com., DFA, PGDBA', '14+', '/uploads/faculty/69d35e1cdd0c1_1775459868.jpeg', 'MBA', 1, 7, 1, '2026-04-06 07:17:48', '2026-04-06 07:17:48'),
(64, 'Mr. Suhas B Raj', 'HOD & Assistant Professor', 'MCA', '5+', '/uploads/faculty/6a167a2fbdf65_1779857967.jpeg', 'BCA', 1, 1, 1, '2026-05-27 04:59:27', '2026-05-27 04:59:27'),
(72, 'Mr. Pavan L R', 'Assistant Professor', 'M Sc. (CS)', '5+', 'https://www.parivarthanabschool.in/uploads/faculty/6a6a31dd7ac0c_1785344477.jpeg', 'MCA', 1, 1, 1, '2026-07-29 17:01:17', '2026-07-30 12:10:49');

-- --------------------------------------------------------

--
-- Table structure for table `faculty_members`
--

CREATE TABLE `faculty_members` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `qualifications` varchar(255) DEFAULT NULL,
  `experience_years` varchar(50) DEFAULT NULL,
  `photo_url` varchar(500) DEFAULT NULL,
  `program` enum('BBA','BCA','BCom','MBA','MCA') NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `display_order` int(11) DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faculty_members`
--

INSERT INTO `faculty_members` (`id`, `name`, `designation`, `qualifications`, `experience_years`, `photo_url`, `program`, `is_active`, `display_order`, `created_by`, `created_at`, `updated_at`) VALUES
(11, 'Mr. Praveen Joshi', 'Assistant Professor', 'MBA, (PhD)', '8+ Years', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69ce05253b7d0_1775109413.jpeg', 'MBA', 1, 3, 1, '2026-04-02 05:56:53', '2026-08-05 18:07:57'),
(16, 'Ms. Chaithanya K', 'Assistant Professor', 'MBA', '2+ years', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69ce095041998_1775110480.jpeg', 'MBA', 1, 8, 1, '2026-04-02 06:14:40', '2026-08-05 18:07:57'),
(18, 'Ms. Niharka Joshi', 'Assistant Professor', 'MBA', '1', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfb8d929f96_1775220953.jpeg', 'MBA', 1, 10, 1, '2026-04-03 12:55:53', '2026-08-05 18:07:57'),
(20, 'Nandan G Swamy', 'Assistant Professor', 'MBA', '1', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfb92541f46_1775221029.jpeg', 'MBA', 1, 11, 1, '2026-04-03 12:57:09', '2026-08-05 18:07:57'),
(22, 'Mr. Raghu Kumar R', 'Professor', 'B.E., M.Tech., PhD., MBA', '18+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfb9ef02920_1775221231.jpeg', 'MBA', 1, 2, 1, '2026-04-03 13:00:31', '2026-08-05 18:07:57'),
(25, 'Ms. Tejaswinin C K', 'Assistant Professor', 'MDIT, PGDIM, PGDFM, DIM, MBA, B.Ed., MSc., KSET, (PhD.)', '14+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfbaa9925b2_1775221417.jpeg', 'MBA', 1, 4, 1, '2026-04-03 13:03:37', '2026-08-05 18:07:57'),
(26, 'Mr. Ranganatha Y', 'Assistant Professor', 'MCom., BEd., KSET, NET, MBA', '5+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfbb4a108a3_1775221578.jpeg', 'MBA', 1, 5, 1, '2026-04-03 13:06:18', '2026-08-05 18:07:57'),
(28, 'Mr. Ravichandra K K', 'Assistant Professor', 'MBA', '3+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfbc1247e61_1775221778.jpeg', 'MBA', 1, 7, 1, '2026-04-03 13:09:38', '2026-08-05 18:07:57'),
(29, 'Mr. Shamanth Kumar B U', 'HOD & Associate Professor', 'MBA, (PhD.)', '13+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfbc5d7ccec_1775221853.jpeg', 'MBA', 1, 1, 1, '2026-04-03 13:10:53', '2026-08-05 18:07:57'),
(30, 'Ms. Ramya V J', 'HOD & Assistant Professor', 'MCA, (PhD.)', '7+', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/69cfbdb0bd498_1775222192.png', 'MCA', 1, 0, 1, '2026-04-03 13:16:32', '2026-08-11 18:14:50'),
(31, 'Ms. Chaithra M D', 'Assistant Professor', 'MCA', '2+', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/69cfbe1e8fec2_1775222302.jpeg', 'MCA', 1, 3, 1, '2026-04-03 13:18:22', '2026-08-11 18:14:50'),
(36, 'Mr. Suhas B Raj', 'Assistant Professor', 'MCA', '5+', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/69cfbf1176035_1775222545.jpeg', 'MCA', 1, 5, 1, '2026-04-03 13:22:25', '2026-08-11 18:14:50'),
(37, 'Ms. Poornashree Y', 'Assistant Professor', 'MCA', '1', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/69cfbf3f3b0dd_1775222591.jpeg', 'MCA', 1, 4, 1, '2026-04-03 13:23:11', '2026-08-11 18:14:50'),
(38, 'Ms. Megha S', 'Assistant Professor', 'MCA', '2+', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/69cfbf6b73412_1775222635.jpg', 'MCA', 1, 2, 1, '2026-04-03 13:23:55', '2026-08-11 18:14:50'),
(40, 'Ms. Chaithra M D', 'Assistant Professor', 'MCA', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc1af1fe98_1775223215.jpeg', 'BCA', 1, 4, 1, '2026-04-03 13:33:35', '2026-08-11 18:09:06'),
(41, 'Ms. Megha S', 'Assistant Professor', 'MCA', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc1ecc64c1_1775223276.jpg', 'BCA', 1, 3, 1, '2026-04-03 13:34:36', '2026-08-11 18:09:06'),
(43, 'Ms. Poornashree Y', 'Assistant Professor', 'MCA', '1', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc26f3e7e0_1775223407.jpeg', 'BCA', 1, 5, 1, '2026-04-03 13:36:47', '2026-08-11 18:09:06'),
(45, 'Mr. Nikhil Chowdayya', 'Assistant Professor', 'M.A, B.Ed.', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc372e1222_1775223666.jpeg', 'BCA', 1, 2, 1, '2026-04-03 13:41:06', '2026-08-11 18:09:06'),
(46, 'Ms. Shruthi', 'Assistant Professor', 'M.A, B.Ed.', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc448cee66_1775223880.jpeg', 'BCA', 1, 1, 1, '2026-04-03 13:44:40', '2026-08-11 18:09:06'),
(47, 'Mr. Imran Khan S', 'HOD & Assistant Professor', 'M.Com., MBA', '11+', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/ImranKhan.jpg', 'BCom', 1, 0, 1, '2026-04-03 13:46:49', '2026-08-11 17:52:01'),
(48, 'Ms. Laxith Mouna', 'Assistant Professor', 'MBA', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc54301a85_1775224131.jpeg', 'BCom', 1, 3, 1, '2026-04-03 13:48:51', '2026-08-11 17:45:50'),
(49, 'Ms. Amulya', 'Assistant Professor', 'M.Com., B.Ed., KSET', '6+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc5b805325_1775224248.jpeg', 'BCom', 1, 2, 1, '2026-04-03 13:50:48', '2026-08-11 17:45:50'),
(50, 'Mr. Chandan M S', 'Assistant Professor', 'M.Com.', '1+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc61a1b26e_1775224346.jpeg', 'BCom', 1, 6, 1, '2026-04-03 13:52:26', '2026-08-11 17:45:50'),
(51, 'Ms. Mahalaxmi K S', 'Assistant Professor', 'M.Com., B.Ed., KSET', '6+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc716c8468_1775224598.jpeg', 'BCom', 1, 1, 1, '2026-04-03 13:56:38', '2026-08-11 17:45:50'),
(53, 'Ms. Shruthi N T', 'Assistant Professor', 'M.A, B.Ed., NET', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfc785cf1a5_1775224709.jpeg', 'BCom', 1, 4, 1, '2026-04-03 13:58:29', '2026-08-11 17:45:50'),
(54, 'Mr. Nikhil Chowdayya', 'Assistant Professor', 'M.A, B.Ed.', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd033bcd54_1775226931.jpeg', 'BCom', 1, 5, 1, '2026-04-03 14:35:31', '2026-08-11 17:45:50'),
(55, 'Mr. Imran Khan S', 'Assistant Professor', 'MCom., MBA', '11+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd075ba17b_1775226997.jpeg', 'BBA', 1, 0, 1, '2026-04-03 14:36:37', '2026-08-11 17:55:49'),
(56, 'Ms. Laxith Mouna', 'Assistant Professor', 'MBA', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd1026a5d6_1775227138.jpeg', 'BBA', 1, 5, 1, '2026-04-03 14:38:58', '2026-08-11 17:55:49'),
(57, 'Ms. Amulya', 'Assistant Professor', 'MCom., B.Ed., KSET', '6', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd144231e9_1775227204.jpeg', 'BBA', 1, 1, 1, '2026-04-03 14:40:04', '2026-08-11 17:55:49'),
(58, 'Mr. Chandan M S', 'Assistant Professor', 'MCom.', '1+', 'https://www.parivarthana.edu.in/BSchool/uploads/faculty/69cfd17987750_1775227257.jpeg', 'BBA', 1, 6, 1, '2026-04-03 14:40:57', '2026-08-11 17:57:31'),
(59, 'Ms. Mahalaxmi K S', 'Assistant Professor', 'MCom., B.Ed., KSET', '6', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd1b56a743_1775227317.jpeg', 'BBA', 1, 2, 1, '2026-04-03 14:41:57', '2026-08-11 17:55:49'),
(60, 'Ms. Shruthi N T', 'Assistant Professor', 'M.A., B.Ed., NET', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd2004ff96_1775227392.jpeg', 'BBA', 1, 3, 1, '2026-04-03 14:43:12', '2026-08-11 17:55:49'),
(61, 'Mr. Nikhil Chowdayya', 'Assistant Professor', 'M.A., B.Ed.', '2+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69cfd2332867f_1775227443.jpeg', 'BBA', 1, 4, 1, '2026-04-03 14:44:03', '2026-08-11 17:55:49'),
(63, 'Ms. Shambhavi Bhounsle', 'Assistant Professor', 'M.Com., DFA, PGDBA', '14+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/69d35e1cdd0c1_1775459868.jpeg', 'MBA', 1, 7, 1, '2026-04-06 07:17:48', '2026-08-05 18:07:57'),
(64, 'Mr. Suhas B Raj', 'HOD & Assistant Professor', 'MCA', '5+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/6a167a2fbdf65_1779857967.jpeg', 'BCA', 1, 0, 1, '2026-05-27 04:59:27', '2026-08-11 18:09:06'),
(72, 'Mr. Pavan L R', 'Assistant Professor', 'M Sc. (CS)', '5+', 'https://parivarthana.edu.in/BSchool/uploads/faculty/6a6a31dd7ac0c_1785344477.jpeg', 'MCA', 1, 1, 1, '2026-07-29 17:01:17', '2026-08-05 18:07:57');

-- --------------------------------------------------------

--
-- Table structure for table `gallery_items`
--

CREATE TABLE `gallery_items` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `image_url` varchar(500) NOT NULL,
  `category` varchar(50) DEFAULT 'General',
  `uploaded_by` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery_items`
--

INSERT INTO `gallery_items` (`id`, `title`, `description`, `image_url`, `category`, `uploaded_by`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Annual Day Celebration', 'Students performing at the annual day function', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', 'Celebrations', NULL, 1, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(2, 'Campus Library', 'Student Achievement', 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800', 'Infrastructure', NULL, 1, '2026-03-30 19:02:06', '2026-04-02 06:25:18'),
(4, 'Technical Workshop', 'Industry experts conducting workshop', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', 'Workshops', NULL, 1, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(5, 'Student Achievement', 'Student Achievemet', '/BSchool/uploads/gallery/69ce0c8e74efc_1775111310.jpeg', 'Students', 1, 1, '2026-04-02 06:28:30', '2026-08-05 18:16:47'),
(14, 'Earn while You Learn', 'A lecture delivered bu Mr. Manoj Kumar, Mr. Sivadath and Ms. Ambily.', '/BSchool/uploads/gallery/69ce8c44b1481_1775144004.jpeg', 'Events', 4, 1, '2026-04-02 15:33:24', '2026-08-05 18:16:47'),
(21, 'ABHYUDAY LOGO LAUNCH', 'Unveiling the symbol of innovation, growth, and entrepreneurial spirit.', '/BSchool/uploads/gallery/69d0a3bbe6727_1775281083.jpg', 'Events', 1, 1, '2026-04-04 05:38:03', '2026-08-05 18:16:47'),
(22, 'ABHYUDAY LOGO LAUCH', 'A new beginning to ignite student innovation.', '/BSchool/uploads/gallery/69d0a6e105651_1775281889.jpg', 'Events', 1, 1, '2026-04-04 05:51:29', '2026-08-05 18:16:47'),
(23, 'ABHYUDAY LOGO LAUCH', 'Dream big, start small, achieve great.', '/BSchool/uploads/gallery/69d0a764102a6_1775282020.jpg', 'Events', 1, 1, '2026-04-04 05:53:40', '2026-08-05 18:16:47'),
(24, 'ABHYUDAY LOGO LAUCH', 'Empowering young minds to lead and create.', '/BSchool/uploads/gallery/69d0a7bbbfb39_1775282107.jpg', 'Events', 1, 1, '2026-04-04 05:55:07', '2026-08-05 18:16:47'),
(25, 'ABHYUDAY LOGO LAUCH', 'The journey of ideas turning into reality.', '/BSchool/uploads/gallery/69d0a82489368_1775282212.jpg', 'Events', 1, 1, '2026-04-04 05:56:52', '2026-08-05 18:16:47'),
(26, 'ABHYUDAY', '', '/BSchool/uploads/gallery/69d3601ccf056_1775460380.jpg', 'Events', 1, 1, '2026-04-06 07:26:20', '2026-08-05 18:16:47'),
(28, 'ABHYUDAY-2k26', '', '/BSchool/uploads/gallery/69d3608dd41ff_1775460493.jpg', 'Events', 1, 1, '2026-04-06 07:28:13', '2026-08-05 18:16:47'),
(29, 'ABHYUDAY-2k26', '', '/BSchool/uploads/gallery/69d3635f729d0_1775461215.jpg', 'Events', 1, 1, '2026-04-06 07:40:15', '2026-08-05 18:16:47'),
(30, 'ABHYUDAY-2k26', '', '/BSchool/uploads/gallery/69d36398e1af6_1775461272.jpg', 'Campus', 1, 1, '2026-04-06 07:41:12', '2026-08-05 18:16:47'),
(31, 'ABHYUDAY-Stall Trading', '', '/BSchool/uploads/gallery/69d36583b1cb9_1775461763.jpg', 'Campus', 1, 1, '2026-04-06 07:49:23', '2026-08-05 18:16:47'),
(32, 'ABHYUDAY-Stall Trading', '', '/BSchool/uploads/gallery/69d365ae07e7f_1775461806.jpg', 'Campus', 1, 1, '2026-04-06 07:50:06', '2026-08-05 18:16:47'),
(33, 'FACULTY DEVELOPMENT PROGRAM', 'Day 1: Innovative Teaching and Pedagogy', '/BSchool/uploads/gallery/69d36652d2a26_1775461970.jpg', 'Campus', 1, 1, '2026-04-06 07:52:50', '2026-08-05 18:16:47'),
(34, 'FACULTY DEVELOPMENT PROGRAM', 'Day 1: Quality Assurance and NAAC Accreditation', '/BSchool/uploads/gallery/69d3668b2cb41_1775462027.jpg', 'Campus', 1, 1, '2026-04-06 07:53:47', '2026-08-05 18:16:47'),
(35, 'FACULTY DEVELOPMENT PROGRAM', 'Day 2: AI in Teaching and Research', '/BSchool/uploads/gallery/69d366c61f9fd_1775462086.jpg', 'Campus', 1, 1, '2026-04-06 07:54:46', '2026-08-05 18:16:47'),
(36, 'FACULTY DEVELOPMENT PROGRAM', 'Day 2: Fundamentals of Analytical Tools for Teaching and Research', '/BSchool/uploads/gallery/69d3671841ed5_1775462168.jpg', 'Campus', 1, 1, '2026-04-06 07:56:08', '2026-08-05 18:16:47'),
(37, 'FACULTY DEVELOPMENT PROGRAM', 'Day 3: Research Methods, Research Writing  and Journals Publication and Research Ethics', '/BSchool/uploads/gallery/69d3679871ead_1775462296.jpg', 'Campus', 1, 1, '2026-04-06 07:58:16', '2026-08-05 18:16:47'),
(38, 'FACULTY DEVELOPMENT PROGRAM', 'Certification Distribution', '/BSchool/uploads/gallery/69d367c69e732_1775462342.jpg', 'Campus', 1, 1, '2026-04-06 07:59:02', '2026-08-05 18:16:47'),
(39, 'Consumer Awareness Program', '– Road Safety Awareness Drive', '/BSchool/uploads/gallery/69d3689152482_1775462545.jpeg', 'General', 1, 1, '2026-04-06 08:02:25', '2026-08-05 18:16:47'),
(40, 'Youth Day', 'Emphasizing the role of youth in nation-building and personal excellence', '/BSchool/uploads/gallery/69d3692735b0a_1775462695.jpeg', 'Campus', 1, 1, '2026-04-06 08:04:55', '2026-08-05 18:16:47'),
(41, 'Youth Day', 'As part of the celebration, meritorious students from the MBA and MCA programs were honored for their outstanding academic performance', '/BSchool/uploads/gallery/69d3695959453_1775462745.jpeg', 'Students', 1, 1, '2026-04-06 08:05:45', '2026-08-05 18:16:47'),
(42, 'From Idea to Impact: The Journey of Entrepreneur', 'Mr. Sagar Mallu, Founder & CEO of BeyondBrain Business Solutions Pvt. Ltd., delivered an expert lecture to provide practical exposure to entrepreneurship and bridge the gap between theory and real-world business practices.', '/BSchool/uploads/gallery/69d36a11de6b3_1775462929.jpeg', 'Campus', 1, 1, '2026-04-06 08:08:49', '2026-08-05 18:16:47'),
(43, 'VIMUKTHI', '– A Step Towards a Drug-Free Mysuru', '/BSchool/uploads/gallery/69d36ad1c84e6_1775463121.jpeg', 'Campus', 1, 1, '2026-04-06 08:12:01', '2026-08-05 18:16:47'),
(44, 'Visit to Adavi', 'Honey manufacturing unit, B R Hills', '/BSchool/uploads/gallery/69d4c166e9f47_1775550822.jpeg', 'Campus', 1, 1, '2026-04-07 08:33:42', '2026-08-05 18:16:47'),
(45, 'Cleanliness drive at the foothills of the B R Temple', '', '/BSchool/uploads/gallery/69d4c1c984ede_1775550921.jpeg', 'General', 1, 1, '2026-04-07 08:35:21', '2026-08-05 18:16:47'),
(46, 'Digital Transformation at B R Hills', 'Villagers’ Interaction by ISR Committee', '/BSchool/uploads/gallery/69d4c20ed37d8_1775550990.jpeg', 'General', 1, 1, '2026-04-07 08:36:30', '2026-08-05 18:16:47'),
(47, 'Visit to K Gudi', 'Student Recreation and Learning Experience', '/BSchool/uploads/gallery/69d4c24bc8d7e_1775551051.jpeg', 'General', 1, 1, '2026-04-07 08:37:31', '2026-08-05 18:16:47'),
(48, 'Kaveri back water clean up drive', 'The Institutional Social Responsibility (ISR) Committee organized a Clean-Up Drive at the Venugopalaswamy Temple, located on the banks of the River Cauvery in Mandya, with the objective of promoting environmental conservation, cleanliness, and social responsibility.\r\n\r\nThe drive witnessed active participation from students, faculty members, and volunteers, who joined hands to clean the temple premises and the surrounding riverbank. Equipped with gloves and waste collection bags, the participants collected plastic waste, paper, bottles, and other litter, ensuring proper segregation and disposal of the collected waste.\r\n\r\nThe initiative also focused on creating awareness among devotees and visitors about the importance of maintaining cleanliness at religious and natural heritage sites. Participants encouraged everyone to avoid littering and adopt environmentally responsible practices.\r\n\r\nThe Clean-Up Drive concluded successfully with a renewed commitment to preserving the beauty and cleanliness of the temple surroundings and the banks of the River Cauvery. The ISR Committee appreciated the enthusiastic participation of all volunteers and reaffirmed its dedication to organizing such community service initiatives that foster environmental awareness and civic responsibility.', '/BSchool/uploads/gallery/6a6d89471a15f_1785563463.jpg', 'Events', 1, 1, '2026-08-01 05:51:03', '2026-08-05 18:16:47');

-- --------------------------------------------------------

--
-- Table structure for table `news_posts`
--

CREATE TABLE `news_posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `blog_url` varchar(500) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `category` varchar(50) DEFAULT 'General',
  `is_featured` tinyint(1) DEFAULT 0,
  `is_visible` tinyint(1) DEFAULT 0,
  `published_date` date DEFAULT NULL,
  `scraped_from_blog` tinyint(1) DEFAULT 0,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news_posts`
--

INSERT INTO `news_posts` (`id`, `title`, `content`, `blog_url`, `image_url`, `category`, `is_featured`, `is_visible`, `published_date`, `scraped_from_blog`, `created_by`, `created_at`, `updated_at`) VALUES
(6, 'FDP: Next-Gen Analytics for Academicians and Researchers', 'Parivarthana Business School (PBS), Mysuru, successfully organized a three-day Faculty Development Programme (FDP) titled “Next-Gen Analytics for Academicians and Researchers” from 5th to 7th Janu...', 'https://latestnewsandeventspbs.blogspot.com/2026/01/fdp-next-gen-analytics-for-academicians.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRW2dxJqz0VMe0G1GvHv9a0d546RbUYl2woVKkn3mi0bA0imErIEawERGk7SRaxFWgT3m1_xXz6f6_LDSPWjdHHVaNkChpWi92n4KWPnInMBDCM5D8vgnaoHL5TWUskkkBdMu1DX4FxchCD31TaMGGfj19xBQn6SfVhRIPDB28yTtPjLhatUy2EFMs7jXU/s320/WhatsApp%20Image%202026-01-08%20at%203.31.38%20PM.jpeg', 'Blog', 0, 1, '2026-03-31', 0, 1, '2026-03-31 20:36:34', '2026-03-31 20:36:34'),
(7, 'SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS', 'Special Lecture on “Aptitude and Tech Readiness – Your First Step to Placement Success”Organised by the Placement Cell, Parivarthana Business SchoolThe Placement Cell of Parivarthana Business Sc...', 'https://latestnewsandeventspbs.blogspot.com/2025/12/skillvex-founder-addresses-mba-and-mca.html', 'https://blogger.googleusercontent.com/img/a/AVvXsEj1T4tFWcL9N6gmXXNkMElLSjfDqvUaQJxgVExhyB9WO1K_MhKVnHH0rnM0MTGTCSGDmG2kv5pEQYBRK1XBpuxyBNMJ20JN8hOQsq5UKSVQ_jnAsc3GoN2LiyXHP5hTcPFaMyeQyIPReBReKghYN_WfK6oJe_OwT1XV1qUom7s4sDVcunf7aT6fzy0Ojfdy=w405-h304', 'Blog', 1, 1, '2026-03-31', 0, 1, '2026-03-31 20:39:00', '2026-04-01 05:31:45'),
(8, 'Guest Lecture on “AI in Business Automation” Organised by IIIC at Parivarthana Business School', ' Guest Lecture on “AI in Business Automation” Organised by IIIC at Parivarthana Business SchoolThe Industry Institution Interaction Cell (IIIC) of Parivarthana Business School (PBS) organised a g...', 'https://latestnewsandeventspbs.blogspot.com/2025/12/guest-lecture-on-ai-in-business.html', 'https://blogger.googleusercontent.com/img/a/AVvXsEjTF7iKrkD5wrYDUr4P7FLwrytTAvcZ-Nky2gXMlGbBKPh-512VgXc-VgjKuIgB_2rZvRv2euZsI4jZAD2pNnwcy4NNXQ8Od2vlOv4J_DkCmOE9QMaSODB6NYGrTxZfUUvBs4PWZhRp8GK7ByznzlZPv7N1If9CGtYEWfUy7b8vfw_Zx3zkqqkgqr2nZmQe=w539-h304', 'Blog', 0, 1, '2026-04-01', 0, 4, '2026-04-01 14:08:11', '2026-04-01 14:43:00'),
(9, 'Anti-Ragging Committee Organises Drugs Mukta Karnataka Abhiyaana at PBS Mysuru', ' Report on DRUGS MUKTA KARNATAKA ABHIYAANA\n\nThe Anti-Ragging Committee of Parivarthana Business School (PBS), Mysuru, organised the “Drugs Mukta Karnataka Abhiyaana” awareness programme in associ...', 'https://latestnewsandeventspbs.blogspot.com/2025/12/anti-ragging-committee-organises-drugs.html', 'https://blogger.googleusercontent.com/img/a/AVvXsEg_sbvd_gOeb1XUyIMuBrdCFoXdI5afcaFUUqk_wwd_OeCgvepjnSYUgZBNzkneXa643KeLa9EJOcf3YacNW6tzzvDwB27EEgAhOKrB-mo1-6bfzOJYs8hrSgyiqrtNBKCDc4tZLDLhgH0iF17sBv9G_cPr_jpfq6rztih_G5m5vlBmKf0CAVNbbfpBcfKP=w318-h398', 'Event', 0, 1, '2026-04-02', 0, 1, '2026-04-02 16:18:46', '2026-04-02 16:19:37'),
(10, 'Bridging the Gap: Hands-on Workshop on Web App Development at PBS Campus', ' Bridging the Gap: Hands-on Workshop on Web App Development at PBS CampusThe Industry Institution Interaction Cell (IIIC) recently took a significant step toward narrowing the divide between academic...', 'https://latestnewsandeventspbs.blogspot.com/2026/04/bridging-gap-hands-on-workshop-on-web.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRzga231Tmyss1YQq5amZ3V02Md_I6hn0uNaTbeBwmUDmXyO2C_AvTuZbkbNC_5aoSsLT3TpunNssN2jiCjkpCNV8T7va0cUsgMM7taEADHy8KI1PCIh_9atyOGw_MB-FaGPboBuIgpBG-ZZ4PNn6CPJd8895YpdUkm6IfWxvsAHE1M8J1KivOOhVTVsKC/w670-h374/WhatsApp%20Image%202026-04-02%20at%209.55.08%20PM%20(1).jpeg', 'Blog', 1, 1, '2026-04-02', 0, 1, '2026-04-02 16:31:07', '2026-04-03 13:39:32'),
(11, 'VIMUKTHI” Awareness Programme Held at Parivarthana Business School', 'Parivarthana Business School (PBS) organised an anti-drug awareness programme titled “VIMUKTHI – A Step Towards a Drug-Free Mysuru” today at 12:00 PM on the PBS Campus. ', 'https://latestnewsandeventspbs.blogspot.com/2026/04/vimukthi-step-towards-drug-free-mysuru.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTgFYlCdO_Rl9PjnMkZRnXuYSA8tmCPsU9fCqzVB6bAwEsIxT5cxDSuR12-KQ-CdzRJ9a88hP0hTOSZotS8RAUksJfwudWWuqnQms2KIgo-CtIduP1wMEI49KC7156xrLG9f3s1bYd1YK3XCpPiWKj1yRaBIsUc27du_CTUgPTlviFMh7kMdCHR9d4Uw8L/w489-h275/WhatsApp%20Image%202026-04-06%20at%2012.52.34.jpeg', 'Blog', 0, 1, '2026-04-06', 0, 1, '2026-04-06 08:44:33', '2026-04-08 10:48:01'),
(14, 'Cleanliness drive at the foothills of the B R Temple', 'The ISR Committee of Parivarthana Business School organized a cleanliness drive at the foothills of the B R Temple as part of its commitment to social and environmental responsibility. MBA and MCA students actively participated in the drive, aiming to promote cleanliness, environmental awareness, and responsible behavior among visitors and the local community.', 'https://latestnewsandeventspbs.blogspot.com/2026/04/cleanliness-drive-at-foothills-of-b-r.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnFDlFq6WueuBwPoSUhPLzghBBlSkjJx9K0IjqXQ3_vqb_gVJcQvy0JzxB3kuQ5RQPbZL4-g0e-iKn3kwkYXw3YhNDYHbWvCPm5Q63LSqw_yNW6npCQJt9WKKezM_Ihdyg2ELhVPDFCftbVn7ew35SzPmWaUQ4XqFs74allws2ZYOZS-95fLPvzUUea2ZT/s1280/WhatsApp%20Image%202026-04-06%20at%2016.53.01.jpeg', 'General', 0, 1, '2026-04-08', 0, 1, '2026-04-08 10:44:37', '2026-04-08 10:44:37'),
(15, ' Visit to K Gudi – Student Recreation and Learning Experience', 'As part of the B R Hills visit, students also visited K Gudi, where they enjoyed a refreshing recreational experience amidst nature. The...', 'https://latestnewsandeventspbs.blogspot.com/2026/04/to-k-gudi-student-recreation-and.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1Y41mybvyh5B0rbM-K1VVHQfn6SCPwbgMqa-FnvJpAPEcbZWt3sfJtStbqzi1sIGL3GdQ8qOyzs46DFQEMiYFXar4NitXytjRTD3FT8saZZcX7kBKA0j_paoegxd6kNlFd0nrE1hI31uWPetYlQ02UFq42FLTc59wm1BnpagYBhyphenhyphenPGXJmeEZWQTR2ws-X/s1280/WhatsApp%20Image%202026-04-06%20at%2016.53.03.jpeg', 'Blog', 0, 1, '2026-04-08', 0, 1, '2026-04-08 11:00:23', '2026-04-08 11:00:23'),
(16, 'Digital Transformation at B R Hills', 'he ISR Committee of Parivarthana Business School organized an interaction program at B R Hills aimed at understanding and promoting digital transformation among the local villagers. The program focused on creating awareness about the use of digital technologies such as smartphones, digital payments, online government services, mobile banking, and access to information for education and healthcare.', 'https://latestnewsandeventspbs.blogspot.com/2026/04/digital-transformation-at-b-r-hills-isr.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfbhKQzBA9GTTEwXVAIOAanYozaGUOPQ2cMCY-t8-rKOLDJ1N-Sdg2CWQKSKsi40uj-iocUfT9okb6fy-rBLDNzLirC_0apaZcRZr0IHyV0aYDMw7u5c4Fw2jXdK5BoY_3ul7sKwaVI6MbBtPuEKmSlfKysqmH56SkoELIIPDK7fFySEf9Wqp15gqHWdzq/s960/WhatsApp%20Image%202026-04-06%20at%2016.53.00.jpeg', 'Blog', 0, 1, '2026-04-08', 0, 1, '2026-04-08 11:04:47', '2026-04-08 11:04:47'),
(17, 'Industrial visit to Adavi : Honey manufacturing unit', 'The ISR Committee of Parivarthana Business School organized an industrial visit to the Adavi Honey Manufacturing Unit at B R Hills for MBA and MCA students with the objective of providing practical exposure and promoting awareness about tribal entrepreneurship and sustainable business practices.', 'https://latestnewsandeventspbs.blogspot.com/2026/04/report-on-industrial-visit-to-adavi.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil04tQB2QQaou3VpVRgsku0YB1by_O4Cml2BV78f49eaXxbylRnLRtP2OQiALJQinTW8OXFs80tHpkKuENN7rkm7J2feyVq2sAqObampF3ImFF96ROEIlry9o2eKJc0dB7hWaQL2k2bgu0eeGHxCmA8_G-0G27oBtIHbzo9WDmL0AMgZ6lsp4Ha5v0nIME/s1600/WhatsApp%20Image%202026-04-06%20at%2016.52.59.jpeg', 'Blog', 0, 1, '2026-04-08', 0, 1, '2026-04-08 11:08:49', '2026-04-08 11:08:49'),
(18, 'Abhyuday-2k26', 'Abhyuday 2025–26, themed “The Entrepreneurial Spark of Parivarthana,” was a dynamic event held on 8th February 2026 at Parivarthana Business School. Designed to promote experiential learning, the event brought together 16 student teams who managed business stalls across food, retail, and entertainment categories.', 'https://latestnewsandeventspbs.blogspot.com/2026/04/igniting-entrepreneurial-spirit.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM5znWreWlrhY51y1Vbbc6YZmmYBjRHMkkXF5QcrcxYPEYwddPS9-PPaT98fDrV4M6FAYuFFTqTLCdGfrCSm96QXMU8LvbwcVHgYNOVcVh7MnyWHfxpVVACD-rc25BdDJ1T9N2IO1LvYvzFNB_f5eD8S4iLaX6NSIC0MG1-NVBkh8DOo8YFlYFvIGiKLAD/s6000/A2.JPG', 'Blog', 0, 1, '2026-04-08', 0, 1, '2026-04-08 11:16:00', '2026-04-08 11:16:00'),
(19, ' Earth Day Celebration ', 'Parivarthana Business School, under the aegis of Oom Shreenikethana Trust, organized Earth Day Celebration on 22nd April 2026 through the ISR Committee with the theme “Our ...', 'https://latestnewsandeventspbs.blogspot.com/2026/05/earth-day-celebration-parivarthana.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDV6BWinM0y4pDzIGYZGVsiJC62AxWLVe72MRiAEF_FFUWuGfjKrYYueARZBWVpR1DbmhRar0_3uUkmnaoycBfYr5hv-7U1HkF5fpvvSMtuTFMIU6kuFeZUYoqZm5uDl0IYbiuzb4hPMwH_BFjHN9oU7UNG5gnT1op1j9hrz7zBJtVBQMinpOf7c_iuF7w/w496-h378/WhatsApp%20Image%202026-04-22%20at%2017.40.40.jpeg', 'Blog', 0, 1, '2026-05-06', 0, 1, '2026-05-06 09:51:47', '2026-05-06 09:51:47'),
(20, 'World Book Day', 'Report on World Book DayThe Library Committee of Parivarthana Business School, Mysore organized a book display in the college library to mark the occasion of World Book and Copyright Day.A variety of ...', 'https://latestnewsandeventspbs.blogspot.com/2026/05/report-on-world-book-day-library.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVR8vBy3CudNjgQF8hh38ddnKGOCy6k5E-f_VfUc-sIT4YUo_4XCbiMROpUUmyTkVDKu3j6sGzPdl-LCGFYZA4DhWMhnsfXf1RWlvovb7SPVztONRC-ccDeskHnXha-OIaur_srxcAEy1TgdUX5eR81JE7AHxkvy3KfEV83DFcX1DzWYOOpVcmNnMvGRK5/w473-h266/WhatsApp%20Image%202026-04-24%20at%2011.02.53.jpeg', 'Blog', 0, 1, '2026-05-06', 0, 1, '2026-05-06 10:04:10', '2026-05-06 10:04:10'),
(21, 'Placements', ' CongratulationsParivarthana Business School proudly congratulates Mr. Fleming Dsouza, Ms. Manupriya S, Mr. Keshava Murthy A, and Mr. Dhanush S on their successful placement at Kaynes Technology Indi...', 'https://latestnewsandeventspbs.blogspot.com/2026/05/congratulations-parivarthana-business.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP4HJKhEpG1Iq5ZqaDF-IalqcgVetuwjya6XHCej3GL3-xiIIAesCCThu4XJXXfx-yL_XpHjMRj4Dc4BfrURLzJKDcdZUofRJBZVKSE48KxJCr7krkXTwITwnpWY0VHK6b9w_XkfPIiTmhklJ6fiNVN9pFNLJEtacGjS0F0rV7ZQbFDCBbrS5IkxEKxoA5/w413-h380/WhatsApp%20Image%202026-04-23%20at%2012.24.36.jpeg', 'Blog', 0, 1, '2026-05-06', 0, 1, '2026-05-06 10:04:53', '2026-05-06 10:04:53'),
(22, 'Congratulations', 'Parivarthana Business School proudly congratulates Ms. Vaishnavi Patil on her successful placement at Material Depot as an Experience Centre Advisor with a package of 6 LPA.', 'https://latestnewsandeventspbs.blogspot.com/2026/05/parivarthana-business-school-proudly.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXBEhI13CwmFRQCPFDoN3AT6fpHnOSxmljSaxotM9mMwB7qsyKYaz_VSf6H2WM3pA1QMhVWjrVOxpGTVetweK5ZAhdNf8KggaEEkXoY8uNQKnEcFkSxFkj-1bCT-qx8yrccDZIB6u8QLX_5_32PHaOuOi1LYxGd50vPQSxoHhAxlzGY2MKejpIUbbCvxh2/w450-h384/WhatsApp%20Image%202026-04-27%20at%2010.21.54%20(1).jpeg', 'General', 0, 0, '2026-05-06', 0, 1, '2026-05-06 10:10:53', '2026-07-18 05:52:21'),
(23, 'Congratulations', 'Parivarthana Business School proudly congratulates Ms. Kavana H M and Ms. Rakshitha K on their successful placement at Material Depot as Experience Centre Advisors with a package of 6 LPA.', 'https://latestnewsandeventspbs.blogspot.com/2026/05/parivarthana-business-school-proudly_6.html', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiARd93KLwHgLYg-W-_UDlw_8raB7Wcopzp95vAAihYuSFKQWT_WipegQQI0lxyn6ObcdnAvMGPh5fYAfDOKo235dOdoByWgZuMpkEvmE2DxzGMRDL8oLsqu1EbQy92IcJqNM_6Cz0LlV6rLhlKyRK4apHn9FxQwGBDg6vWQ1IQVsGZxHN1ZH1MYqU45_Wa/w332-h429/WhatsApp%20Image%202026-05-05%20at%2017.04.44.jpeg', 'Blog', 0, 0, '2026-05-06', 0, 1, '2026-05-06 10:24:28', '2026-07-18 05:52:19'),
(24, 'SkillVex Founder Addresses MBA and MCA Students on Placement Readiness at PBS', 'Special Lecture on “Aptitude and Tech Readiness – Your First Step to Placement Success”Organised by the Placement Cell, Parivarthana Business SchoolThe Placement Cell of Parivarthana Business Sc...', 'https://latestnewsandeventspbs.blogspot.com/2025/12/skillvex-founder-addresses-mba-and-mca.html', '', 'Blog', 0, 1, '2026-08-01', 0, 1, '2026-08-01 05:56:10', '2026-08-01 05:56:10');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `session_token` varchar(255) NOT NULL,
  `expires_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `session_token`, `expires_at`, `created_at`) VALUES
(1, 1, 'ebfab9f5f61a7b05388f387366f769d5bd1ae33357ae01dd678c6a812cdf85bf', '2026-04-01 02:54:52', '2026-03-30 19:54:52'),
(2, 1, 'ce257c19233575b4b1a844b16b641f9cb94a741a4fcce509d8009bd50d35d9d3', '2026-04-01 02:54:54', '2026-03-30 19:54:54'),
(3, 1, '52247674f0acd04681840edbbcf905878b3fbc73ba156040a3d204fc25601313', '2026-04-01 02:54:58', '2026-03-30 19:54:58'),
(4, 1, '30c189a47b086e1547ec3ef1c08b24dfc081b0c407ef3de6291dce726ae2b08d', '2026-04-01 02:55:21', '2026-03-30 19:55:21'),
(5, 1, 'e9b92be1919d4e44e6a5af7efb626efb51f353b50451c5c1fc460cab84d4e483', '2026-04-01 02:58:42', '2026-03-30 19:58:42'),
(6, 1, '94e4803e4a4b337c91f9bec6a843621c552cb102d78cfeb26821e243cb9f3319', '2026-04-01 02:58:43', '2026-03-30 19:58:43'),
(7, 1, '98c6d9af6505a9652bf9345b28cb46ba5ed06d403b2c070561c9aded4fc1a42e', '2026-04-01 02:58:44', '2026-03-30 19:58:44'),
(8, 1, '024a4df9b59ae528804569185d0fc1b2b9375534ac6f8553349846a5f8a8a666', '2026-04-01 03:02:01', '2026-03-30 20:02:01'),
(9, 1, '771b52eadef532087389331380ad37ff20f82671898edf7508437bf2dd331aee', '2026-04-01 03:02:13', '2026-03-30 20:02:13'),
(10, 1, 'f019de3599ae2bd16cdb9fc94d5aec6e26e659ab02ba9c913b4080a0ca75e389', '2026-04-01 03:03:37', '2026-03-30 20:03:37'),
(11, 1, 'a4a740f583cc7711e64842970463f882e37fb184c147621aff315ac9312c7e9d', '2026-04-01 03:05:24', '2026-03-30 20:05:24'),
(12, 1, 'b52225f531ee8028d7ee97c5e6be8b1635838dd90070b1f8a4c3b9328f93d84a', '2026-04-01 03:05:30', '2026-03-30 20:05:30'),
(13, 1, 'b0d4c92c0c53acbce7d39ae9379bd52f74157245723f5999abe532d4215a38e2', '2026-04-01 03:05:59', '2026-03-30 20:05:59'),
(14, 1, 'b48ac4b4412d2b7f8158cbe183caae3c090e8d2fc97039e8061e3f6bca368366', '2026-04-01 03:07:25', '2026-03-30 20:07:25'),
(15, 4, '4a53c5f669474580096c26398d4beb3863755a9b81818dd9d9f1a60ab5967ccb', '2026-04-01 03:14:16', '2026-03-30 20:14:16'),
(16, 1, 'f09464ed3ea38668d927afe93ac4e287a39c11e1e7ee15b70ed687cf84bf27fa', '2026-04-01 03:24:13', '2026-03-30 20:24:13'),
(17, 4, '7063ed9ab6bc10cdbcc6b43faf15aee7030907787ce30c6f00d0f62a0da92d5a', '2026-04-01 03:24:25', '2026-03-30 20:24:25'),
(18, 1, '660633b6d60a398332ff3902aa9c2966126dc56076b84473e2e35c228335a298', '2026-04-01 03:39:07', '2026-03-30 20:39:07'),
(19, 1, 'dfece8a90ce2ad21d490a9d5ac5a2a1781b298394a322d2244e7c65114baedd0', '2026-04-01 03:49:33', '2026-03-30 20:49:33'),
(20, 1, '02053ce926a752ca6dd8314e4b38c95d97fc20cb384b7437ce8586c1042e98f6', '2026-04-01 10:28:07', '2026-03-31 03:28:07'),
(21, 1, '02491942f0ab73241be56562c265b879659c4943421b8938e710fd48c8b26100', '2026-04-01 10:57:48', '2026-03-31 03:57:48'),
(22, 1, 'bcdb9f0a4211636f4cccd8481039841c80c952dfbc453aa19cbc6125e4c08561', '2026-04-01 11:17:20', '2026-03-31 04:17:20'),
(23, 1, '51ebe15c519b070fee60f75359d008f5ae78fc2c37603335194c1564fde376e3', '2026-04-01 11:17:56', '2026-03-31 04:17:56'),
(24, 1, 'a216c8658a506ffe09bba3cc9f4bd29c50318d7539cb30fd2554a56777288e38', '2026-04-01 11:20:25', '2026-03-31 04:20:25'),
(25, 1, '9800f9d431641d86032e4423a96d78498f5213b16f6a9f512f4670e530155b81', '2026-04-01 11:22:53', '2026-03-31 04:22:53'),
(26, 1, 'a4492c3cef2820458a6b6fef8195f802bb479f4ef09489dd4d2a5513e1246bab', '2026-04-01 11:26:28', '2026-03-31 04:26:28'),
(27, 1, '6c59379a3b681558d75007277fab1f6dbcac9d5c5055b8164e36853523b230ae', '2026-04-01 13:59:34', '2026-03-31 06:59:34'),
(28, 1, 'b66b2dc70531a406d315c8f6a9ea29ff833f7e88fb55757c75a999af2742b6d8', '2026-04-01 13:59:41', '2026-03-31 06:59:41'),
(29, 1, 'c27745e56c619e6e712884078d7757fa766cbed43e0ff70634f3616b90c5e2f6', '2026-04-01 13:59:43', '2026-03-31 06:59:43'),
(30, 1, 'fa4413c55332e46b5286d327243184f7240179e6e1b187b2b8439f1acf15e22e', '2026-04-01 14:08:04', '2026-03-31 07:08:04'),
(31, 1, 'f6d57dc0e2ac3f01040f7749fce7002832f82956dfc09e25f98c9b22c35164cd', '2026-04-01 15:12:59', '2026-03-31 08:12:59'),
(32, 1, '77ebfeaeda7693922551fc3e4fcf4783255ec6a80a98eff1971040cf92383227', '2026-04-01 16:15:49', '2026-03-31 09:15:49'),
(33, 1, '131352ac445102cc6f94dfe5fedd099d58ba7cfffc93974e9e41a3a98ad76a1b', '2026-04-01 16:16:06', '2026-03-31 09:16:06'),
(34, 1, 'a28299eb3e65c1effdb34dd8e09daa145735ac4a2751fe21fc962891ab6ba4ec', '2026-04-01 16:16:11', '2026-03-31 09:16:11'),
(35, 4, '0938f8c478175e600772e131732c7dec24a8b952e14cb921b883110fef4bf93c', '2026-04-01 16:34:22', '2026-03-31 09:34:22'),
(36, 1, '41217e69b2c7c1273406a667771b650e88805b79c1f6fd50706ddb93d086e05d', '2026-04-01 16:34:49', '2026-03-31 09:34:49'),
(37, 1, '06908eb40d21544dc64d2831eb30a869218066240ff3d70ba7c4965eeacfd015', '2026-04-01 16:34:52', '2026-03-31 09:34:52'),
(38, 1, '606731a791f0db0e7cb044ded39b55c91005bc7e8dfc3c55fefe146b32b66da1', '2026-04-01 16:34:52', '2026-03-31 09:34:52'),
(39, 1, 'c56851827bb5b1566c8b82fd3b73d737b731f4a0097b5a9a493ddf33a2797b7d', '2026-04-01 16:35:13', '2026-03-31 09:35:13'),
(40, 1, 'dbcf75262aaba87c7c43fd5614f178edb5baec86ae743067a449501c1a005504', '2026-04-01 16:48:27', '2026-03-31 09:48:27'),
(41, 1, 'cee380a8e2b39e1ada4f44d965bb33a092d2264cb1f51a6acf434bd2a98036ef', '2026-04-01 16:51:06', '2026-03-31 09:51:06'),
(42, 1, '61bf9b142dab51ce729749b381b15730c0c84552bca8ed5bfba4109eaa6f0470', '2026-04-01 22:00:21', '2026-03-31 15:00:21'),
(43, 1, '78ca5097013985756a9a4490e0c27b19ff831201db896bed920fd17376b343f3', '2026-04-01 22:00:34', '2026-03-31 15:00:34'),
(44, 1, '31c1dffc0bd36e8ebd2aa7a644083e91bf4b2d631e9735c9dea181531886dcb6', '2026-04-01 22:00:35', '2026-03-31 15:00:35'),
(45, 1, '6a910638b32c80dc49977646cdbc8781e6692eb422ea814492bf0d20435ea58a', '2026-04-01 22:00:36', '2026-03-31 15:00:36'),
(46, 1, 'c310bd2d0e8b43f43f57660d02552826460551490b286669ba77eb3386228164', '2026-04-01 22:00:44', '2026-03-31 15:00:44'),
(47, 1, 'c0bc4cd5d902251f10e98eb42523559701cf5bd48d20fe25749b2bd5b484f179', '2026-04-01 22:00:44', '2026-03-31 15:00:44'),
(48, 1, '09db0015dcd99e0dc021050d4a04c025ebd7ba8fbc1ab5c65b67d5185c4eacb1', '2026-04-01 22:00:44', '2026-03-31 15:00:44'),
(49, 1, '7d573214d15c2e794ca84912d7eb237d23aca9862a7a5b89ff45f10521d08f0e', '2026-04-01 22:00:45', '2026-03-31 15:00:45'),
(50, 1, 'f8f77351633a2a8aa34699e572d34cd98d895d90ce79afa977e8274c5f57a496', '2026-04-01 22:00:45', '2026-03-31 15:00:45'),
(51, 1, 'd98c147eb90318616abbfa6ec596bceb66b843d74daf32273f4413a10e7d6cca', '2026-04-01 22:06:16', '2026-03-31 15:06:16'),
(52, 1, 'b09cccf0322c68f000ef1d6d76b45b14a00935afd82ae02a48551d147e889fbd', '2026-04-01 22:07:30', '2026-03-31 15:07:30'),
(53, 1, 'aa77095afc7dfb2e08409a73fa3e448309625d47bc0863b29e7313f5531acb9c', '2026-04-01 22:10:14', '2026-03-31 15:10:14'),
(54, 1, '653824122d3e9951f633166178e159927d453d5deb3ee4b899debcc2286ab759', '2026-04-02 01:24:47', '2026-03-31 18:24:47'),
(55, 1, '5e62401226ae2181690e72c5869382bd8a80e0b8982a95b3a86899e00021a710', '2026-04-02 01:26:09', '2026-03-31 18:26:09'),
(60, 1, '1b869606ca42c9f71ef1df4016b0547182c4d5e1edec3c9e75ed88633339a0d7', '2026-04-02 03:35:38', '2026-03-31 20:35:38'),
(61, 1, 'd94634dfc35f3470387f6ed97db56a6783b6404a582fd000f6fc0c513210446c', '2026-04-02 03:49:20', '2026-03-31 20:49:20'),
(62, 4, 'd7795a4add098f86a891828c2c20304099b5a5459fddaaca4d285d3aa797e059', '2026-04-02 03:54:05', '2026-03-31 20:54:05'),
(63, 1, '3b9d058b04cf688c5dab862566f436906a0fb87fee685b6992e6f3ed98d049ae', '2026-04-02 12:22:13', '2026-04-01 05:22:13'),
(65, 1, '872d97cea9ec6dfac0ffe5f009a3e2a90b267d937280de4a1a8b77596ba9c310', '2026-04-02 20:56:02', '2026-04-01 13:56:02'),
(67, 4, 'ceb34abd13a23b5ecf784ed36c8e4518529a2408e7d417ffc1ebd2c204755183', '2026-04-02 21:15:59', '2026-04-01 14:16:00'),
(73, 1, 'c3454d3d55cfe3b4b12fba18d7761307838823d986e41be46cff374ed963cb51', '2026-04-03 13:34:48', '2026-04-02 06:34:48'),
(75, 4, 'ce73f95527f8a59dde79386f4736da96b6293289f24fdc8ae051147b441adcc0', '2026-04-03 16:50:47', '2026-04-02 09:50:47'),
(76, 1, 'e17ba26ed7cf74ac9558a6f42b6feb6ad11d8f5c08600c4704ae6c878cf801e0', '2026-04-03 21:00:48', '2026-04-02 14:00:48'),
(77, 1, 'abcdf9acda5b8aa6c479d44344701746163a77c45003df700447d06c6454153b', '2026-04-03 21:19:03', '2026-04-02 14:19:03'),
(78, 4, 'be37e665b663c2da251d9e7f366c04733dc152b480f17eb56c527518b6018730', '2026-04-03 22:34:27', '2026-04-02 15:34:27'),
(79, 1, '8b1e0a3d55bdd6b0948665e9017228f49cb86eafba5d7ff6eda8d703c6a3eb49', '2026-04-03 23:17:44', '2026-04-02 16:17:44'),
(81, 4, 'd96be6e26f4b54f0bdf4acb1daac9836d8df1d73a4f8ecff316c491202e10f85', '2026-04-05 10:59:07', '2026-04-04 03:59:07'),
(82, 1, '5bae1126246a21964f6448ad9152b0a5059bdb635abb1d196275ac346fcdfa4e', '2026-04-05 12:13:01', '2026-04-04 05:13:01'),
(83, 1, '5d786a6d5bd7530e4ddb0199c8ef7cc937e4fb535fc5bbf6a90c6ec289f8251f', '2026-04-05 21:23:33', '2026-04-04 14:23:33'),
(84, 1, 'e229f3bea95dec66caa2d642cbf673ee68bc1baff66d431b0a8a4ccc5d34d226', '2026-04-07 14:14:57', '2026-04-06 07:14:57'),
(85, 1, '72cca094d48cf05577b3808917257273456eeff8af5620b57b0cd659ff6f88a1', '2026-04-08 15:28:10', '2026-04-07 08:28:10'),
(86, 1, '820cb399fa864537d47a6934cb03aaef00c33819b81ca46651db7bbe405d8ed0', '2026-04-09 17:24:37', '2026-04-08 10:24:37'),
(89, 1, 'e2559a47d4b6d5a0b51cee8f93e034e4ee821769c7bd0d6a150c306d5e70a6c6', '2026-04-30 12:53:49', '2026-04-29 05:53:49'),
(90, 1, '407b56dcbdd9e8e8c2d1f493d96d0e61cd76a1f60bdb1b2a046d0693227f64c2', '2026-05-07 16:50:57', '2026-05-06 09:50:57'),
(91, 1, 'a0385f38bac2179686b1349ac7bbe36264f69516280b0d6427e4efcabcd1fd79', '2026-05-28 11:48:17', '2026-05-27 04:48:17'),
(92, 1, '80cdfe9ce93ed71603297c1b68988716e38a26503674a6cb734082aaa62c6d5f', '2026-05-28 12:02:32', '2026-05-27 05:02:32'),
(94, 1, '4726e2278fde724ea93fba6d63ca7fc247832eb979d3d0c4084cd849240cf854', '2026-07-19 13:21:00', '2026-07-18 06:21:00'),
(96, 1, 'cfb19d14ee73d7bc276032365e0e7f953553e155a0a533bd57ccbe7ae58b86a1', '2026-07-22 12:07:48', '2026-07-21 05:07:48'),
(97, 1, '6a00acc1495a4fb3857d618dda9a8fb1c698775e02e153609b7659cbec426271', '2026-07-26 10:59:18', '2026-07-25 03:59:18'),
(98, 1, '6f132cb2a0adfbae55bf6b2f413c91a972daca01caaab56a4348153db40c5c61', '2026-07-26 11:04:43', '2026-07-25 04:04:43'),
(100, 1, '0d368db6cbc3c6afa2d2bad99d7a8dd5b4aed0f310cf209cac8e1c27ca041688', '2026-07-28 12:51:35', '2026-07-27 05:51:35'),
(101, 1, '019d20278cc5d2cf6027d6ff9cda553d056e7c33dcdd559fdd85b4d3485ee6c6', '2026-07-30 17:49:10', '2026-07-29 10:49:10'),
(102, 1, 'd92087b98bea448c423fe20a2b66cd6e197ec6f097278229d8a765aa38dda2f0', '2026-07-30 22:35:19', '2026-07-29 15:35:19'),
(103, 1, '852f449e4fe00461803d93ac0349416a089e60e240a8f218a393ce9086b4fb3a', '2026-07-30 23:52:27', '2026-07-29 16:52:27'),
(104, 1, '0af71a7e46d93e8d5d158840e892f03cba63caa8f13687da5ed6b360055cfdf7', '2026-07-31 00:08:36', '2026-07-29 17:08:36'),
(105, 1, 'af0572b03aadfd3e7b3925c059b5faf2295ca0414fd2c2f7ea778ee3af5b7359', '2026-07-31 16:37:50', '2026-07-30 09:37:50'),
(106, 1, '4271213d3161eee46409985e82456c41d654233c870061c8d152e739a4647e51', '2026-07-31 19:01:05', '2026-07-30 12:01:05'),
(107, 1, '4fef1c32db59153086d473358d284866034df6e029ba19e58d1a5399d6248577', '2026-07-31 19:08:08', '2026-07-30 12:08:08'),
(108, 1, '442b4bac10c44782d277631a84f10b9085f5ccc9aaabe8257ce55c04a36c181d', '2026-08-02 11:58:12', '2026-08-01 04:58:12'),
(109, 1, '49f10b410aa9581bcfedc04e9412a4cbdd21d5ed2638f7bb6f673f497f6e97df', '2026-08-02 12:06:42', '2026-08-01 05:06:42'),
(110, 1, '1e6d05a247eda52b98767b928d9229cfadf4005c2d071f56406835357147ab88', '2026-08-02 12:24:38', '2026-08-01 05:24:38'),
(111, 1, 'e51fd73534e552c0ccad0cfee4940b30ddbc7e9f9ff68c0ed104896fe3cf6475', '2026-08-02 12:29:14', '2026-08-01 05:29:14'),
(112, 1, 'f5fa95c13d8e06271e8296411e54096f44b945d0712a3a1bb9c819369b8169c6', '2026-08-02 12:55:35', '2026-08-01 05:55:35'),
(114, 1, 'd6e9a887803453f748d476ffea5f5d6fe9f3b7a187c92c491fd2e05567ff2685', '2026-08-09 12:52:58', '2026-08-08 05:52:58'),
(115, 1, '29990411db783ec2d8c6669b6eb1df19fcb85f1dbe6a9e045540bfc9f28c1bc7', '2026-08-09 12:52:59', '2026-08-08 05:52:59'),
(116, 1, '2249bf5dd58cfddb4c96fb1d93b50d95b8ddcfa3f53bf1a07ee5ce4dbee48f51', '2026-08-09 12:53:03', '2026-08-08 05:53:03'),
(117, 1, '72abb98f50560300494c270ce953c176490ba9a8984acd184db56685ac6322fe', '2026-08-09 12:53:04', '2026-08-08 05:53:04'),
(118, 1, '954b0ed386e2039910281eb74e9274e4912aa5b6e77c398df36c3a6429e444a0', '2026-08-09 12:53:04', '2026-08-08 05:53:04'),
(119, 1, '69f4e2f19d0f09b62cde8a8bbd39766b4e755a444f45e2260b6f33732c56efac', '2026-08-09 12:54:26', '2026-08-08 05:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `student_achievers`
--

CREATE TABLE `student_achievers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `achievement` varchar(255) NOT NULL,
  `category` enum('Academic','Sports','Cultural','Technical','Social Service','Leadership') NOT NULL,
  `year` varchar(10) NOT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student_achievers`
--

INSERT INTO `student_achievers` (`id`, `name`, `achievement`, `category`, `year`, `image_url`, `description`, `is_active`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Rahul Sharma', 'University Gold Medalist', 'Academic', '2024', NULL, 'Secured first rank in MBA program with exceptional academic performance.', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(2, 'Priya Patel', 'National Level Basketball Champion', 'Sports', '2024', NULL, 'Led the college team to victory at the National Inter-University Basketball Championship.', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(3, 'Amit Kumar', 'Best Cultural Ambassador', 'Cultural', '2024', NULL, 'Recognized for outstanding contribution to cultural activities and events.', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(4, 'Sneha Reddy', 'Hackathon Winner', 'Technical', '2024', NULL, 'First place in the State Level Coding Hackathon with innovative solution.', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(5, 'Vikram Rao', 'Community Service Excellence', 'Social Service', '2024', NULL, 'Organized multiple blood donation camps and community welfare programs.', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(6, 'Ananya Gupta', 'Student Council President', 'Leadership', '2024', NULL, 'Elected as Student Council President for exceptional leadership qualities.', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `role` enum('admin','admission_staff','staff') NOT NULL DEFAULT 'staff',
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `last_login` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password_hash`, `role`, `full_name`, `email`, `is_active`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2y$10$BvMux/e9qtRf/PkL1CNupOquPYLgP0AaqPGkFzXNHswng6NlvpR72', 'admin', 'System Administrator', 'admin@pbs.edu', 1, '2026-08-08 05:54:26', '2026-03-30 19:02:06', '2026-08-08 05:54:26'),
(2, 'admission1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admission_staff', 'Admission Officer', 'admission@pbs.edu', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(3, 'staff1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'staff', 'Content Manager', 'staff@pbs.edu', 1, NULL, '2026-03-30 19:02:06', '2026-03-30 19:02:06'),
(4, 'testadmin', '$2y$10$UQ7aeExxODrBW2TSTV.pPuRGSYzgnMRmct.fycyXu3DKHWAGYP3Oe', 'admin', 'Test Admin', 'test@pbs.edu', 1, '2026-04-04 03:59:07', '2026-03-30 20:13:58', '2026-04-04 03:59:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_entity` (`entity_type`,`entity_id`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `admission_enquiries`
--
ALTER TABLE `admission_enquiries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assigned_to` (`assigned_to`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_program_interest` (`program_interest`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `faculty_members`
--
ALTER TABLE `faculty_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `idx_program` (`program`),
  ADD KEY `idx_is_active` (`is_active`),
  ADD KEY `idx_display_order` (`display_order`);

--
-- Indexes for table `gallery_items`
--
ALTER TABLE `gallery_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uploaded_by` (`uploaded_by`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_is_active` (`is_active`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `news_posts`
--
ALTER TABLE `news_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `idx_is_visible` (`is_visible`),
  ADD KEY `idx_is_featured` (`is_featured`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_published_date` (`published_date`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `session_token` (`session_token`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `idx_session_token` (`session_token`),
  ADD KEY `idx_expires_at` (`expires_at`);

--
-- Indexes for table `student_achievers`
--
ALTER TABLE `student_achievers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_year` (`year`),
  ADD KEY `idx_is_active` (`is_active`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_role` (`role`),
  ADD KEY `idx_is_active` (`is_active`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=407;

--
-- AUTO_INCREMENT for table `admission_enquiries`
--
ALTER TABLE `admission_enquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faculty_members`
--
ALTER TABLE `faculty_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `gallery_items`
--
ALTER TABLE `gallery_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `news_posts`
--
ALTER TABLE `news_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `student_achievers`
--
ALTER TABLE `student_achievers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `admission_enquiries`
--
ALTER TABLE `admission_enquiries`
  ADD CONSTRAINT `admission_enquiries_ibfk_1` FOREIGN KEY (`assigned_to`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `faculty_members`
--
ALTER TABLE `faculty_members`
  ADD CONSTRAINT `faculty_members_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `gallery_items`
--
ALTER TABLE `gallery_items`
  ADD CONSTRAINT `gallery_items_ibfk_1` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `news_posts`
--
ALTER TABLE `news_posts`
  ADD CONSTRAINT `news_posts_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `student_achievers`
--
ALTER TABLE `student_achievers`
  ADD CONSTRAINT `student_achievers_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
