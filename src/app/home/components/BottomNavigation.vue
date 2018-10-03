<template>
  <v-bottom-nav
    :active.sync="activeBtn"
    absolute
    app
  >
    <v-btn
      v-for="{text, icon} in buttons"
      :key="text"
      color="primary"
      flat
    >
      {{text}}
      <v-icon>{{icon}}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data: () => ({
    activeBtn: 0,
    buttons: [
      {
        text: 'Home',
        icon: 'fa-home'
      },
      {
        text: 'Pedidos',
        icon: 'fa-history'
      },
      {
        text: 'Perfil',
        icon: 'fa-user'
      }
    ]
  })
}
</script>
