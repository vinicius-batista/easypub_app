import { localize, extend } from 'vee-validate'
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'
import {
  required,
  email,
  min,
  alpha_spaces,
  size,
} from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)
extend('alpha_spaces', alpha_spaces)
extend('size', size)

localize('pt_BR', pt_BR)
