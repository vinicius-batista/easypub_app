import { Mutation, MutationTree } from 'vuex'
import { AuthState } from '@/domains/auth/store/types'

const mutations: MutationTree<AuthState> = {
  setAccessToken (state, accessToken) {
    state.accessToken = accessToken
  },
  setRefreshToken (state, refreshToken) {
    state.refreshToken = refreshToken
  }
}

export default mutations
