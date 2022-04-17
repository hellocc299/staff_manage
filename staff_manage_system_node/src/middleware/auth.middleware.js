const errorType = require('../contants/error-type')
const userService = require("../service/user.service")
const md5password = require("../utils/password-handle")
const jwt = require("jsonwebtoken")
const {PUBLIC_KEY} = require('../app/config')

// 验证登录
const verifyLogin = async(ctx, next) => {
  const { name, password } = ctx.request.body
  if(!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }
  const result = await userService.getUserByName(name)
  const user = result[0]
  if(!user) {
    const error = new Error(errorType.USER_IS_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  if(md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_WRONG)
    return ctx.app.emit('error', error, ctx)
  }
  ctx.user = user
  await next()
}

// 验证授权
const verifyAuth = async(ctx, next) => {
  const authorization = ctx.headers.authorization
  if(!authorization) {
    const error = new Error(errorType.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }
  const token = authorization.replace('Bearer ', '')
  try {
    const result = jwt.verify(token, PUBLIC_KEY)
    ctx.user = result
    await next()
  } catch(err) {
    console.log(err);
    const error = new Error(errorType.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth
}