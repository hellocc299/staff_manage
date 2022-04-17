<template>
  <div class="cc-card">
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ cardTitle }}</span>
      </div>
    </template>
    <slot></slot>
  </el-card>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
   components: {

},
  props: {
    cardTitle: {
      type: String,
      required: true
    }
  },
   setup() {

     return {

      }
   }
})
</script>
<style scoped lang='less'>
</style>
