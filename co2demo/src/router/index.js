import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DatasetsView from '../views/DatasetsView.vue'
import ConnectionsView from '../views/ConnectionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/datasets',
      name: 'datasets',
      component: DatasetsView
    },
    {
      path: '/connections',
      name: 'connections',
      component: ConnectionsView
    },
  ]
})

export default router
