declare module '@absinthe/socket-apollo-link' {
  import { AbsintheSocket } from '@absinthe/socket'
  import { ApolloLink } from 'apollo-link'

  export function createAbsintheSocketLink(
    absintheSocket: AbsintheSocket
  ): ApolloLink
}
