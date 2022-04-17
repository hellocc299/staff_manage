import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'
import { requestAllUserInfo, requestUserCount } from '@/service/login'
import login from './login'
import system from './main/system'
import analyze from './main/analyze'

const store = createStore<IRootState>({
  state() {
    return {
      entireRole: [],
      userCount: 0
    }
  },
  mutations: {
    changeEntireRole(state, rolesList: any) {
      state.entireRole = rolesList
    },
    changeUserCount(state, userCount: Number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getInitialDataAction({commit}, payload: any) {
      const rolesList = await requestAllUserInfo(payload)
      const userCount = await requestUserCount()
      commit('changeEntireRole', rolesList)
      commit('changeUserCount', userCount)
    }
  },
  modules: {
    login,
    system,
    analyze
  }
})

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
