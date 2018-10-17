import Vue from 'vue'

/** PLUGINS */
import './plugins/vuetify'
import './plugins/veevalidate'
import './plugins/filters'
import vueAnalytics from './plugins/vue-analytics'
import syncRouter from './plugins/vuex-router-sync'

import App from './App.vue'
import { router, store, apollo } from './services'
import './registerServiceWorker'

vueAnalytics(router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: apollo,
  render: h => h(App),
  mounted () {
    syncRouter(store, router)
  }
}).$mount('#app')
