import * as localforage from 'localforage'
import { ActionTree } from 'vuex'
import { AuthState } from '@/domains/auth/store/types'
import { RootState } from '@/services/store/types'

const actions: ActionTree<AuthState, RootState> = {
  setTokens ({ dispatch }, { accessToken, refreshToken }) {
    return Promise.all<string, string>([
      dispatch('setAccessToken', accessToken),
      dispatch('setRefreshToken', refreshToken)
    ])
  },
  setAccessToken ({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
    return localforage.setItem<string>('accessToken', accessToken)
  },
  setRefreshToken ({ commit }, refreshToken) {
    commit('setRefreshToken', refreshToken)
    return localforage.setItem<string>('refreshToken', refreshToken)
  },
  accessToken ({ state, commit }) {
    const { accessToken } = state
    if (accessToken) {
      return Promise.resolve(accessToken)
    }

    return localforage
      .getItem<string>('accessToken')
      .then((accessToken: string) => {
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
      .getItem<string>('refreshToken')
      .then((refreshToken: string) => {
        commit('setRefreshToken', refreshToken)
        return refreshToken
      })
  },
  isLogged ({ dispatch }) {
    return dispatch('refreshToken').then((refreshToken: string) => {
      if (refreshToken) {
        return Promise.resolve(refreshToken)
      }

      return Promise.reject(new Error('NO_TOKEN'))
    })
  }
}

export default actions
