import { MutationTree } from 'vuex'
import { OrderState } from '@/domains/order/store/types'

const mutations: MutationTree<OrderState> = {
  setTableId (state, tableId) {
    state.tableId = tableId
  }
}

export default mutations
