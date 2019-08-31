export default [
  {
    path: '/auth/register',
    name: 'auth.register',
    component: () => import(/* webpackChunkName: "auth" */ './views/Register'),
  },
  {
    path: '/auth/login',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "auth" */ './views/Login'),
  },
]
