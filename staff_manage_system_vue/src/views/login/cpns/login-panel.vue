<template>
  <div class='login-panel'>
    <h1 class="title">员工管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>用户登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" checked>记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginBtn">立即登录</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
export default defineComponent({
   components: {
      LoginAccount
   },
   setup() {
     const currentTab = ref('account')
     const isKeepPassword = ref(true)
     const accountRef = ref<InstanceType<typeof LoginAccount>>()

     const handleLoginBtn = () => {
       accountRef.value?.loginAction(isKeepPassword.value)
     }

     return {
       currentTab,
       isKeepPassword,
       accountRef,
       handleLoginBtn
      }
   }
})
</script>
<style scoped lang='less'>
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
