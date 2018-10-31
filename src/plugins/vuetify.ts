import Vue from 'vue'
import Vuetify from 'vuetify'
import '@/assets/styles/main.styl'
import pt from 'vuetify/src/locale/pt'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'fa',
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    primary: colors.blue.darken4,
    secondary: colors.lightBlue.lighten2,
    tertiary: colors.grey.darken3
  }
})
