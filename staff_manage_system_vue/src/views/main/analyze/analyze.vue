<template>
  <div class='analyze'>
    <el-row :gutter="10">
      <el-col :span="12">
        <cc-card :cardTitle="pieCardTitle">
          <pie-chart :pieData="departmentCount"></pie-chart>
          <bar-chart></bar-chart>
        </cc-card>
      </el-col>
      <el-col :span="12">
        <cc-card :cardTitle="barCardTitle">
          <bar-chart v-bind="recordCount"></bar-chart>
        </cc-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import ccCard from '@/base-ui/card/src/card.vue'
import PieChart from '@/components/page-echart/src/pie-chart.vue'
import BarChart from '@/components/page-echart/src/bar-chart.vue'
export default defineComponent({
   components: {
     ccCard,
     PieChart,
     BarChart
   },
   setup() {
     const pieCardTitle = "部门分布"
     const store = useStore()
     store.dispatch('analyze/getDepartmentCount')
     const departmentCount = computed(() => {
       return store.state.analyze.departmentCount.map((value: any, i: any) => {
         const key = Object.keys(value)
         const depKey = key[0]
         const depValue = value[depKey]
         return { name: depKey, value: depValue }
       })
     })

     const barCardTitle = "部门分布"
     store.dispatch('analyze/getRecordCount')
     const recordCount = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const recordCount = store.state.analyze.recordCount
      console.log(recordCount);

      for (const item of recordCount) {
        const key = Object.keys(item)
        const depKey = key[0]
        const depValue = item[depKey]
        xLabels.push(depKey)
        values.push(depValue)
      }
      return { xLabels, values }
    })
     return {
       pieCardTitle,
       departmentCount,
       barCardTitle,
       recordCount
     }
   }
})
</script>
<style scoped lang='less'>
</style>
