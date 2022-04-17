const dataService = require('../service/data.service')

async function getResource(fieldName, condition) {
  const menuArr = []
  for(let i = 0; i < condition.length; i++) {
    const conditionInfo = condition[i]
    const result = await dataService.getResourcesCount(fieldName, conditionInfo)
    menuArr.push(result[0])
  }
  // console.log(menuArr);
  // const newArr = []
  // Object.assign(newArr, ...menuArr)
  // console.log(newArr);
  return menuArr
}


class DataController {
  async departmentCount(ctx, next) {
    const department = ['总裁办', '总经理办公室', '行政部', '人力资源部', '财务部', '市场部', '技术部', '行政部', '测试部']
    const result = await getResource('department', department)
    console.log(result);
    ctx.body = result
  }
  async recordCount(ctx, next) {
    const record = ['药物制剂', '制药工程', '行政管理', '人力资源', '财务管理', '市场营销', '计算机科学与技术', '行政管理', '软件工程']
    const result = await getResource('record', record)
    ctx.body = result
  }
}

module.exports = new DataController()