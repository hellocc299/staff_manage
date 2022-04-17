import { IForm } from '@/base-ui/form/types'

export const editModalConfig: IForm = {
  formItems: [
    {
      field: 'realname',
      type: 'input',
      label: '姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'number',
      type: 'input',
      label: '员工编号',
      placeholder: '请输入员工编号'
    },
    {
      field: 'department',
      type: 'input',
      label: '部门',
      placeholder: '请输入部门'
    },
    {
      field: 'position',
      type: 'input',
      label: '职位',
      placeholder: '请输入职位'
    },
    {
      field: 'phonenumber',
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      field: 'statu',
      type: 'select',
      label: '在职状态',
      placeholder: '请选择在职状态',
      options: [
        { value: "0", label: '离职' },
        { value: "1", label: '在职' },
        { value: "2", label: '休假' }
      ]
    },
    {
      field: 'specialty',
      type: 'input',
      label: '学历',
      placeholder: '请输入学历'
    },
    {
      field: 'record',
      type: 'input',
      label: '专业',
      placeholder: '请输入专业'
    },
    {
      field: 'email',
      type: 'input',
      label: '邮箱',
      placeholder: '请输入邮箱'
    },
    {
      field: 'sex',
      type: 'select',
      label: '性别',
      placeholder: '请选择性别',
      options: [
        {value: "0", label: "男"},
        {value: "1", label: "女"}
      ]
    },
    {
      field: 'bir',
      type: 'date',
      label: '生日日期',
      otherOptions: {
        defaultValue: new Date()
      }
    },
    {
      field: 'entrydate',
      type: 'date',
      label: '入职时间',
      otherOptions: {
        defaultValue: new Date()
      }
    }
  ],
  colLayout: { span: 24 }
}
