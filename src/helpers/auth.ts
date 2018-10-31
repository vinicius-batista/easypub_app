import { assocPath, curry, prop } from 'ramda'
import jwtdecode from 'jwt-decode'
import { GraphQLRequest } from 'apollo-link'

export const authHeader = curry((request: GraphQLRequest, token: string) => assocPath(
  ['headers', 'authorization'],
  `Bearer ${token}`,
  request
))

export function isExpired (time: string) {
  const now = new Date()
  const nowUTC = (Math.floor(now.getTime() / 1000) + now.getTimezoneOffset() * 60)

  const timeDate = new Date(Number(time) * 1000)
  const timeUTC = (Math.floor(timeDate.getTime() / 1000) + timeDate.getTimezoneOffset() * 60)

  return timeUTC - nowUTC < 0.0
}

interface JWTToken {
  exp: string
}

export function checkTokenExpired (token: string) {
  const tokenDecoded = jwtdecode<JWTToken>(token)

  return isExpired(prop('exp', tokenDecoded))
}
