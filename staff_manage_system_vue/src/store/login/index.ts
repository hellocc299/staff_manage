import { Module } from "vuex";
import { ILoginState } from "./type";
import { IRootState } from "../type";
import { IAccount } from "@/service/login/type";
import { accountLoginRequest, requestUserMenusByUserId, requestUserInfoByUserId } from "@/service/login";
import localCache from "@/utils/cache"
import router from "@/router";
import { mapMenuToRoutes } from "@/utils/map-routes";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userMenus: [],
      userInfo: {}
    }
  },
  getters: {

  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenuToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('Main', route)
      })
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async accountLoginActions({commit, dispatch}, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult
      commit('changeToken', token)
      localCache.setCache("token", token)
      dispatch('getInitialDataAction', null, { root: true })
      // 获取用户菜单
      const userMenus = await requestUserMenusByUserId(id)
      commit('changeUserMenus', userMenus)
      localCache.setCache("userMenus", userMenus)

      // 获取用户信息
      const userInfo = await requestUserInfoByUserId(id)
      commit('changeUserInfo', userInfo)
      localCache.setCache("userInfo", userInfo)

      router.push('/main')
    },
    // 初始化store
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if(token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userMenus = localCache.getCache('userMenus')
      if(userMenus) {
        commit('changeUserMenus', userMenus)
      }
      const userInfo = localCache.getCache('userInfo')
      if(userInfo) {
        commit('changeUserInfo', userInfo)
      }
    }
  }
}

export default loginModule
