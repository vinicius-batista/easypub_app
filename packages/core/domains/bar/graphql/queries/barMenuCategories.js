import gql from 'graphql-tag'

export default gql`
  query FetchBarMenuCategories {
    profile {
      id
      bar {
        id
        menuCategories {
          id
          name
        }
      }
    }
  }
`
