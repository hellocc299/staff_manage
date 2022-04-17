<template>
  <div class='nav-menu'>
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">员工管理系统</span>
    </div>
    <el-menu default-active="1"
             class="el-menu-vertical"
             background-color="#0c2135"
             text-color="#b7bdc3"
             active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-menu-item :index="item.id + ''"
                      @click="handleMenuItemClick(item)">
          <span>{{item.menu}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-routes'
export default defineComponent({
   components: {

   },
   setup() {
     const store = useStore()
     const router = useRouter()
     const route = useRoute()
     const currentPath = route.path
     const userMenus = computed(() => store.state.login.userMenus)
     const userMenu = pathMapToMenu(userMenus.value, currentPath)
    //  const defaultActive = ref(userMenu.id + '')
     const handleMenuItemClick = (item: any) => {
       console.log(userMenu);
       router.push({
         path: item.url ?? '/not-found'
       })
     }

     return {
       userMenus,
       handleMenuItemClick,
      //  defaultActive
      }
   }
})
</script>
<style scoped lang='less'>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    // 取消右面的线
    border-right: none;
  }


  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;

    span {
      font-size: 16px;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
