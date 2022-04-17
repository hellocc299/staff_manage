const userService = require("../service/user.service.js")

class UserController {
  async menuList(ctx, next) {
    const { id } = ctx.user
    const result = await userService.getUserMenuById(id)
    ctx.body = result
  }

  async userInfoList(ctx, next) {
    const { id } = ctx.user
    const result = await userService.getUserInfoById(id)
    ctx.body = result[0]
  }

  async allUserInfoList(ctx, next) {
    const { queryInfo } = ctx.request.body
    const { offset, size } = { ...queryInfo }
    const result = await userService.getAllUserInfo(offset, size)
    ctx.body = result
  }

  async userCount(ctx, next) {
    const result = await userService.getUserCount()
    ctx.body = result[0]
  }
  async allMenu(ctx, next) {
    const result = await userService.getAllMenu()
    ctx.body = result[0]
  }
}

module.exports = new UserController()