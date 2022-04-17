/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : staff_manage

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 17/03/2022 01:14:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of login
-- ----------------------------
BEGIN;
INSERT INTO `login` VALUES (1, 'hellocc', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (2, 'helloll', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (3, 'helloqq', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (4, 'helloyy', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (5, 'cccccc', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (6, 'xxxxxx', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (7, 'lyyyly', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (8, 'llllllll', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (9, 'cxcxcx', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (10, 'ththth', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (11, 'zyzyzy', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (12, 'xnxnxn', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (13, 'xhxhxh', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (14, 'cxcccxx', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (15, 'xyxyxy', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (16, 'lqlqlq', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (17, 'xyxyxyx', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (18, 'hyhyhy', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (19, 'gwgqgq', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (20, 'ylylyl', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (21, 'dddddd', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (22, 'rrrrrr', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (23, 'wywywy', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (24, 'ynynyny', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (25, 'lllllllll', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (26, 'cxcxcsfw', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES (27, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
