<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <template v-if="$route.name === 'home'">
      <h1 class="green">ao melhores lugares para ir - Brasil</h1>
      Selecione a cidade aqui embaixo para saber mais
    </template>
    <template v-else-if="$route.name === 'salvador'">
      <h1 class="green">à Salvador</h1>
      <h3>A cidade da música, do carnaval e do sol!</h3>
      <br />
    </template>
    <template v-else-if="$route.name === 'maceio'">
      <h1 class="green">à Maceió</h1>
      <h3>O caribe brasileiro!</h3>
      <br />
    </template>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
