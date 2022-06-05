import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DatasetsView from '../views/DatasetsView.vue'
import ConnectionsView from '../views/ConnectionsView.vue'
import MyComponents from '../components/HomeViewUI/MyComponents/MyComponents.vue'
import ConnectionHistory from '../components/ConnectionsViewUI/ConnectionHistory.vue'
import DataspacesOverview from '../components/ConnectionsViewUI/DataspacesOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: "/mycomponents",
      children: [
        {
          path: "/mycomponents",
          component: MyComponents,
          name: MyComponents,
        },
      ],
    },
    {
      path: '/datasets',
      name: 'datasets',
      component: DatasetsView
    },
    {
      path: '/connections',
      name: 'connections',
      component: ConnectionsView,
      redirect: "/connections-history",
      children: [
        {
          path: "/connections-history",
          component: ConnectionHistory,
          name: ConnectionHistory,
        },
        {
          path: "/dataspaces-overview",
          component: DataspacesOverview,
          name: DataspacesOverview,
        },

      ],
    },
  ]
})

export default router
