declare module '@absinthe/socket' {
  import { GraphQLRequest } from 'apollo-link'
  import { Channel, Socket as PhoenixSocket } from 'phoenix'
  import { OperationTypeNode } from 'graphql'

  interface Observer<Result> {
    onAbort?: (error: Error) => any
    onCancel?: () => any
    onError?: (error: Error) => any
    onStart?: (notifier: Notifier<Result>) => any
    onResult?: (result: Result) => any
  }

  interface Notifier<Result> {
    observers: Observer<Result>[]
    operationType: OperationTypeNode
    request: GraphQLRequest
    subscriptionId?: string
  }

  export interface AbsintheSocket {
    channel: Channel
    channelJoinCreated: boolean
    notifiers: Notifier<any>[]
    phoenixSocket: PhoenixSocket
  }

  export function create(phoenixSocket: PhoenixSocket): AbsintheSocket
}
