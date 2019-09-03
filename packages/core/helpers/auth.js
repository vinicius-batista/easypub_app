import { assocPath, curry, prop } from 'ramda'

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

export function parseJwt(token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  return JSON.parse(window.atob(base64))
}

export function checkTokenExpired(token) {
  const tokenDecoded = parseJwt(token)

  return isExpired(prop('exp', tokenDecoded))
}
