import Vue from 'vue'

/** PLUGINS */
import vuetify from './plugins/vuetify'
import './plugins/veevalidate'
import './plugins/filters'
import vueAnalytics from './plugins/vue-analytics'
import syncRouter from './plugins/vuex-router-sync'

import App from './App.vue'
import Loading from './components/Loading'
import { router, store } from './services'
import './registerServiceWorker'
import { apollo } from '@easypub/core'

vueAnalytics(router)

Vue.config.productionTip = false
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  apolloProvider: apollo(store),
  vuetify,
  render: h => h(App),
  mounted() {
    syncRouter(store, router)
  },
}).$mount('#app')
