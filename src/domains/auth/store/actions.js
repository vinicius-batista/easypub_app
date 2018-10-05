import localforage from 'localforage'

export default {
  setTokens ({ dispatch }, { accessToken, refreshToken }) {
    return Promise.all([
      dispatch('setAccessToken', accessToken),
      dispatch('setRefreshToken', refreshToken)
    ])
  },
  setAccessToken ({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
    return localforage.setItem('accessToken', accessToken)
  },
  setRefreshToken ({ commit }, refreshToken) {
    commit('setRefreshToken', refreshToken)
    return localforage.setItem('refreshToken', refreshToken)
  },
  accessToken ({ state, commit }) {
    const { accessToken } = state
    if (accessToken) {
      return Promise.resolve(accessToken)
    }

    return localforage
      .getItem('accessToken')
      .then(accessToken => {
        commit('setAccessToken', accessToken)
        return accessToken
      })
  },
  refreshToken ({ state, commit }) {
    const { refreshToken } = state
    if (refreshToken) {
      return Promise.resolve(refreshToken)
    }

    return localforage
      .getItem('refreshToken')
      .then(refreshToken => {
        commit('setRefreshToken', refreshToken)
        return refreshToken
      })
  },
  isLogged ({ dispatch }) {
    return dispatch('refreshToken')
      .then(refreshToken => {
        if (refreshToken) {
          return refreshToken
        }

        return Promise.reject(new Error('NO_TOKEN'))
      })
  }
}
