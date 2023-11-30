import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import jQuery from 'jquery'

import '@/style.scss'

const app = createApp(App)
const $ = jQuery
window.$ = $

app.use(router)

app.mount('#app')
