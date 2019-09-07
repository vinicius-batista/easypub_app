import gql from 'graphql-tag'

export default gql`
  query FetchBarProfile {
    profile {
      id
      bar {
        id
        name
        avatar
        status
      }
    }
  }
`
