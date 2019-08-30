export default [
  {
    name: 'orders',
    path: '/orders',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "orders" */ './views/Orders'),
  },
  {
    name: 'orders.detail',
    path: '/orders/detail/:id',
    props: true,
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "orders" */ './views/Order'),
  },
  {
    name: 'orders.feedback',
    path: '/orders/feedback/:orderId',
    props: true,
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "orders" */ './views/Feedback'),
  },
]
