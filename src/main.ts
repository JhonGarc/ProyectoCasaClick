import '@/assets/sass/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import PrimeVue from './plugins/prime'

import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'primevue/resources/themes/saga-blue/theme.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(PrimeVue)
app.mount('#app')
