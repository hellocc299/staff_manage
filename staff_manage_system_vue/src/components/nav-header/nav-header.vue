<template>
  <div class='nav-header'>
    <div class="header-left">
      <i class="fold-menu" @click="handleFoldClick">
        <div v-if="!isFold"><el-icon><fold /></el-icon></div>
        <div v-else><el-icon><expand /></el-icon></div>
      </i>
      <div class="title">{{userMenus.name}}</div>
    </div>
    <div class="header-right"><user-info /></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import {useStore} from "@/store"
import UserInfo from './user-info.vue'
export default defineComponent({
   components: {
      UserInfo
   },
   emit: ["foldChange"],
   setup(props, { emit }) {
     const store = useStore()
     const isFold = ref(false)
     const userMenus = computed(() => store.state.login.userMenus)

     const handleFoldClick = () => {
       isFold.value = !isFold.value
       emit('foldChange', isFold.value)
     }
     return {
        isFold,
        handleFoldClick,
        userMenus
      }
   }
})
</script>
<style scoped lang='less'>
.nav-header {
  display: flex;
  width: 100%;
  justify-content: space-between;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    margin-top: 5px;

    .el-icon {
    font-size: 30px;
    cursor: pointer;
  }
}

.header-right {
  margin-top: 10px;
}
}
</style>
