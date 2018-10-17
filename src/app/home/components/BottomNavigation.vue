<template>
  <v-footer app height="56" class="white elevation-4">
    <v-btn
      v-for="{text, icon, to} in buttons"
      :key="text"
      class="grey--text nav-button-group"
      active-class="primary--text"
      flat
      :to="to"
      block
    >
      <div class="nav-button-group__items font-weight-regular">
        {{text}}
        <v-icon>{{icon}}</v-icon>
      </div>
    </v-btn>
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

<style scoped>
.nav-button-group {
  padding: 2em 0em
}
.nav-button-group__items {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}
</style>
