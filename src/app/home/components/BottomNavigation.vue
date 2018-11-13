<template>
  <v-footer app height="56">
    <v-bottom-nav :active="activeBtn" :value="true" absolute color="white">
      <v-btn
        v-for="{ text, icon, to } in buttons"
        :key="text"
        color="primary"
        flat
        :to="to"
        :ripple="false"
        :value="to.name"
      >
        {{ text }}
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-footer>
</template>

<script>
import { contains } from 'ramda'

export default {
  name: 'BottomNavigation',
  data: () => ({
    buttons: [
      {
        text: 'Home',
        icon: 'fa-home',
        to: { name: 'home.bars' }
      },
      {
        text: 'Pedidos',
        icon: 'fa-history',
        to: { name: 'orders' }
      },
      {
        text: 'Perfil',
        icon: 'fa-user',
        to: { name: 'profile' }
      }
    ]
  }),
  computed: {
    activeBtn () {
      const ordersRoutes = ['orders.detail', 'orders.feedback']
      if (contains(this.$route.name, ordersRoutes)) {
        return 'orders'
      }
      return this.$route.name
    }
  }
}
</script>
