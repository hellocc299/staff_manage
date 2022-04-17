const connection = require('../app/database')

class DataService {
  async getResourcesCount(fieldName, condition) {
    try {
      const statement = `SELECT COUNT(${fieldName}) AS ${condition} FROM user WHERE ${fieldName}="${condition}"`
      const result = await connection.execute(statement)
      return result[0]
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = new DataService()