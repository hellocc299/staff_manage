const connection = require("../app/database")

class handleService {
  async delectUser(id) {
    try {
      const statement = `DELETE l.*, u.*, um.* FROM login l 
                         LEFT JOIN user u ON (l.id = u.userId)
                         LEFT JOIN user_menu um ON (l.id = um.userId)
                         WHERE l.id = ?;`
      const result = await connection.execute(statement, [id])
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async findUser(realname, number, department, position, statu, entrydate, offset, size) {
    try {
      const infoArr = [realname, number, department, position, statu, entrydate]
      let userInfo1 = []
      let userInfo2 = []
      for(let i = 0; i < infoArr.length; i++) {
        if(infoArr[i]) {
          userInfo1.push(infoArr[i])
          userInfo2.push(infoArr[i])
        }
      }
      if(userInfo1.length === 0){
        const statement1 = `SELECT * FROM user LIMIT ?, ?`
        const statement2 = `SELECT COUNT(*) AS count FROM user`
        const result1 = await connection.execute(statement1, [offset+'', size+''])
        const result2 = await connection.execute(statement2, [offset+'', size+''])
        return [result1[0], result2[0]]
      }

      let statement1 = `SELECT * FROM user WHERE 1=1`
      let statement2 = `SELECT COUNT(id) AS count FROM user WHERE 1=1`
      if(realname) {
        statement1 += ` AND realname = ?`
        statement2 += ` AND realname = ?`
      }
      if(number) {
        statement1 += ` AND number = ?`
        statement2 += ` AND number = ?`
      }
      if(department) {
        statement1 += ` AND department = ?`
        statement2 += ` AND department = ?`
      }
      if(position) {
        statement1 += ` AND position = ?`
        statement2 += ` AND position = ?`
      }
      if(statu) {
        statement1 += ` AND statu = ?`
        statement2 += ` AND statu = ?`
      }
      if(entrydate) {
        statement1 += ` AND entrydate = ?`
        statement2 += ` AND entrydate = ?`
      }
      statement1 += ` LIMIT ?, ?`
      userInfo1.push(offset+'')
      userInfo1.push(size+'')
      const result1 = await connection.execute(statement1, userInfo1)
      const result2 = await connection.execute(statement2, userInfo2)
      return [result1[0], result2[0]]
    } catch(err) {
      console.log(err);
    }
  }
  async creatUser(name, password) {
    try {
      const statement1 = `INSERT INTO login (name, password) VALUES (?, ?) `
      await connection.execute(statement1, [name, password])
      const statement2 = `SELECT id FROM login WHERE name = ?`
      const findResult = await connection.execute(statement2, [name])
      const idResult = findResult[0]     
      const id = idResult[0].id   
      const statement3 = `INSERT INTO user (userId) VALUE (?);`
      const result = await connection.execute(statement3, [id]) 
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async addMenu(userId, menuArr) {
    try {
      if(menuArr.length) {
        let result = null
        for(let i = 0; i < menuArr.length; i++) {
          const statement = `INSERT INTO user_menu (userId, menu_id) VALUES (?, ?)`
          result = await connection.execute(statement, [userId, menuArr[i]])
        }
        return result
      }
      return result
    } catch(err) {
      console.log(err);
    }
  }
  async editUser(userId, content) {
    try {
      const { 
        realname = realname ?? null,
        number = number ?? null,
        bir = bir ?? null,
        entrydate = entrydate ?? null,
        department = department ?? null,
        position = position ?? null,
        phonenumber = phonenumber ?? null,
        statu = statu ?? null,
        specialty = specialty ?? null,
        record = record ?? null,
        email = email ?? null,
        sex = sex ?? null
       } = {...content}
      const statement = `UPDATE user SET realname=?, number=?, bir=?, entrydate=?, department=?, position=?, phonenumber=?, statu=?, specialty=?, record=?, email=?, sex=? WHERE userId=?`
      const result = await connection.execute(statement, [realname, number, bir, entrydate, department, position, phonenumber, statu, specialty, record, email, sex, userId])
      return result
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new handleService()