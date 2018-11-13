import { curry } from 'ramda'

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
