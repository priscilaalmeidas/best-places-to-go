<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import HowToGoIcon from './icons/IconHowToGo.vue'
import WhereToStayIcon from './icons/IconWhereToStay.vue'
import ExploreIcon from './icons/IconExplore.vue'
import FoodPlaceIcon from './icons/IconFoodPlace.vue'
import InSalvador from './arrive/InSalvador.vue'
import InMaceio from './arrive/InMaceio.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
//criar um método para abrir modal
const openModal = (routeName: any) => {
  let component
  if (routeName === 'salvador') {
    component = InSalvador
  } else if (routeName === 'maceio') {
    component = InMaceio
  }
  // Aqui você pode abrir o modal com o componente desejado
  // Por exemplo, usando um plugin de modal ou uma biblioteca de UI
  console.log('Abrindo modal com componente:', component)
}
</script>
<template>
  <div v-if="$route.name != 'home'">
    <WelcomeItem @click="openModal($route.name)">
      <template #icon>
        <HowToGoIcon />
      </template>
      <template #heading>Como Chegar</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre como chegar ao seu destino, incluindo opções de
        transporte público, táxis e aplicativos de transporte.
      </template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <WhereToStayIcon />
      </template>
      <template #heading>Onde Ficar</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre onde ficar, incluindo opções de hospedagem e
        recomendações de locais para se hospedar.
      </template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ExploreIcon />
      </template>
      <template #heading>O Que Fazer</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre o que fazer, incluindo atrações turísticas e
        atividades recomendadas.
      </template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <FoodPlaceIcon />
      </template>
      <template #heading>Onde Comer</template>
      <template v-if="$route.name != 'home'">
        Aqui você encontrará informações sobre onde comer, incluindo opções de restaurantes e
        recomendações de locais para comer.
      </template>
    </WelcomeItem>
  </div>
  <div v-else>
    <p></p>
  </div>
</template>
