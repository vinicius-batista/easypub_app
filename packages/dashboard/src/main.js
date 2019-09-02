import Vue from 'vue'
import App from './App.vue'
import router from './services/router'
import store from './services/store'
import './registerServiceWorker'

// plugins
import vuetify from './plugins/vuetify'
import './plugins/veevalidate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
