<template>
  <v-footer app height="56">
    <v-bottom-nav
      :active.sync="activeBtn"
      absolute
      value="true"
      color="white"
    >
      <v-btn
        v-for="{text, icon, to} in buttons"
        :key="text"
        color="primary"
        flat
        :to="to"
      >
        {{text}}
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-footer>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data: () => ({
    activeBtn: 0,
    buttons: [
      {
        text: 'Home',
        icon: 'fa-home',
        to: { name: 'home.bars' }
      },
      {
        text: 'Pedidos',
        icon: 'fa-history',
        to: { name: 'home.orders' }
      },
      {
        text: 'Perfil',
        icon: 'fa-user',
        to: { name: 'home.profile' }
      }
    ]
  })
}
</script>
