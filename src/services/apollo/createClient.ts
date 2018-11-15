import { ApolloClient } from 'apollo-client'
import { createSocketLink } from '@/services/apollo/createSocketLink'
import { withAuthToken } from '@/services/apollo/authContext'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { hasSubscription } from '@/helpers/graphql'
import { createLink } from 'apollo-absinthe-upload-link'

interface ICreateClientOpts {
  httpEndpoint: string
  socketEndpoint: string
}

export const createApolloClient = ({
  httpEndpoint,
  socketEndpoint
}: ICreateClientOpts) => {
  const httpLink = createLink({ uri: httpEndpoint })
  const wsLink = createSocketLink(socketEndpoint)

  const link = ApolloLink.split(
    operation => hasSubscription(operation.query),
    wsLink,
    httpLink
  )

  const authLink = ApolloLink.from([withAuthToken, link])

  return new ApolloClient({
    link: authLink,
    cache: new InMemoryCache()
  })
}
