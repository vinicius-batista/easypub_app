import { replace, pipe, concat } from 'ramda'

export const formatMoney = pipe(
  parseFloat,
  price => price.toFixed(2),
  replace('.', ','),
  concat('R$ ')
)
