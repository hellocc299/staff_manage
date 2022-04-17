type IFormType = 'input' | 'password' | 'select' | 'date'
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  colLayout?: any
  labelWidth?: string
  itemLayout?: any
}
