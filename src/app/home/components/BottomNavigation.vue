<template>
  <v-footer app height="56">
    <v-bottom-navigation :value="activeBtn" absolute color="primary">
      <v-btn
        v-for="{ text, icon, to } in buttons"
        :key="text"
        :to="to"
        :value="to.name"
      >
        {{ text }}
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
        to: { name: 'home.bars' },
      },
      {
        text: 'Pedidos',
        icon: 'fa-history',
        to: { name: 'orders' },
      },
      {
        text: 'Perfil',
        icon: 'fa-user',
        to: { name: 'profile' },
      },
    ],
  }),
  computed: {
    activeBtn() {
      const ordersRoutes = ['orders.detail', 'orders.feedback']
      if (contains(this.$route.name, ordersRoutes)) {
        return 'orders'
      }
      return this.$route.name
    },
  },
}
</script>
