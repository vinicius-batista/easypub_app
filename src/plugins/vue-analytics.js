import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-125974407-2',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})
