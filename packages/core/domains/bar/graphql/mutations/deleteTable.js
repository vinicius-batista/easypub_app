import gql from 'graphql-tag'

export default gql`
  mutation DeleteTable($id: String!) {
    deleteTable(id: $id) {
      id
    }
  }
`
