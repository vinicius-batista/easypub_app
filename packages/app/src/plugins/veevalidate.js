import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import VeeValidateMessagesBR from 'vee-validate/dist/locale/pt_BR'

Validator.localize('pt_BR', VeeValidateMessagesBR)
Vue.use(VeeValidate, { locale: 'pt_BR' })
