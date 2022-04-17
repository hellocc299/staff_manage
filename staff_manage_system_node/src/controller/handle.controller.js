const handleService = require('../service/handle.service')
const userService = require('../service/user.service')

class handleController {
  async delUser(ctx, next) {
    const { id } = ctx.request.body
    const result = await handleService.delectUser(id)
    ctx.body = result
  }
  async findUser(ctx, next) {
    const {
      realname, 
      number, 
      department, 
      position, 
      statu, 
      entrydate,
      offset,
      size
    } = ctx.request.body
    const [result1, result2] = await handleService.findUser(realname, number, department, position, statu, entrydate, offset, size)
    const list = result1
    const totalCount = result2[0]
    ctx.body = { list, totalCount }
  }
  async creatUser(ctx, next) {
      const { name, password } = ctx.request.body
      const result = await handleService.creatUser(name, password)
      ctx.body = result
  }
  async addMenu(ctx, next) {
      const { userId, menuArr } = ctx.request.body
      const result = await handleService.addMenu(userId, menuArr)
      ctx.body = result
  }
  async editUser(ctx, next) {
    const { userId, content } = ctx.request.body
    const result = await handleService.editUser(userId, content)                                                    
    ctx.body = result
  }
  async userMenus(ctx, next) {
    const {userId} = ctx.request.body
    const result = await userService.getUserMenuById(userId)
    ctx.body = result
  }
}

module.exports = new handleController()