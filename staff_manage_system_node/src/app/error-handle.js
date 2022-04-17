// 错误处理
const errorType = require('../contants/error-type')

const errorHandler = (err, ctx) => {
    let status, message
    switch(err.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUIRED: 
        status = 400       
        message = "用户名或密码不可为空"
        break;
        case errorType.USER_IS_NOT_EXISTS: 
        status = 400      
        message = "用户不存在"
        break;
        case errorType.PASSWORD_IS_WRONG: 
        status = 400       
        message = "密码错误"
        break;
        case errorType.USER_IS_EXISTS:
        status = 400
        message = "用户名已存在"
        break;
        case errorType.UNAUTHORIZATION:
        status = 401
        message = "无效的token"
        break;
        case errorType.UNPEIMISSION:
        status = 401
        message = "您不具备操作权限"
        break;
        case errorType.NAME_IS_EXISTS:
        status = 409    
        message = "用户已经存在"
        break;
        default:
        status = 404
        message = "NOT FOUND"
        break;
    }

    ctx.status = status
    ctx.body = message
}

module.exports = errorHandler