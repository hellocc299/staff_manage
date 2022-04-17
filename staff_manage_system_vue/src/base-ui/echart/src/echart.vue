<template>
  <div class='cc-echart'>
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref, watchEffect, PropType } from 'vue'
import {EChartsOption} from 'echarts'
import useEchart from '../hook/use-echarts'
export default defineComponent({
   components: {

   },
   props: {
     options: {
       type: Object as PropType<EChartsOption>,
       required: true
     },
     width: {
       type: String,
       default: '100%'
     },
     height: {
       type: String,
       default: '360px'
     }
   },
   setup(props) {
     const echartDivRef = ref<HTMLElement>()
     onMounted(() => {
       const { setOptions } = useEchart(echartDivRef.value!)

       watchEffect(() => {
         setOptions(props.options)
       })
     })
     return {
       echartDivRef
     }
   }
})
</script>
<style scoped lang='less'>
</style>
