import state from '@/domains/order/store/state'
import mutations from '@/domains/order/store/mutations'
import { OrderState } from '@/domains/order/store/types'
import { RootState } from '@/services/store/types'
import { Module } from 'vuex'

const module: Module<OrderState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default module
