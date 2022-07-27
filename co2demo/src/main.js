import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'
import main from './main.vue'

const app = createApp(main)

app.use(router)

app.mount('#app')
