import Vue from 'vue'
import Vuetify, { colors } from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.accent4,
        secondary: colors.lightBlue.lighten2,
        tertiary: colors.blueGrey.darken2,
      },
    },
  },
})
