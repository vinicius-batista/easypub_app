import { mainRoutes } from '@/app/main'
import { authRoutes } from '@/app/auth'
import { barRoutes } from '@/app/bar'
import { profileRoutes } from '@/app/profile'
import { orderRoutes } from '@/app/order'
import { RouteConfig } from 'vue-router'
import { getDefault } from '@/helpers/get'

const routes: RouteConfig[] = [
  ...mainRoutes,
  ...authRoutes,
  {
    path: '/home',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './home/views/Home.vue').then(getDefault),
    children: [
      ...barRoutes,
      ...profileRoutes,
      ...orderRoutes
    ]
  }
]

export default routes
