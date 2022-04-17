const errorType = require("../contants/error-type")
const md5password = require("../utils/password-handle")
const userService = require("../service/user.service")

const verifyUser = async(ctx, next) => {
  const { name, password } = ctx.request.body
  if(!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  const findResult = await userService.getUserByName(name)
  const user = findResult[0]
  if(user) {
    const error = new Error(errorType.NAME_IS_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  await next()
}

const handlePassword = async(ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}
