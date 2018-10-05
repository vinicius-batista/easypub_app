import store from '../store'

export default function (to, from, next) {
  const { requiresAuth } = to.meta

  return store
    .dispatch('auth/isLogged')
    .then(() =>
      requiresAuth
        ? next()
        : next({ name: 'home.bars' })
    )
    .catch(() =>
      requiresAuth
        ? next({ name: 'auth.login' })
        : next()
    )
}
