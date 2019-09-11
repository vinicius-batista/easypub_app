import { authRoutes } from './auth'
import { homeRoutes } from './home'
import { barRoutes } from './bar'

export default [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './home/views/Home'),
    meta: {
      requiresAuth: true,
    },
    children: [...homeRoutes, ...barRoutes],
  },
  ...authRoutes,
]
