import * as AbsintheSocket from '@absinthe/socket'
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link'
import { ApolloLink, Operation, NextLink } from 'apollo-link'
import { Socket as PhoenixSocket } from 'phoenix'
import store from '../store'
import { equals, prop } from 'ramda'

const createPhoenixSocket = (url: string, accessToken: string) =>
  // @ts-ignore
  new PhoenixSocket(url, {
    reconnect: true,
    params: {
      Authorization: accessToken
    }
  })

const createAbsSocketLink = (phoenixSocket: PhoenixSocket) => {
  const absintheSocket = AbsintheSocket.create(phoenixSocket)
  return createAbsintheSocketLink(absintheSocket)
}

const createBearerToken = (accessToken: string) => `Bearer ${accessToken}`

interface ISocketLinkConstructor {
  url: string
}

class SocketLink extends ApolloLink {
  url: string
  accessToken: string = ''
  socket!: PhoenixSocket
  link!: ApolloLink

  constructor ({ url }: ISocketLinkConstructor) {
    super()
    this.url = url

    store
      .dispatch('auth/accessToken')
      .then(createBearerToken)
      .then(accessToken => {
        this.accessToken = accessToken
        this.socket = createPhoenixSocket(url, accessToken)
        this.link = createAbsSocketLink(this.socket)
      })
  }

  request (operation: Operation, forward: NextLink) {
    const { authorization } = prop('headers', operation.getContext())
    if (equals(authorization, this.accessToken)) {
      return this.link.request(operation, forward)
    }

    this.accessToken = authorization
    this.socket.disconnect()
    this.socket = createPhoenixSocket(this.url, authorization)
    this.link = createAbsSocketLink(this.socket)

    return this.link.request(operation, forward)
  }
}

export const createSocketLink = (url: string) => new SocketLink({ url })
