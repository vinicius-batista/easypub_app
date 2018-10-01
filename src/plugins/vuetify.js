import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/es5/locale/pt'
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
    tertiary: colors.blueGrey.darken2
  }
})
