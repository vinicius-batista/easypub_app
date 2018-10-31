import Vue from 'vue'

/** PLUGINS */
import './plugins/vuetify'
import './plugins/veevalidate'
import './plugins/filters'
import vueAnalytics from './plugins/vue-analytics'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import Loading from './components/Loading.vue'
import { router, store, apollo } from './services'
import './registerServiceWorker'

vueAnalytics(router)

Vue.config.productionTip = false
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  apolloProvider: apollo,
  render: h => h(App),
  mounted () {
    sync(store, router)
  }
}).$mount('#app')
