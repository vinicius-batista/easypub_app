import gql from 'graphql-tag'

export default gql`
  query FetchMenuItems($categoryId: String!) {
    menuItems(categoryId: $categoryId) {
      id
      name
      price
      photo
      description
    }
  }
`
