<template>
  <div class='cc-description'>
    <el-descriptions v-bind="descriConfigList"
                     :column="descriConfigList.column"
                     :size="descriConfigList.size"
                     border>
      <template #title>
        <div class="title">{{ descriConfigList.title }}</div>
      </template>
      <template v-for="item in descriConfigList.desItem" :key="item.label">
        <el-descriptions-item :label="item.label"
                              label-align="center"
                              align="center"
                              label-class-name="my-label"
                              class-name="my-content">
          <template v-if="item.type === 'common'">
              <span>{{ userInfo[`${item.field}`] }}</span>
          </template>
          <template v-else-if="item.type === 'statu'">
            <el-tag v-if="userInfo.statu === 0" type="danger">离职</el-tag>
            <el-tag v-else-if="userInfo.statu === 1" type="success">在职</el-tag>
            <el-tag v-else-if="userInfo.statu === 2" type="warning">休假</el-tag>
          </template>
          <template v-if="item.type === 'sex'">
              <span v-if="userInfo.sex === 0">男</span>
              <span v-if="userInfo.sex === 1">女</span>
          </template>
          <template v-if="item.type === 'date'">
              <span>{{ $filter.formatTime(userInfo[`${item.field}`]) }}</span>
          </template>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
   components: {

   },
   props: {
     descriConfigList: {
       type: Object,
       required: true
     },
     userInfo: {
       type: Object,
       default: () => ({})
     }
   },
   setup() {

     return {

      }
   }
})
</script>
<style scoped lang='less'>

.el-descriptions {
  margin-top: 20px;

  .title {
    height: 50px;
    font-size: 20px;
    line-height: 65px;
  }

  .my-label {
  background: var(--el-color-success-light-9);
  }

  .my-content {
    background: var(--el-color-danger-light-9);
  }
}
</style>
