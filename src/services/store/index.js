import Vue from 'vue'
import Vuex from 'vuex'
import { authStore } from '@/domains/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authStore
  }
})
