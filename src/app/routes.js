import { mainRoutes } from './main'
import { authRoutes } from './auth'
import { barRoutes } from './bar'
import { profileRoutes } from './profile'
import { orderRoutes } from './order'

export default [
  ...mainRoutes,
  ...authRoutes,
  {
    path: '/home',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './home/views/Home'),
    children: [
      ...barRoutes,
      ...profileRoutes,
      ...orderRoutes
    ]
  }
]
