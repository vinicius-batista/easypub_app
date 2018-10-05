import { mainRoutes } from './main'
import { authRoutes } from './auth'
import Home from './home/views/Home'

export default [
  ...mainRoutes,
  ...authRoutes,
  {
    name: 'home',
    path: '/home/',
    component: Home,
    children: []
  }
]