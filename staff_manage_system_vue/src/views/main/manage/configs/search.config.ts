import { IForm } from "@/base-ui/form/types";
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'realname',
      type: 'input',
      label: '姓名',
      placeholder: '请输入员工姓名'
    },
    {
      field: 'number',
      type: 'input',
      label: '编号',
      placeholder: '请输入员工编号'
    },
    {
      field: 'department',
      type: 'input',
      label: '部门',
      placeholder: '请输入员工部门'
    },
    {
      field: 'position',
      type: 'input',
      label: '员工职位',
      placeholder: '请输入员工职位'
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
      field: 'entrydate',
      type: 'date',
      label: '入职时间',
      otherOptions: {
        defaultValue: new Date()
      }
    }
  ],
  labelWidth: '110px'
}
