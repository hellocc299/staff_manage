<template>
  <div class='page-modal'>
    <el-dialog v-model="dialogTableVisible"
               title="编辑用户"
               width="30%"
               center
               destroy-on-close>
      <cc-form v-bind="editModalConfig" v-model="editFormData"></cc-form>
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
     editModalConfig: {
       type: Object,
       required: true
     },
     editDefaultInfo: {
       type: Object,
       default: () => ({})
     }
   },
   setup(props) {
     const dialogTableVisible = ref(false)
     const editFormData = ref<any>({})
     const store = useStore()

     // 收集表单中的数据给editFormData
     watch(
       () => props.editDefaultInfo,
       (newValue) => {
         for(const item of props.editModalConfig.formItems) {
           editFormData.value[`${item.field}`] = newValue[`${item.field}`]
         }
       }
     )

     // 处理编辑用户确定逻辑
     const handleConfirmClick = () => {
        dialogTableVisible.value = false
        store.dispatch('system/editUserAction', {
          userId: props.editDefaultInfo.userId,
          content: { ...editFormData.value }
        })
     }
     return {
       dialogTableVisible,
       editFormData,
       handleConfirmClick
    }
   }
})
</script>
<style scoped lang='less'>
</style>
