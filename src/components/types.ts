import { GraphQLError } from 'graphql'

export interface ErrorHandler {
  graphQLErrors: GraphQLError[]
}
