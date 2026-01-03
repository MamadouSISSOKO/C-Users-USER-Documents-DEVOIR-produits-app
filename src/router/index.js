import { createRouter, createWebHistory } from 'vue-router'
import ProduitsView from '../views/ProduitsView.vue'

const routes = [
  {
    path: '/',
    name: 'Produits',
    component: ProduitsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
