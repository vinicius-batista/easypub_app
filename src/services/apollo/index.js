import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient } from './createClient'

Vue.use(VueApollo)

const options = {
  httpEndpoint:
    process.env.VUE_APP_GRAPHQL_ENDPOINT || 'https://localhost:4443/graphql',
  socketEndpoint:
    process.env.VUE_APP_GRAPHQL_SOCKET_ENDPOINT || 'ws://localhost:4433/socket'
}

export default new VueApollo({
  defaultClient: createApolloClient(options)
})
