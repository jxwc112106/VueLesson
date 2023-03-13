import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
//全局引入
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.mount('#app')
