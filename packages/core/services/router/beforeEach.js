export default store => (to, from, next) => {
  const { requiresAuth } = to.meta
  const storePath = store.state.route && store.state.route.path

  if (storePath !== to.path && to.path === from.path) {
    return next(storePath)
  }

  return store
    .dispatch('auth/isLogged')
    .then(() => (requiresAuth ? next() : next({ name: 'home.bars' })))
    .catch(() => (requiresAuth ? next({ name: 'auth.login' }) : next()))
}
