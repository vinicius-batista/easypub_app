import { RouteConfig } from 'vue-router'
import { getDefault } from '@/helpers/get'

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ './views/Main.vue').then(getDefault)
  }
]

export default routes
