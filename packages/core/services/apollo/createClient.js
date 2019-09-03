import { ApolloClient } from 'apollo-client'
import { createSocketLink } from './createSocketLink'
import { withAuthToken } from './authContext'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { hasSubscription } from '@jumpn/utils-graphql'
import { createLink } from 'apollo-absinthe-upload-link'

export const createApolloClient = (store, { httpEndpoint, socketEndpoint }) => {
  const httpLink = createLink({ uri: httpEndpoint })
  const wsLink = createSocketLink(store, socketEndpoint)

  const link = ApolloLink.split(
    operation => hasSubscription(operation.query),
    wsLink,
    httpLink
  )

  const authLink = ApolloLink.from([withAuthToken(store), link])

  return new ApolloClient({
    link: authLink,
    cache: new InMemoryCache(),
  })
}
