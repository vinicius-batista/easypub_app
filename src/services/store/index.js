import Vue from 'vue'
import Vuex from 'vuex'
import { authStore } from '@/domains/auth'
import { homeStore } from '@/domains/home'
import { orderStore } from '@/domains/order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authStore,
    home: homeStore,
    order: orderStore
  }
})
