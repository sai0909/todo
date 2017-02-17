-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 17, 2017 at 08:13 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.13-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loginapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE `todo` (
  `todo_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` (`todo_id`, `user_id`, `description`) VALUES
(61, 4, 'dsad'),
(62, 4, 'dasdas'),
(63, 4, 'ddsad'),
(64, 4, 'sai'),
(65, 4, 'huiji'),
(66, 4, 'dsa'),
(67, 4, 'das'),
(68, 4, 'das'),
(69, 4, 'sa'),
(70, 4, 'dsadas'),
(71, 4, 'dsadas'),
(72, 4, 'dsadas'),
(73, 4, 'dsahja');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `u_name` varchar(20) NOT NULL,
  `u_id` varchar(11) NOT NULL,
  `u_phone` int(11) UNSIGNED NOT NULL,
  `u_address` varchar(500) NOT NULL,
  `u_pincode` int(7) NOT NULL,
  `u_verified` tinyint(1) NOT NULL,
  `u_password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `u_name`, `u_id`, `u_phone`, `u_address`, `u_pincode`, `u_verified`, `u_password`) VALUES
(1, 'saivenkat', 'sai', 987654321, 'india', 66666, 1, '5f4dcc3b5aa765d61d8327deb882cf99'),
(2, '', '', 88888888, '', 8888, 1, ''),
(3, 'a', '', 88888888, '', 8888, 1, ''),
(4, 'a', 'admin', 234234234, 'newyork', 8888, 1, 'admin'),
(5, 'a', 'admin', 234234234, 'newyork', 8888, 1, 'admin'),
(6, 'a', 'admin', 234234234, 'newyork', 8888, 1, '21232f297a57a5a743894a0e4a801fc3'),
(7, 'a', 'admin', 234234234, 'newyork', 8888, 1, '21232f297a57a5a743894a0e4a801fc3'),
(8, 'a', 'admindasda', 234234234, 'newyork', 8888, 1, '21232f297a57a5a743894a0e4a801fc3'),
(9, 'abdul', 'abdul', 987456123, 'adasd', 8888, 1, '82027888c5bb8fc395411cb6804a066c'),
(10, 'abdul', 'abdul', 23423423, 'adbul', 8888, 1, '23fd24acf42cb9226f070aeefd57c790'),
(11, 'a', 'a', 1, 'a', 8888, 1, '0cc175b9c0f1b6a831c399e269772661'),
(12, 'a', 'a', 1, 'a', 8888, 1, '0cc175b9c0f1b6a831c399e269772661'),
(13, 'a', 'a', 1, 'a', 8888, 1, '0cc175b9c0f1b6a831c399e269772661'),
(14, 'a', 'a', 1, 'a', 8888, 1, '0cc175b9c0f1b6a831c399e269772661'),
(15, 'a', 'a', 1, 'a', 8888, 1, '0cc175b9c0f1b6a831c399e269772661'),
(16, 'da', 'a', 1, '3', 8888, 1, '0cc175b9c0f1b6a831c399e269772661'),
(17, '-vivek', 'vivek', 123456, 'vivek', 8888, 1, '061a01a98f80f415b1431236b62bb10b'),
(18, '-vivek', 'vivek', 123456, 'vivek', 12345, 1, '061a01a98f80f415b1431236b62bb10b'),
(19, 'vivek', 'vivek', 123456, 'vivek', 12345, 1, '061a01a98f80f415b1431236b62bb10b');

-- --------------------------------------------------------

--
-- Table structure for table `user_new`
--

CREATE TABLE `user_new` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `username` varchar(32) NOT NULL,
  `user_password` varchar(64) NOT NULL,
  `email` varchar(32) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `code` int(11) NOT NULL,
  `phone` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_new`
--

INSERT INTO `user_new` (`user_id`, `first_name`, `last_name`, `username`, `user_password`, `email`, `dob`, `created_date`, `modified_date`, `code`, `phone`) VALUES
(4, 'sai', 'venkatesh', 'sai', '5f4dcc3b5aa765d61d8327deb882cf99', 's@gmail.com', '1997-02-02', '2017-01-17 10:38:21', NULL, 91, 9874561988),
(6, 'sai', 'venkat', 'saiuser', '5f4dcc3b5aa765d61d8327deb882cf99', 's@gmail.com', '1997-02-02', '2017-01-17 10:39:42', NULL, 91, 987456123),
(7, 'vivek', 'logu', 'vivek', '5f4dcc3b5aa765d61d8327deb882cf99', 'vlogu@fleetstudio.com', '1994-03-03', '2017-01-18 12:17:28', NULL, 91, 987456123),
(16, 'vivek', 'logu', 'viveklogu', '5f4dcc3b5aa765d61d8327deb882cf99', 'vlogu@fleetstudio.com', '1998-02-03', '2017-01-18 12:22:18', NULL, 91, 987456123),
(17, 'bala', 'vasu', 'balavasu', '5f4dcc3b5aa765d61d8327deb882cf99', 'vasu', '1887-03-04', '2017-01-18 12:44:50', NULL, 91, 36217045),
(22, 'aaa', 'aaa', 'aaa', '47bce5c74f589f4867dbd57e9ca9f808', 'aaa@aaa.com', '1994-03-21', '2017-02-14 06:11:33', NULL, 12, 789456123);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`todo_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_new`
--
ALTER TABLE `user_new`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo`
--
ALTER TABLE `todo`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `user_new`
--
ALTER TABLE `user_new`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `todo`
--
ALTER TABLE `todo`
  ADD CONSTRAINT `todo_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_new` (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
