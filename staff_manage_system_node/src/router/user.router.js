// 用户操作: 创建用户、查询用户、获取用户菜单、获取当前用户信息、获取全部用户信息
const Router = require('koa-router')
const userRouter = new Router({prefix: '/user'})

const {
  verifyAuth
} = require("../middleware/auth.middleware")

const {
  menuList,
  userInfoList,
  allUserInfoList,
  userCount,
  allMenu
} = require("../controller/user.controller")

// 获取当前登录用户菜单
userRouter.get("/menu", verifyAuth, menuList)
// 获取当前用户信息
userRouter.get("/userinfo", verifyAuth, userInfoList)
// 获取全部用户信息
userRouter.post("/alluser", verifyAuth, allUserInfoList)
// 获取用户总数
userRouter.get("/usercount", verifyAuth, userCount)
// 获取全部菜单
userRouter.get('/allmenu', allMenu)

module.exports = userRouter