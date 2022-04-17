<template>
  <div class='page-search'>
    <cc-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">员工检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick"><el-icon><refresh-left /></el-icon>重置</el-button>
          <el-button type="primary" @click="handleSearchClick"><el-icon><search /></el-icon>搜索</el-button>
        </div>
      </template>
    </cc-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import ccForm from '@/base-ui/form/src/form.vue'
export default defineComponent({
   props: {
     searchFormConfig: {
       type: Object,
       require: true
     }
   },
   components: {
     ccForm
   },
   emits: ['resetBtnClick', 'searchBtnClick'],
   setup(props, { emit }) {
     // formData中的属性由配置文件决定
     const formItems = props.searchFormConfig?.formItems ?? []
     const originFormData: any = {}
     for(const item of formItems) {
       originFormData[item.field] = ''
     }
     // 初始化formData
     const formData = ref(originFormData)
     // 重置
     const handleResetClick = () => {
       formData.value = originFormData
       emit('resetBtnClick')
     }

     // 搜索
     const handleSearchClick = () => {
       emit('searchBtnClick', formData.value)
     }
     return {
       formData,
       handleResetClick,
       handleSearchClick
    }
   }
})
</script>
<style scoped lang='less'>
.header {
  color: #0a5fbd;
}
.handle-btns {
  text-align: right;
  padding: 0 20px 20px 0;

  .el-icon {
    margin-right: 5px;
  }
}
</style>
