import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

const isProd = process.env.NODE_ENV === 'production'

export default function (router) {
  Vue.use(VueAnalytics, {
    id: 'UA-125974407-2',
    router,
    autoTracking: {
      exception: true
    },
    debug: {
      enable: !isProd,
      sendHitTask: isProd
    }
  })
}
