import state from '@/domains/auth/store/state'
import mutations from '@/domains/auth/store/mutations'
import actions from '@/domains/auth/store/actions'
import { Module } from 'vuex'
import { AuthState } from '@/domains/auth/store/types'
import { RootState } from '@/services/store/types'

const module: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default module
