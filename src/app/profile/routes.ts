import { RouteConfig } from 'vue-router'
import { getDefault } from '@/helpers/get'

const routes: RouteConfig[] = [
  {
    name: 'profile',
    path: '/profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "profile" */ '@/app/profile/views/Profile.vue').then(getDefault)
  }
]

export default routes
