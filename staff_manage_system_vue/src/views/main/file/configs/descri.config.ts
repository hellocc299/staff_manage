import { IDes } from "@/base-ui/description/types";

export const descriConfigList: IDes = {
  title: "个人简介",
  desItem: [
    {
      field: 'realname',
      type: 'common',
      label: '姓名'
    },
    {
      field: 'sex',
      type: 'sex',
      label: '性别'
    },
    {
      field: 'number',
      type: 'common',
      label: '员工编号'
    },
    {
      field: 'bir',
      type: 'date',
      label: '生日'
    },
    {
      field: 'entrydate',
      type: 'date',
      label: '入职时间'
    },
    {
      field: 'department',
      type: 'common',
      label: '部门'
    },
    {
      field: 'position',
      type: 'common',
      label: '职位'
    },
    {
      field: 'phonenumber',
      type: 'common',
      label: '手机号码'
    },
    {
      field: 'statu',
      type: 'statu',
      label: '在职状态'
    },
    {
      field: 'specialty',
      type: 'common',
      label: '专业'
    },
    {
      field: 'record',
      type: 'common',
      label: '专业'
    },
    {
      field: 'email',
      type: 'common',
      label: '电子邮箱'
    }
  ],
  column: 2,
  size: 'large'
}
