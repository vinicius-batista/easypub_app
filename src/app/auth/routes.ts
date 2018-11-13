import { RouteConfig } from 'vue-router'
import { getDefault } from '@/helpers/get'

const routes: RouteConfig[] = [
  {
    path: '/auth/register',
    name: 'auth.register',
    component: () =>
      import(/* webpackChunkName: "auth" */ './views/Register.vue').then(
        getDefault
      )
  },
  {
    path: '/auth/login',
    name: 'auth.login',
    component: () =>
      import(/* webpackChunkName: "auth" */ './views/Login.vue').then(
        getDefault
      )
  }
]

export default routes
