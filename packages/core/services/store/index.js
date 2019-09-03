import Vue from 'vue'
import Vuex from 'vuex'
import vuexpersistPlugin from './plugins/vuexpersist'

Vue.use(Vuex)

export default modules =>
  new Vuex.Store({
    modules,
    plugins: [vuexpersistPlugin(Object.keys(modules))],
  })
