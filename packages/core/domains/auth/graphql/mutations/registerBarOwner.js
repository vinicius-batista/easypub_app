import gql from 'graphql-tag'

export default gql`
  mutation RegisterBarOwner($input: RegisterBarOwnerInput!) {
    registerBarOwner(input: $input) {
      accessToken
      refreshToken
    }
  }
`
