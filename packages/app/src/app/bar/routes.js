export default [
  {
    name: 'home.bars',
    path: '/home',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bars'),
  },
  {
    name: 'home.bar',
    path: '/home/bar/:id',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bar'),
    props: true,
  },
  {
    name: 'home.menuitem',
    path: '/home/bar/menu-item/:id',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "home-bar" */ './views/MenuItem'),
    props: true,
  },
]
