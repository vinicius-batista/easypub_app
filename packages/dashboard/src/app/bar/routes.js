export default [
  {
    path: '/bar',
    name: 'bar.profile',
    component: () => import(/* webpackChunkName: "bar" */ './views/BarProfile'),
    meta: {
      requiresAuth: true,
    },
  },
]
