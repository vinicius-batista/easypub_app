import Vue from 'vue'
import { formatMoney } from '@/helpers/format'

Vue.filter('formatMoney', formatMoney)
