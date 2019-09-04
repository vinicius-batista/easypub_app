import gql from 'graphql-tag'

export default gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      accessToken
      refreshToken
    }
  }
`
