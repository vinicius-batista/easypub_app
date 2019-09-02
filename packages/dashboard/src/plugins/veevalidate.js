import { localize, extend } from 'vee-validate'
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)

localize('pt_BR', pt_BR)
