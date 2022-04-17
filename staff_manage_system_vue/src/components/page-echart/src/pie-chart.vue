<template>
  <div class='pie-chart'>
    <cc-echart :options="options"></cc-echart>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, PropType } from 'vue'
import ccEchart from '@/base-ui/echart/src/echart.vue'
import { IEchartType } from '../types/echart.config'
export default defineComponent({
   components: {
     ccEchart
   },
   props: {
     pieData: {
       type: Array as PropType<IEchartType[]>,
       required: true
     }
   },
   setup(props) {
     const options = computed(() => {
     return {
       tooltip: {
         trigger: 'item'
       },
       legend: {
         orient: 'horizontal',
         left: 'left'
       },
       series: [
         {
           name: '分类数据',
           type: 'pie',
           radius: '50%',
           data: props.pieData,
           emphasis: {
             itemStyle: {
               shadowBlur: 10,
               shadowOffsetX: 0,
               shadowColor: 'rgba(0, 0, 0, 0.5)'
             }
           }
         }
       ]
     }
})
    return {
      options
    }
   }
})
</script>
<style scoped lang='less'>
</style>
