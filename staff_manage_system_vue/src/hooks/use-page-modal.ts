import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import CreateModal from '@/components/page-modal/creat-modal.vue'
import EditModal from '@/components/page-modal/edit-modal.vue'
import MenuModal from '@/components/page-modal/menu-modal.vue'

export function createPageModal() {
  const createModalRef = ref<InstanceType<typeof CreateModal>>()
  const createDefaultInfo = ref({})
  const handleNewClick = () => {
    createDefaultInfo.value = {}
    if(createModalRef.value) {
      createModalRef.value.dialogTableVisible = true
    }
  }
  return [createModalRef, createDefaultInfo, handleNewClick]
}

export function editPageModal() {
  const editModalRef = ref<InstanceType<typeof EditModal>>()
  const editDefaultInfo = ref({})
  const handleEditClick = (item: any) => {
    editDefaultInfo.value = { ...item }
    if(editModalRef.value) {
      editModalRef.value.dialogTableVisible = true
    }
  }
  return [editModalRef, editDefaultInfo, handleEditClick]
}



