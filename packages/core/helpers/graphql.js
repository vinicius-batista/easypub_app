import { prop, pipe, curry } from 'ramda'

export const getData = curry((path, response) =>
  pipe(
    prop('data'),
    prop(path)
  )(response)
)

const endpoint =
  process.env.VUE_APP_GRAPHQL_ENDPOINT || 'https://0.0.0.0:4443/graphql'

export const graphqlRequest = (query, variables) =>
  fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    method: 'POST',
  }).then(response => response.json())
