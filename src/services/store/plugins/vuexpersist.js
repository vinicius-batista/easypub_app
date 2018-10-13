import VuexPersist from 'vuex-persist'
import localforage from 'localforage'

const vuexLocal = new VuexPersist({
  storage: localforage,
  asyncStorage: true,
  modules: ['home', 'order']
})

export default vuexLocal.plugin
