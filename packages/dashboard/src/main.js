import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

/** PLUGINS */
import vuetify from './plugins/vuetify'
import './plugins/veevalidate'

/** SERVICES */
import {
  apolloFactory,
  routerFactory,
  storeFactory,
} from '@easypub/core/services'
import { routes } from '@/app'
import { modules } from '@/domains/store'

const store = storeFactory(modules)
const apolloProvider = apolloFactory(store)
const router = routerFactory(routes, store)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
