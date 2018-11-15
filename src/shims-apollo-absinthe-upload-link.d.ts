declare module 'apollo-absinthe-upload-link' {
  import { ApolloLink } from 'apollo-link'
  function createLink(opts: any): ApolloLink

  export { createLink }
}
