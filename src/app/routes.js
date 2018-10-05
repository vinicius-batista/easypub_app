import { mainRoutes } from './main'
import { authRoutes } from './auth'

export default [
  ...mainRoutes,
  ...authRoutes,
  {
    name: 'home',
    path: '/home/',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './home/views/Home'),
    children: []
  }
]
