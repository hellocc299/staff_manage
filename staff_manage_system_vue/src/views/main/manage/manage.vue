<template>
  <div class='manage'>
  <page-search :searchFormConfig="searchFormConfig"
               @searchBtnClick="handleQueryClick"
               @resetBtnClick="handleResetClick"></page-search>
  <page-content :contentTableConfig="contentTableConfig"
                ref="pageContentRef"
                @newBtnClick="handleNewClick"
                @editBtnClick="handleEditClick">
  </page-content>
  <create-modal ref="createModalRef"
                :createModalConfig="createModalConfig"
                :createDefaultInfo="createDefaultInfo"></create-modal>
  </div>
  <edit-modal ref="editModalRef"
              :editModalConfig="editModalConfig"
              :editDefaultInfo="editDefaultInfo"></edit-modal>
</template>

<script lang='ts'>
import {searchFormConfig} from './configs/search.config'
import { contentTableConfig } from './configs/content.config'
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import {usePageSearch} from '@/hooks/use-page-search'
import CreateModal from '@/components/page-modal/creat-modal.vue'
import {createModalConfig} from './configs/create-modal.config'
import EditModal from '@/components/page-modal/edit-modal.vue'
import {createPageModal, editPageModal} from '@/hooks/use-page-modal'
import { editModalConfig } from './configs/edit-modal.config'

export default defineComponent({
   components: {
      PageSearch,
      PageContent,
      CreateModal,
      EditModal
   },
   setup() {
     const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
     const [createModalRef, createDefaultInfo, handleNewClick] = createPageModal()
     const [editModalRef, editDefaultInfo, handleEditClick] = editPageModal()

     return {
       searchFormConfig,
       contentTableConfig,
       pageContentRef,
       handleResetClick,
       handleQueryClick,
       handleEditClick,
       handleNewClick,
       createModalConfig,
       createModalRef,
       createDefaultInfo,
       editModalConfig,
       editModalRef,
       editDefaultInfo
     }
   }
})
</script>
<style scoped lang='less'>
</style>
