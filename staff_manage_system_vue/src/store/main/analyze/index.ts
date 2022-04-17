import { Module } from "vuex";
import { getDepartmentCountRequest, getRecordCountRequest } from "@/service/main/anaylze";
import { IRootState } from '@/store/type'
import { IDataState } from "./type";

const analyzeModule: Module<IDataState, IRootState> = {
  namespaced: true,
  state() {
    return {
      departmentCount: [],
      recordCount: []
    }
  },
  getters: {},
  mutations: {
    changeDepartmentCount(state, departmentCount: any[]) {
      state.departmentCount = departmentCount
    },
    changeRecordCount(state, recordCount: any[]) {
      state.recordCount = recordCount
    }
  },
  actions: {
    async getDepartmentCount({commit}) {
      const departmentCount = await getDepartmentCountRequest()
      commit('changeDepartmentCount', departmentCount)
    },
    async getRecordCount({commit}) {
      const recordCount = await getRecordCountRequest()
      commit('changeRecordCount', recordCount)
    }
  }
}

export default analyzeModule
