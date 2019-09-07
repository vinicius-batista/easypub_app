export default [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home'),
    meta: {
      requiresAuth: true,
    },
  },
]
