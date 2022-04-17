const connection = require("../app/database")

class UserService {
  // 查询用户
  async getUserByName(name) {
    try {
      const statement = `SELECT * FROM login WHERE name = ?`
      const result = await connection.execute(statement, [name])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  // 获取用户菜单
  async getUserMenuById(id) {
    try {
      console.log("id:" + id);
      const statement =  `SELECT * FROM menu m JOIN user_menu um ON um.menu_id = m.id WHERE um.userId = ?;`
      const result = await connection.execute(statement, [id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  // 获取用户信息
  async getUserInfoById(id) {
    try {
      const statement = `SELECT u.id, u.userId, u.realname, u.number, u.bir, u.entrydate, u.department, u.position, 
                                u.phonenumber, u.statu, u.specialty, u.record, u.email, u.sex
                         FROM user u LEFT JOIN login l ON u.userId = l.id WHERE u.userId = ?;`
      const result = await connection.execute(statement, [id])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  // 获取全部用户信息
  async getAllUserInfo(offset, size) {
    try {
      const statement = `SELECT * FROM user LIMIT ?, ?`
      const result = await connection.execute(statement, [offset+'', size+''])
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }

  // 获取用户总数
  async getUserCount() {
    try {
      const statement = `SELECT COUNT(*) as count from user`
      const result = await connection.execute(statement)
      return result[0] 
    } catch(err) {
      console.log(err);
    }
  }

  // 获取所有菜单
  async getAllMenu() {
    try {
      const statement = `SELECT * FROM menu`
      const result = await connection.execute(statement)
      return result
    } catch(err) {
      console.log(err);
    }
  } 
} 

module.exports = new UserService()