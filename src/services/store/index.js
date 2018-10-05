import Vue from 'vue'
import Vuex from 'vuex'
import { authStore } from '@/app/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authStore
  }
})
