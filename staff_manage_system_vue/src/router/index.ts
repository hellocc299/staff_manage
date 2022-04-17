import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-routes'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main/main.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/notFound/not-found.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 判断是否有登录状态
router.beforeEach((to) => {
  if(to.path !== '/login') {
    const token = localCache.getCache("token")
    if(!token) {
      return '/login'
    }
  }
  // 跳转到第一个菜单
  if (to.path === '/main') {
    console.log(firstMenu)
    return firstMenu.url
  }
})

export default router
