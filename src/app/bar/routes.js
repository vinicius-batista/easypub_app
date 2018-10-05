export default [
  {
    name: 'home.bars',
    path: '/',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bars')
  }
]
