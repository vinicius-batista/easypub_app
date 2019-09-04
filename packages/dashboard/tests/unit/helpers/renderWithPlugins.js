import { render } from '@testing-library/vue'
import '../plugins/veevalidate'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)
Vue.use(Vuetify)

function renderWithPlugins(Component, options, callback) {
  const vuetify = new Vuetify()
  const defaultOptions = {
    sync: false,
    vuetify,
  }
  return render(Component, { ...defaultOptions, ...options }, callback)
}

export default renderWithPlugins
