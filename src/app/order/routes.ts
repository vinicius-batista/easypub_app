import { RouteConfig } from 'vue-router'
import { getDefault } from '@/helpers/get'

const routes: RouteConfig[] = [
  {
    name: 'orders',
    path: '/orders',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "orders" */ './views/Orders.vue').then(getDefault)
  },
  {
    name: 'orders.detail',
    path: '/orders/detail/:id',
    props: true,
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "orders" */ './views/Order.vue').then(getDefault)
  },
  {
    name: 'orders.feedback',
    path: '/orders/feedback/:orderId',
    props: true,
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "orders" */ './views/Feedback.vue').then(getDefault)
  }
]

export default routes
