import gql from 'graphql-tag'

export default gql`
  mutation CreateTable($input: CreateTableInput!) {
    createTable(input: $input) {
      id
      number
    }
  }
`
