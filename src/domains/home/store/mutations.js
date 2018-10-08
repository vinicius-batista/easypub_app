export default {
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
