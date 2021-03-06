<template>
  <div class='cc-form'>
    <div class="form-header">
      <slot name="header"></slot>
    </div>
    <el-form>
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label"
                          :style="itemLayout"
                          v-if="!item.isHidden">
              <template v-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder"
                           :model-value="modelValue[`${item.field}`]"
                           @update:modelValue="handleValueChange($event, item.field)">
                  <el-option v-for="option in item.options"
                             :key="option.value"
                             :label="option.label"
                             :value="option.value"/>
                </el-select>
              </template>
              <template v-else-if="item.type === 'date'">
                <el-date-picker v-bind="item.otherOptions"
                                :model-value="modelValue[`${item.field}`]"
                                @update:modelValue="handleValueChange($event, item.field)"/>
              </template>
              <template v-else-if="item.type === 'input' || item.type === 'password'">
                <el-input :placeholder="item.placeholder"
                          :show-password="item.type === 'password'"
                          :model-value="modelValue[`${item.field}`]"
                          @update:modelValue="handleValueChange($event, item.field)"
                          />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
   props: {
     formItems: {
       type: Array as PropType<IFormItem[]>,
       default: () => []
     },
     colLayout: {
       type: Object,
       default: () => ({
         xl: 6,
         lg: 8,
         md: 12,
         sm: 24,
         xs: 24
       })
     },
     labelWidth: {
       type: String,
       default: '100px'
     },
     itemLayout: {
       type: Object,
       default: () => ({ padding: '10px 40px' })
     },
     modelValue: {
       type: Object,
       required: true
     }
   },
   emits: ['update:modelValue'],
   components: {

   },
   setup(props, {emit}) {
     const handleValueChange = (value: any, field: string) => {
       emit('update:modelValue', {...props.modelValue, [field]: value})
     }
     return {
       handleValueChange
    }
   }
})
</script>
<style scoped lang='less'>
.cc-form {
  padding-top: 22px;
}
</style>
