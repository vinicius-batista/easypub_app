import { curry } from 'ramda'
import { DocumentNode } from 'graphql'

export const getData = curry(
  (path: string, response: any) => response.data[path]
)

const endpoint =
  process.env.VUE_APP_GRAPHQL_ENDPOINT || 'http://0.0.0.0:4000/graphql'

export const graphqlRequest = (query: string, variables: object) =>
  fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables }),
    method: 'POST'
  }).then(response => response.json())

export function hasSubscription (documentNode: DocumentNode) {
  return documentNode.definitions.some(
    definition =>
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
  )
}
