import gql from 'graphql-tag'

export default gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      accessToken
      refreshToken
    }
  }
`
