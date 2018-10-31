import { RouteConfig } from 'vue-router'
import { getDefault } from '@/helpers/get'

const routes: RouteConfig[] = [
  {
    name: 'home.bars',
    path: '/home',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bars.vue').then(getDefault)
  },
  {
    name: 'home.bar',
    path: '/home/bar/:id',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ './views/Bar.vue').then(getDefault),
    props: true
  },
  {
    name: 'home.menuitem',
    path: '/home/bar/menu-item/:id',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home-bar" */ './views/MenuItem.vue').then(getDefault),
    props: true
  }
]

export default routes
