// 获取配置
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

// 加载配置文件(.env)
dotenv.config()

// 生成token使用的公私钥
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../keys/public.pem'))

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY

