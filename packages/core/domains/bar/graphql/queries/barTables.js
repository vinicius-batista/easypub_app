import gql from 'graphql-tag'

export default gql`
  query FetchBarTables {
    profile {
      id
      bar {
        id
        name
        avatar
        status
        tables {
          id
          number
        }
      }
    }
  }
`
