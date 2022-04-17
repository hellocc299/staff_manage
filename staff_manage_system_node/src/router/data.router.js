const Router = require('koa-router')
const dataRouter = new Router({ prefix: "/analyze" })

const {
  departmentCount,
  recordCount
} = require('../controller/data.controller')

// 获取部门对应数量
dataRouter.get('/department', departmentCount)
// 获取专业对应数量
dataRouter.get('/record', recordCount)

module.exports = dataRouter