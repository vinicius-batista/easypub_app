import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

Vue.use(Router)

export default function(routes, store) {
  const router = new Router({
    routes,
  })

  router.beforeEach(beforeEach(store))

  return router
}
