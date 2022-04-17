export const contentTableConfig = {
  title: '用户列表',
  pageSize: [10, 20, 30, 40],
  propList: [
    { prop: 'realname', label: '员工姓名', midWidth: '30' },
    { prop: 'sex', label: '性别', width: '50', slotName: 'sex' },
    { prop: 'number', label: '员工编号', minWidth: '80' },
    { prop: 'department', label: '部门', midWidth: '80' },
    { prop: 'position', label: '职位', midWidth: '50' },
    { prop: 'phonenumber', label: '手机号码', minWidth: '120' },
    { prop: 'statu', label: '在职状态', width: '90', slotName: 'statu' },
    { prop: 'specialty', label: '专业', midWidth: '50' },
    { prop: 'record', label: '学历', midWidth: '50' },
    { prop: 'email', label: '邮箱', midWidth: '80' },
    { prop: 'bir', label: '出生日期', midWidth: '100', slotName: 'bir' },
    { prop: 'entrydate', label: '入职时间', midWidth: '100', slotName: 'entrydate' },
    { label: '操作', minWidth: '120', slotName: 'handle' }
  ]
}
