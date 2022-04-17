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

 Date: 17/03/2022 01:14:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int NOT NULL,
  `menu` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `url` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of menu
-- ----------------------------
BEGIN;
INSERT INTO `menu` VALUES (1, '员工总览', '/main/analyze');
INSERT INTO `menu` VALUES (2, '员工档案', '/main/file');
INSERT INTO `menu` VALUES (3, '员工管理', '/main/manage');
INSERT INTO `menu` VALUES (4, '审批事项', '/main/approve');
INSERT INTO `menu` VALUES (5, '人事调动', '/main/transfer');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
