import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/maceio',
      name: 'maceio',
      props: true,
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/salvador',
      name: 'salvador',
      props: true,
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
