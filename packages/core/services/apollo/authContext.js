import { setContext } from 'apollo-link-context'
import { graphqlRequest, getData } from '../../helpers/graphql'
import newAccessTokenQuery from './newAccessTokenQuery'
import { authHeader, checkTokenExpired } from '../../helpers/auth'
import { prop } from 'ramda'

export function withAuthToken(store) {
  const newAccessToken = request =>
    store
      .dispatch('auth/refreshToken')
      .then(refreshToken =>
        graphqlRequest(newAccessTokenQuery, { refreshToken })
      )
      .then(getData('newAccessToken'))
      .then(prop('accessToken'))
      .then(accessToken => store.dispatch('auth/setAccessToken', accessToken))
      .then(authHeader(request))
      .catch(() => request)

  return setContext(request => {
    return store
      .dispatch('auth/accessToken')
      .then(accessToken => {
        if (!accessToken) {
          return request
        }

        if (accessToken && !checkTokenExpired(accessToken)) {
          return authHeader(request, accessToken)
        }

        return newAccessToken(request)
      })
      .catch(() => request)
  })
}
