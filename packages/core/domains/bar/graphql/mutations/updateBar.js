import gql from 'graphql-tag'

export default gql`
  mutation UpdateBar($input: UpdateBarInput!) {
    updateBar(input: $input) {
      id
      status
      name
      avatar
    }
  }
`
