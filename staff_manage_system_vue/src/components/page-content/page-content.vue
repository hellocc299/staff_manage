<template>
  <div class='page-content'>
    <cc-table v-bind="contentTableConfig"
              :listData="userList"
              :listCount="userCount.count"
              v-model:page="pageInfo">
      <template #headerHandler>
        <el-button type="primary"
                   @click="handleCreateClick">新建用户</el-button>
      </template>
      <template #sex="scope">
        <span>{{scope.row.sex === 0 ? '男' : '女'}}</span>
      </template>
      <template #statu="scope">
        <el-button plain
                   size="small"
                   type="danger"
                   v-if="scope.row.statu === 0">离职</el-button>
        <el-button plain
                   size="small"
                   type="success"
                   v-if="scope.row.statu === 1">在职</el-button>
        <el-button plain
                   size="small"
                   type="warning"
                   v-if="scope.row.statu === 2">休假</el-button>
      </template>
      <template #handle="scope">
        <div class="handle-btns">
          <el-button type="text"
                     @click="hanleEditUserClick(scope.row)"
                     size="small"><el-icon><edit /></el-icon>编辑</el-button>
          <el-button type="text"
                     @click="handleMenuClick(scope.row)"
                     size="small"><el-icon><list /></el-icon>权限</el-button>
          <el-button type="text"
                     @click="handleDeleteClick(scope.row)"
                     size="small"><el-icon><delete-filled /></el-icon>删除</el-button>
        </div>
      </template>
    </cc-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, computed } from 'vue'
import {useStore} from '@/store'
import ccTable from '@/base-ui/table/src/table.vue'
export default defineComponent({
   components: {
     ccTable
   },
   props: {
     contentTableConfig: {
       type: Object,
       required: true
     }
   },
   emits: ['newBtnClick', 'editBtnClick', 'menuBtnClick'],
   setup(props, {emit}) {
     const store = useStore()
     // 初始化页数并监听改变
     const pageInfo = ref({
       currentPage: 1,
       pageSize: 10
     })
     watch(pageInfo, () => getPageData())
     // 获取用户信息
     const getPageData = (queryInfo: any = {}) => {
       store.dispatch('system/queryUserAction', {
         queryInfo: {
           ...queryInfo,
           offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
           size: pageInfo.value.pageSize
         }
       })
     }
     getPageData()
     // 全部数据
     const userList = computed(() => store.state.system.queryUserList)
     const userCount = computed(() => store.state.system.queryUserCount)
     // 删除
     const handleDeleteClick = (item: any) => {
       store.dispatch('system/delectUserAction', {
         id: item.userId
       })
     }
     // 新建
     const handleCreateClick = () => {
       emit('newBtnClick')
     }
     // 编辑
     const handleEditUserClick = (item: any) => {
       emit('editBtnClick', item)
     }
     return {
       getPageData,
       userList,
       userCount,
       handleDeleteClick,
       handleCreateClick,
       handleEditUserClick,
       pageInfo
     }
   }
})
</script>
<style scoped lang='less'>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
