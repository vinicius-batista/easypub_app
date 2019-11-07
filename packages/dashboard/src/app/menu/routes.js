export default [
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "menu" */ './views/Menu'),
    meta: {
      requiresAuth: true,
    },
  },
]
