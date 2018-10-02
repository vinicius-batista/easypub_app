import Register from './views/Register'
import Login from './views/Login'

export default [
  {
    path: '/auth/register',
    name: 'auth.register',
    component: Register
  },
  {
    path: '/auth/login',
    name: 'auth.login',
    component: Login
  }
]
