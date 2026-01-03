import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

// 🔗 Base URL vers FakeStoreAPI
axios.defaults.baseURL = 'https://fakestoreapi.com'

app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount('#app')
