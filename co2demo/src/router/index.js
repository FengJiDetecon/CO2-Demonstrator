import { createRouter, createWebHistory } from 'vue-router'
import CO2DemoView from '../views/CO2DemoView.vue'
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
      path: '/co2-demonstrator',
      name: 'co2-home',
      component: CO2DemoView,
      children: [
        {
          path: "my-components",
          name: "my-components",
          component: MyComponents,
        },
        {
          path: "datasets",
          name: "datasets",
          component: DatasetsView,
          children: [
            {
              path: "data-details",
              name: "data-details",
              component: DataDetails,
            },
            {
              path: "connected-datasets",
              name: "connected-datasets",
              component: ConnectedDatasets,
            },
            {
              path: "data-overview",
              name: "data-overview",
              component: DataOverview,
            }
          ]
        },
        {
          path: "connections",
          name: "connections",
          component: ConnectionsView,
          redirect: {name: "connection-history"},
          children: [
            {
              path: "connection-history",
              name: "connection-history",
              component: ConnectionHistory,
            },
            {
              path: "dataspaces-overview",
              name: "dataspaces-overview",
              component: DataspacesOverview,
            }
          ]
        },
      ]
    },
    {
      path: '/co2-demonstrator/home',
      name: 'co2-my-components',
      component: HomeView,
      children: [
        {
          path: "/co2-demostrator/mycomponents",
          component: MyComponents,
          name: MyComponents,
        },
      ],
    },
    {
      path: '/datasets',
      name: 'co2-datasets',
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
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      redirect: '/home',
    }
  ]
})

export default router
