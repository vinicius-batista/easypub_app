export default [
  {
    path: '/auth/login',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "auth" */ './views/Login'),
  },
  {
    path: '/auth/register',
    name: 'auth.register',
    component: () => import(/* webpackChunkName: "auth" */ './views/Register'),
  },
]
