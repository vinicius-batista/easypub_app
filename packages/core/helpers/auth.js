import { assocPath, curry, pipe, prop } from 'ramda'
import jwtdecode from 'jwt-decode'

export const authHeader = curry((request, token) =>
  assocPath(['headers', 'authorization'], `Bearer ${token}`, request)
)

export function isExpired(time) {
  const now = new Date()
  const nowUTC = Math.floor(now.getTime() / 1000) + now.getTimezoneOffset() * 60

  const timeDate = new Date(time * 1000)
  const timeUTC =
    Math.floor(timeDate.getTime() / 1000) + timeDate.getTimezoneOffset() * 60

  return timeUTC - nowUTC < 0.0
}

export const checkTokenExpired = pipe(
  jwtdecode,
  prop('exp'),
  isExpired
)
