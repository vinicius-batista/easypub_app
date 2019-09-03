import Vue from 'vue'

/** PLUGINS */
import vuetify from './plugins/vuetify'
import './plugins/veevalidate'
import './plugins/filters'
import vueAnalytics from './plugins/vue-analytics'
import syncRouter from './plugins/vuex-router-sync'

import App from './App.vue'
import Loading from './components/Loading'
import './registerServiceWorker'

/** SERVICES */
import {
  routerFactory,
  storeFactory,
  apolloFactory,
} from '@easypub/core/services'

import { routes } from '@/app'
import { modules } from '@/domains/store'

const store = storeFactory(modules)
const router = routerFactory(routes, store)
const apolloProvider = apolloFactory(store)

vueAnalytics(router)

Vue.config.productionTip = false
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: h => h(App),
  mounted() {
    syncRouter(store, router)
  },
}).$mount('#app')
