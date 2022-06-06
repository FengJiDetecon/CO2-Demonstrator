import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DatasetsView from '../views/DatasetsView.vue'
import ConnectionsView from '../views/ConnectionsView.vue'
import MyComponents from '../components/HomeViewUI/MyComponents/MyComponents.vue'
import ConnectionHistory from '../components/ConnectionsViewUI/ConnectionHistory.vue'
import DataspacesOverview from '../components/ConnectionsViewUI/DataspacesOverview.vue'
import DataDetails from '../components/DatasetsViewUI/DataDetails.vue'
import ConnectedDatasets from '../components/DatasetsViewUI/ConnectedDatasets.vue'
import DataOverview from '../components/DatasetsViewUI/DataOverview.vue'

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
          path: "mycomponents",
          component: MyComponents,
          name: MyComponents,
        },
      ],
    },
    {
      path: '/datasets',
      name: 'datasets',
      redirect: "/datasets/connected-datasets",
      component: DatasetsView,
      children: [
        {
          path: "data-details",
          component: DataDetails,
          name: DataDetails,
        },
        {
          path: "connected-datasets",
          component: ConnectedDatasets,
          name: ConnectedDatasets,
        },
        {
          path: "data-overview",
          component: DataOverview,
          name: DataOverview,
        },

      ],
    },
    {
      path: '/connections',
      name: 'connections',
      component: ConnectionsView,
      redirect: "/connections/connections-history",
      children: [
        {
          path: "connections-history",
          component: ConnectionHistory,
          name: ConnectionHistory,
        },
        {
          path: "dataspaces-overview",
          component: DataspacesOverview,
          name: DataspacesOverview,
        },

      ],
    },
  ]
})

export default router
