import VuexPersist from 'vuex-persist'

const vuexLocal = new VuexPersist({
  modules: ['home', 'order', 'route']
})

export default vuexLocal.plugin
