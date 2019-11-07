import gql from 'graphql-tag'

export default gql`
  mutation CreateMenuCategory($input: CreateMenuCategoryInput!) {
    createMenuCategory(input: $input) {
      id
      name
    }
  }
`
