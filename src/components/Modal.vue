<template>
  <div
    class="modal fade"
    id="genericModal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div v-if="content === 'salvador'">
            <InSalvador :title="title" />
          </div>
          <div v-else-if="content === 'maceio'">
            <InMaceio :title="title" />
          </div>
        </div>
        <div class="modal-footer border-secondary">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineExpose, onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'
import { useRoute } from 'vue-router'
import InMaceio from './arrive/InMaceio.vue'
import InSalvador from './arrive/InSalvador.vue'
const props = defineProps({
  title: String,
  content: String,
})
const route = useRoute()
const modalInstance = ref(null)
const modalTitle = ref('')
const modalContent = ref('')

onMounted(() => {
  const modalElement = document.getElementById('genericModal')
  if (modalElement) {
    modalInstance.value = new Modal(modalElement)
  }
})

defineExpose({
  showModal: (title, content) => {
    modalTitle.value = title
    modalContent.value = content
    modalInstance.value?.show()
  },
})
</script>
