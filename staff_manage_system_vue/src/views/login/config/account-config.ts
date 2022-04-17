export const rules = {
  name: [
    {
      required: true,
      message: '用户名不可为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须为5~10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不可为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,12}$/,
      message: '密码必须6~12个字母或者数字',
      trigger: 'blur'
    }
  ]
}
