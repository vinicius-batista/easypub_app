import { MutationTree } from 'vuex'
import { HomeState } from '@/domains/home/store/types'

const mutations: MutationTree<HomeState> = {
  setTitle (state, title) {
    state.title = title
  },
  showBackButton (state) {
    state.isBackButtonVisible = true
  },
  hiddenBackButton (state) {
    state.isBackButtonVisible = false
  }
}

export default mutations
