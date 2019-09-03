import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient } from './createClient'

Vue.use(VueApollo)

const options = {
  httpEndpoint:
    process.env.VUE_APP_GRAPHQL_ENDPOINT || 'https://localhost:4443/graphql',
  socketEndpoint:
    process.env.VUE_APP_GRAPHQL_SOCKET_ENDPOINT ||
    'wss://localhost:4433/socket',
}

export default store =>
  new VueApollo({
    defaultClient: createApolloClient(store, options),
  })
