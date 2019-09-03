import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

// loop over all rules
for (let rule in rules) {
  // add the rule
  extend(rule, rules[rule])
}
