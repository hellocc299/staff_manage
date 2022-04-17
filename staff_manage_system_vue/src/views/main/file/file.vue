<template>
  <div class='file'>
    <cc-description :descriConfigList="descriConfigList" :userInfo="userInfo" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import ccDescription from '@/base-ui/description/src/description.vue'
import {descriConfigList} from './configs/descri.config'
import { useStore } from 'vuex'
export default defineComponent({
   components: {
     ccDescription
   },
   setup() {
     const store = useStore()
     const userInfo = computed(() => store.state.login.userInfo)
     console.log(userInfo);

     return {
       descriConfigList,
       userInfo
     }
   }
})
</script>
<style scoped lang='less'>
</style>
