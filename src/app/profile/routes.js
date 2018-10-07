export default [
  {
    name: 'home.profile',
    path: '/profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "profile" */ './views/Profile')
  }
]
