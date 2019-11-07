import { authRoutes } from './auth'
import { homeRoutes } from './home'
import { barRoutes } from './bar'
import { menuRoutes } from './menu'

export default [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './home/views/Home'),
    meta: {
      requiresAuth: true,
    },
    children: [...homeRoutes, ...barRoutes, ...menuRoutes],
  },
  ...authRoutes,
]
