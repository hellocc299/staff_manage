<template>
  <div class='login-account'>
    <el-form label-width="60px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus/lib/components'
import localCache from '@/utils/cache'
import {useStore} from 'vuex'
export default defineComponent({
   components: {

   },
   setup() {
     const store = useStore()
     const account = reactive({
       name: localCache.getCache('name'),
       password: localCache.getCache('password')
     })

     const formRef = ref<InstanceType<typeof ElForm>>()
     const loginAction = (isKeepPassword: boolean) => {
       formRef.value?.validate((valid: any) => {
         if(valid) {
           if(isKeepPassword) {
             localCache.setCache("name", account.name)
             localCache.setCache("password", account.password)
           }
           else {
             localCache.deleteCache("name")
             localCache.deleteCache("password")
           }
         }
         store.dispatch('login/accountLoginActions', { ...account })
       })
     }
     return {
       account,
       rules,
       loginAction,
       formRef
      }
   }
})
</script>
<style scoped lang='less'>
</style>
