export default [
  {
    path: '/auth/login',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "auth" */ './views/Login'),
  },
]
