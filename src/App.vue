<script setup lang="ts">
import City from './components/City.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Objeto com os backgrounds para cada rota
const backgrounds = {
  home: 'src/assets/backgrounds/default.webp',
  salvador: 'src/assets/backgrounds/salvador.webp',
  maceio: 'src/assets/backgrounds/maceio.webp',
}

const updateBackground = () => {
  const imagePath =
    route.name && backgrounds[route.name as keyof typeof backgrounds]
      ? backgrounds[route.name as keyof typeof backgrounds]
      : 'src/assets/backgrounds/default.webp'
  document.body.style.backgroundImage = `url(${imagePath})`
}

// Assistindo mudanças de rota para atualizar o background
watch(() => route.name, updateBackground)

// Atualiza o background ao carregar
updateBackground()
</script>

<template>
  <header>
    <div class="wrapper">
      <City msg="Bem vindo(a)" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/salvador">Salvador</RouterLink>
        <RouterLink to="/maceio">Maceió</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
