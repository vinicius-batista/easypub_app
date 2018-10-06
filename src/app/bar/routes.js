export default [
  {
    name: 'home.bars',
    path: '/',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bars')
  },
  {
    name: 'home.bar',
    path: '/bar/:id',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bar'),
    props: true
  }
]
