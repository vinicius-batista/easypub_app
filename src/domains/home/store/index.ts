import state from '@/domains/home/store/state'
import mutations from '@/domains/home/store/mutations'
import { Module } from 'vuex'
import { HomeState } from '@/domains/home/store/types'
import { RootState } from '@/services/store/types'

const module: Module<HomeState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default module
