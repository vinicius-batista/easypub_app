import { extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'

// loop over all rules
for (let rule in rules) {
  // add the rule
  extend(rule, rules[rule])
}

localize('pt_BR', pt_BR)
