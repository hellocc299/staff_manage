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

 Date: 17/03/2022 01:14:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(10) DEFAULT NULL,
  `realname` varchar(225) DEFAULT NULL,
  `number` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '员工编号',
  `bir` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '出生日期',
  `entrydate` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '入职日期',
  `department` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '部门',
  `position` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '职位',
  `phonenumber` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '手机号码',
  `statu` int DEFAULT NULL COMMENT '在职状态 0:离职 1:在职 2:休假',
  `specialty` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '专业',
  `record` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '学历',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '邮箱',
  `sex` int DEFAULT NULL COMMENT '性别 0:男 1:女',
  `picture` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '员工照片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3 COMMENT='员工编号';

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '1', '陈一', '111111', '2000-12-15', '2022-01-09', '总裁办', 'CEO', '19100000000', 1, '本科', '药物制剂', '1111@133.com', 1, NULL);
INSERT INTO `user` VALUES (2, '2', '林小小', '111112', '1999-11-25', '2022-01-10', '总经理办公室', '总经理', '13700000000', 1, '本科', '制药工程', '2222@133.com', 1, NULL);
INSERT INTO `user` VALUES (3, '3', '姚晴', '111113', '2001-04-05', '2022-01-10', '行政部', '行政部经理', '12300000000', 1, '本科', '行政管理', '3333@133.com', 1, NULL);
INSERT INTO `user` VALUES (4, '4', '林子洋', '111114', '2000-09-14', '2022-01-10', '人力资源部', '人事经理', '13400000000', 1, '本科', '人力资源', '4444@133.com', 0, NULL);
INSERT INTO `user` VALUES (5, '5', '陈辰', '111115', '1998-05-08', '2022-01-10', '财务部', '财务经理', '15500000000', 1, '本科', '财务管理', '5555@133.com', 0, NULL);
INSERT INTO `user` VALUES (6, '6', '郑鑫', '111116', '2002-08-19', '2022-01-10', '市场部', '市场经理', '13200000000', 1, '本科', '市场营销', '6666@133.com', 0, NULL);
INSERT INTO `user` VALUES (7, '7', '姚俊俊', '111117', '2001-07-20', '2022-01-10', '技术部', '技术经理', '18900000000', 1, '本科', '计算机科学与技术', '7777@133.com', 0, NULL);
INSERT INTO `user` VALUES (8, '8', '林琳', '111118', '2000-07-19', '2022-01-11', '行政部', '员工', '12340000000', 1, '本科', '行政管理', '8888@133.com', 1, NULL);
INSERT INTO `user` VALUES (9, '9', '陈曦', '111119', '2002-03-07', '2022-01-11', '行政部', '员工', '14440000000', 1, '本科', '行政管理', '9999@133.com', 1, NULL);
INSERT INTO `user` VALUES (10, '10', '郑天昊', '111120', '2001-08-15', '2022-01-11', '行政部', '员工', '13240000000', 1, '本科', '行政管理', '1211@133.com', 0, NULL);
INSERT INTO `user` VALUES (11, '11', '郑云', '111121', '2002-04-28', '2022-01-11', '行政部', '员工', '12220000000', 2, '本科', '行政管理', '1333@133.com', 0, NULL);
INSERT INTO `user` VALUES (12, '12', '王小楠', '111122', '2003-09-01', '2022-01-11', '人力资源部', '员工', '13300000000', 1, '本科', '人力资源', '1342@133.com', 1, NULL);
INSERT INTO `user` VALUES (13, '13', '李晓红', '111123', '1998-09-08', '2022-01-11', '人力资源部', '员工', '14250000000', 1, '本科', '人力资源', '1425@133.com', 1, NULL);
INSERT INTO `user` VALUES (14, '14', '陈旭', '111124', '1990-02-23', '2022-01-11', '人力资源部', '员工', '14424000000', 1, '本科', '人力资源', '14254@133.com', 0, NULL);
INSERT INTO `user` VALUES (15, '15', '陈心怡', '111125', '1998-12-23', '2022-01-11', '人力资源部', '员工', '13424000000', 0, '本科', '人力资源', '2324@133.com', 1, NULL);
INSERT INTO `user` VALUES (16, '16', '李清', '111126', '1997-08-09', '2022-01-12', '财务部', '员工', '12220000000', 1, '本科', '财务管理', '2333@133.com', 1, NULL);
INSERT INTO `user` VALUES (17, '17', '王小丫', '111127', '1995-04-03', '2022-01-12', '财务部', '员工', '15535000000', 1, '本科', '财务管理', '253535@133.com', 1, NULL);
INSERT INTO `user` VALUES (18, '18', '黄伊', '111128', '2003-02-11', '2022-01-12', '财务部', '员工', '16454600000', 1, '本科', '财务管理', '24252@133.com', 1, NULL);
INSERT INTO `user` VALUES (19, '19', '陈国强', '111129', '1995-03-24', '2022-01-12', '市场部', '员工', '13425200000', 1, '本科', '市场营销', '35352@133.com', 0, NULL);
INSERT INTO `user` VALUES (20, '20', '李毅霖', '111130', '2002-03-07', '2022-01-12', '市场部', '员工', '14252250000', 0, '本科', '市场营销', '4525@133.com', 0, NULL);
INSERT INTO `user` VALUES (21, '21', '庄丹丹', '111131', '2001-07-04', '2022-01-12', '市场部', '员工', '13252500000', 1, '本科', '市场营销', '53334@133.com', 1, NULL);
INSERT INTO `user` VALUES (22, '22', '林如如', '111132', '2000-12-12', '2022-01-13', '市场部', '员工', '13242525000', 1, '本科', '市场营销', '24524@133.com', 1, NULL);
INSERT INTO `user` VALUES (23, '23', '王易', '111133', '1988-03-30', '2022-01-13', '技术部', '员工', '14252530000', 1, '本科', '计算机科学与技术', '35632@133.com', 0, NULL);
INSERT INTO `user` VALUES (24, '24', '李亚男', '111134', '1999-09-28', '2022-01-13', '技术部', '员工', '13252420000', 1, '本科', '计算机科学与技术', '36352@133.com', 0, NULL);
INSERT INTO `user` VALUES (25, '25', '林霖', '111135', '2000-12-24', '2022-01-13', '技术部', '员工', '14525340000', 1, '本科', '计算机科学与技术', '2522@133.com', 0, NULL);
INSERT INTO `user` VALUES (26, '26', '陈星', '111136', '1999-12-05', '2022-01-14', '技术部', '员工', '14325300000', 1, '本科', '计算机科学与技术', '53532@133.com', 1, NULL);
INSERT INTO `user` VALUES (27, '27', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
