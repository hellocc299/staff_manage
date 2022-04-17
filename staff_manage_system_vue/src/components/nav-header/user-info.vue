<template>
  <div class='user-info'>
    <el-dropdown>
      <span class="el-dropdown-link">{{userInfo.realname}}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item divided @click="handleExitClick">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import localCache from "@/utils/cache"
import {useRouter} from 'vue-router'
export default defineComponent({
   components: {

   },
   setup() {
     const store = useStore()
     const router = useRouter()
     const userInfo = computed(() => store.state.login.userInfo)
     const handleExitClick = () => {
       localCache.deleteCache("token")
       router.push('/login')
     }

     return {
       userInfo,
       handleExitClick
      }
   }
})
</script>
<style scoped lang='less'>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
