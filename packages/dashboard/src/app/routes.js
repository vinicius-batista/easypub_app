import { authRoutes } from './auth'
import { homeRoutes } from './home'

export default [{ path: '/', redirect: '/home' }, ...authRoutes, ...homeRoutes]
