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

 Date: 17/03/2022 01:15:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_menu
-- ----------------------------
DROP TABLE IF EXISTS `user_menu`;
CREATE TABLE `user_menu` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `menu_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of user_menu
-- ----------------------------
BEGIN;
INSERT INTO `user_menu` VALUES (1, 1, 1);
INSERT INTO `user_menu` VALUES (2, 1, 2);
INSERT INTO `user_menu` VALUES (3, 1, 3);
INSERT INTO `user_menu` VALUES (4, 1, 4);
INSERT INTO `user_menu` VALUES (5, 1, 5);
INSERT INTO `user_menu` VALUES (6, 2, 1);
INSERT INTO `user_menu` VALUES (7, 2, 2);
INSERT INTO `user_menu` VALUES (8, 2, 3);
INSERT INTO `user_menu` VALUES (9, 2, 4);
INSERT INTO `user_menu` VALUES (10, 2, 5);
INSERT INTO `user_menu` VALUES (11, 3, 1);
INSERT INTO `user_menu` VALUES (12, 3, 2);
INSERT INTO `user_menu` VALUES (13, 3, 3);
INSERT INTO `user_menu` VALUES (14, 3, 4);
INSERT INTO `user_menu` VALUES (15, 3, 5);
INSERT INTO `user_menu` VALUES (16, 4, 1);
INSERT INTO `user_menu` VALUES (17, 4, 2);
INSERT INTO `user_menu` VALUES (18, 4, 3);
INSERT INTO `user_menu` VALUES (19, 4, 4);
INSERT INTO `user_menu` VALUES (20, 4, 5);
INSERT INTO `user_menu` VALUES (21, 5, 1);
INSERT INTO `user_menu` VALUES (22, 5, 2);
INSERT INTO `user_menu` VALUES (23, 5, 3);
INSERT INTO `user_menu` VALUES (24, 5, 4);
INSERT INTO `user_menu` VALUES (25, 5, 5);
INSERT INTO `user_menu` VALUES (26, 6, 1);
INSERT INTO `user_menu` VALUES (27, 6, 2);
INSERT INTO `user_menu` VALUES (28, 6, 3);
INSERT INTO `user_menu` VALUES (29, 6, 4);
INSERT INTO `user_menu` VALUES (30, 6, 5);
INSERT INTO `user_menu` VALUES (31, 7, 1);
INSERT INTO `user_menu` VALUES (32, 7, 2);
INSERT INTO `user_menu` VALUES (33, 7, 3);
INSERT INTO `user_menu` VALUES (34, 7, 4);
INSERT INTO `user_menu` VALUES (35, 7, 5);
INSERT INTO `user_menu` VALUES (36, 8, 1);
INSERT INTO `user_menu` VALUES (37, 8, 2);
INSERT INTO `user_menu` VALUES (38, 8, 4);
INSERT INTO `user_menu` VALUES (39, 9, 1);
INSERT INTO `user_menu` VALUES (40, 9, 2);
INSERT INTO `user_menu` VALUES (41, 9, 4);
INSERT INTO `user_menu` VALUES (42, 10, 1);
INSERT INTO `user_menu` VALUES (43, 10, 2);
INSERT INTO `user_menu` VALUES (44, 10, 4);
INSERT INTO `user_menu` VALUES (45, 11, 1);
INSERT INTO `user_menu` VALUES (46, 11, 2);
INSERT INTO `user_menu` VALUES (47, 11, 4);
INSERT INTO `user_menu` VALUES (48, 12, 1);
INSERT INTO `user_menu` VALUES (49, 12, 2);
INSERT INTO `user_menu` VALUES (50, 12, 4);
INSERT INTO `user_menu` VALUES (51, 13, 1);
INSERT INTO `user_menu` VALUES (52, 13, 2);
INSERT INTO `user_menu` VALUES (53, 13, 4);
INSERT INTO `user_menu` VALUES (54, 14, 1);
INSERT INTO `user_menu` VALUES (55, 14, 2);
INSERT INTO `user_menu` VALUES (56, 14, 4);
INSERT INTO `user_menu` VALUES (57, 15, 1);
INSERT INTO `user_menu` VALUES (58, 15, 2);
INSERT INTO `user_menu` VALUES (59, 15, 4);
INSERT INTO `user_menu` VALUES (60, 16, 1);
INSERT INTO `user_menu` VALUES (61, 16, 2);
INSERT INTO `user_menu` VALUES (62, 16, 4);
INSERT INTO `user_menu` VALUES (63, 17, 1);
INSERT INTO `user_menu` VALUES (64, 17, 2);
INSERT INTO `user_menu` VALUES (65, 17, 4);
INSERT INTO `user_menu` VALUES (66, 18, 1);
INSERT INTO `user_menu` VALUES (67, 18, 2);
INSERT INTO `user_menu` VALUES (68, 18, 4);
INSERT INTO `user_menu` VALUES (69, 19, 1);
INSERT INTO `user_menu` VALUES (70, 19, 2);
INSERT INTO `user_menu` VALUES (71, 19, 4);
INSERT INTO `user_menu` VALUES (72, 20, 1);
INSERT INTO `user_menu` VALUES (73, 20, 2);
INSERT INTO `user_menu` VALUES (74, 20, 4);
INSERT INTO `user_menu` VALUES (75, 21, 1);
INSERT INTO `user_menu` VALUES (76, 21, 2);
INSERT INTO `user_menu` VALUES (77, 21, 4);
INSERT INTO `user_menu` VALUES (78, 22, 1);
INSERT INTO `user_menu` VALUES (79, 22, 2);
INSERT INTO `user_menu` VALUES (80, 22, 4);
INSERT INTO `user_menu` VALUES (81, 23, 1);
INSERT INTO `user_menu` VALUES (82, 23, 2);
INSERT INTO `user_menu` VALUES (83, 23, 4);
INSERT INTO `user_menu` VALUES (84, 24, 1);
INSERT INTO `user_menu` VALUES (85, 24, 2);
INSERT INTO `user_menu` VALUES (86, 24, 4);
INSERT INTO `user_menu` VALUES (87, 25, 1);
INSERT INTO `user_menu` VALUES (88, 25, 2);
INSERT INTO `user_menu` VALUES (89, 25, 4);
INSERT INTO `user_menu` VALUES (90, 26, 1);
INSERT INTO `user_menu` VALUES (91, 26, 2);
INSERT INTO `user_menu` VALUES (92, 26, 4);
INSERT INTO `user_menu` VALUES (93, 27, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
