import Vue from 'vue'
import './plugins/vuetify'
import './plugins/veevalidate'
import App from './App.vue'
import { router, store, apollo } from './services'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: apollo,
  render: h => h(App)
}).$mount('#app')
