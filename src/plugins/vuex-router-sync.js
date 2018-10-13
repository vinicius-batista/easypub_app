import { store, router } from '@/services'
import { sync } from 'vuex-router-sync'

export default () => sync(store, router)
