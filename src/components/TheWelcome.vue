<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import HowToGoIcon from './icons/IconHowToGo.vue'
import WhereToStayIcon from './icons/IconWhereToStay.vue'
import ExploreIcon from './icons/IconExplore.vue'
import FoodPlaceIcon from './icons/IconFoodPlace.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import Modal from './Modal.vue'

const modalRef: Ref<InstanceType<typeof Modal> | null> = ref(null)
const modalTitle = ref('')
const modalContent = ref('')

const openModal = (title: string, content: string) => {
  modalTitle.value = title
  modalContent.value = content
  modalRef.value?.showModal()
}
</script>
<template>
  <div v-if="$route.name != 'home'">
    <WelcomeItem @click="openModal('Como Chegar', String($route.name))">
      <template #icon>
        <HowToGoIcon />
      </template>
      <template #heading>Como Chegar</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre como chegar ao seu destino, incluindo opções de
        transporte público, táxis e aplicativos de transporte.
      </template>
    </WelcomeItem>

    <WelcomeItem @click="openModal('Onde Ficar', String($route.name))">
      <template #icon>
        <WhereToStayIcon />
      </template>
      <template #heading>Onde Ficar</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre onde ficar, incluindo opções de hospedagem e
        recomendações de locais para se hospedar.
      </template>
    </WelcomeItem>

    <WelcomeItem @click="openModal('O Que Fazer', String($route.name))">
      <template #icon>
        <ExploreIcon />
      </template>
      <template #heading>O Que Fazer</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre o que fazer, incluindo atrações turísticas e
        atividades recomendadas.
      </template>
    </WelcomeItem>

    <WelcomeItem @click="openModal('Onde Comer', String($route.name))">
      <template #icon>
        <FoodPlaceIcon />
      </template>
      <template #heading>Onde Comer</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre onde comer, incluindo opções de restaurantes e
        recomendações de locais para comer.
      </template>
    </WelcomeItem>
    <Modal ref="modalRef" :title="modalTitle" :content="modalContent" />
  </div>
  <div v-else>
    <p></p>
  </div>
</template>
