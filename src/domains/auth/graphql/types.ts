interface AuthTokens {
  accessToken: string,
  refreshToken: string
}

export interface LoginUserMutation {
  loginUser: AuthTokens
}

export interface RegisterUserMutation {
  registerUser: AuthTokens
}
