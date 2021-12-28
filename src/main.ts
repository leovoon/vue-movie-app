// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import routes from 'virtual:generated-pages'
import TDesign from 'tdesign-vue-next'
import VueLazyLoad from 'vue3-lazyload'

import App from './App.vue'

import 'tdesign-vue-next/es/style/index.css'
import './styles/main.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router).use(TDesign).use(createPinia()).use(VueLazyLoad)
app.mount('#app')
