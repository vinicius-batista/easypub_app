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
  },
  {
    name: 'home.menuitem',
    path: '/bar/menu-item/:id',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/ItemDetails'),
    props: true
  }
]
