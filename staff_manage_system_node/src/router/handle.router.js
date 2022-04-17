// CRUD
const Router = require('koa-router')
const handleRouter = new Router({prefix: '/handle'})

const { 
  verifyAuth
} = require('../middleware/auth.middleware')

const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware')

const {
  delUser,
  findUser,
  creatUser,
  addMenu,
  editUser,
  userMenus
} = require('../controller/handle.controller')

// 根据id删用户
handleRouter.delete('/deluser', verifyAuth, delUser)
// 查找用户
handleRouter.post('/finduser', verifyAuth, findUser)
// 新建用户
handleRouter.post('/createuser', verifyAuth, verifyUser, handlePassword, creatUser)
// 根据用户id查询菜单
handleRouter.post('/usermenu', verifyAuth, userMenus)
// 添加用户菜单
handleRouter.post('/addmenu', verifyAuth, addMenu)
// 编辑用户
handleRouter.patch('/edituser', verifyAuth, editUser)

module.exports = handleRouter