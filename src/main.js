import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { router, store } from './services'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
