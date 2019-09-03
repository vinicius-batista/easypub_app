import { authStore } from '@easypub/core/domains/auth'
import { homeStore } from '@/domains/home'
import { orderStore } from '@/domains/order'

export const modules = {
  auth: authStore,
  home: homeStore,
  order: orderStore,
}
