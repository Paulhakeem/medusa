import './assets/main.css'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)




const app = createApp(App)
const pinia = createPinia()


app.use(Vue3Toastify, {
    autoClose: 3000,
  });
app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
