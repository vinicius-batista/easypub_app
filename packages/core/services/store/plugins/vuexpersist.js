import VuexPersist from 'vuex-persist'

export default function(modules) {
  const vuexLocal = new VuexPersist({
    modules,
  })

  return vuexLocal.plugin
}
