import { Module } from 'vuex'
import { IHandleState } from './type'
import { IRootState } from '@/store/type'
import { deleteUserRequest, queryUserRequest, createUserRequest, editUserRequest, userMenuRequest } from '@/service/main/manage'

const systemModule: Module<IHandleState, IRootState> = {
  namespaced: true,
  state() {
    return {
      queryUserList: [],
      queryUserCount: 0,
      queryUserMenus: []
    }
  },
  getters: {

  },
  mutations: {
    changeUserList(state, list: any[]) {
      state.queryUserList = list
    },
    changeUserCount(state, totalCount: number) {
      state.queryUserCount = totalCount
    },
    changeUserMenu(state, queryUserMenus: any[]) {
      // if(state.queryUserMenus.length) {
      //   state.queryUserMenus = []
      // }
      state.queryUserMenus = queryUserMenus
    }
  },
  actions: {
    async delectUserAction({dispatch}, userId: number) {
      await deleteUserRequest(userId)
      dispatch('queryUserAction', {
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async queryUserAction({dispatch, commit}, payload: any) {
      const queryResult = await queryUserRequest(payload.queryInfo)
      const { list, totalCount } = queryResult
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    },
    async createUserAction({dispatch, commit}, payload: any) {
      await createUserRequest(payload.createInfo)
      dispatch('queryUserAction', {
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editUserAction({dispatch, commit}, payload: any) {
      const { userId, content } = payload
      await editUserRequest(userId, content)
      dispatch('queryUserAction', {
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async menuListAction({dispatch, commit}, payload) {
      // const queryUserMenus = await userMenuRequest(payload.userId)
      const queryUserMenus = await userMenuRequest(payload.userId)
      // console.log("action:",userId);

      console.log(queryUserMenus);
      // commit('changeUserMenu', queryUserMenus)
    }
  }
}

export default systemModule
