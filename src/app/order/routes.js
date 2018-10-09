export default [
  {
    name: 'home.orders',
    path: '/orders',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "orders" */ './views/Orders')
  }
]
