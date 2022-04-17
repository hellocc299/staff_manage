<template>
  <div class='page-modal'>
    <el-dialog v-model="dialogTableVisible"
               title="新建用户"
               width="30%"
               center
               destroy-on-close>
      <cc-form v-bind="createModalConfig" v-model="createFormData"></cc-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import ccForm from "@/base-ui/form/src/form.vue"
import {useStore} from 'vuex'
export default defineComponent({
   components: {
     ccForm
   },
   props: {
     createModalConfig: {
       type: Object,
       required: true
     },
     createDefaultInfo: {
       type: Object,
       default: () => ({})
     }
   },
   setup(props) {
     const dialogTableVisible = ref(false)
     const createFormData = ref<any>({})
     const store = useStore()

     // 收集表单中的数据给createFormData
     watch(
       () => props.createDefaultInfo,
       (newValue) => {
         for(const item of props.createModalConfig.formItems) {
           createFormData.value[`${item.field}`] = newValue[`${item.field}`]
         }
       }
     )

     // 处理新建用户确定逻辑
     const handleConfirmClick = () => {
        dialogTableVisible.value = false
        store.dispatch('system/createUserAction', {
          createInfo: { ...createFormData.value }
        })
     }
     return {
       dialogTableVisible,
       createFormData,
       handleConfirmClick
    }
   }
})
</script>
<style scoped lang='less'>
</style>
