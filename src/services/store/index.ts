import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { authStore } from '@/domains/auth'
import { homeStore } from '@/domains/home'
import { orderStore } from '@/domains/order'
import vuexpersistPlugin from '@/services/store/plugins/vuexpersist'
import { RootState } from './types'

Vue.use(Vuex)

const options: StoreOptions<RootState> = {
  modules: {
    auth: authStore,
    home: homeStore,
    order: orderStore
  },
  plugins: [vuexpersistPlugin]
}

export default new Vuex.Store<RootState>(options)
