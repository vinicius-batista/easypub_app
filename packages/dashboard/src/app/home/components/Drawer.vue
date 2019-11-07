<template>
  <v-navigation-drawer app clipped :value="drawerStatus">
    <template v-slot:prepend>
      <ApolloQuery :query="$options.BAR_PROFILE_QUERY">
        <template v-slot="{ result: { data }, isLoading }">
          <DrawerBarInfo v-bind="data.profile.bar" v-if="!isLoading" />
        </template>
      </ApolloQuery>
    </template>
    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DrawerBarInfo from './DrawerBarInfo'
import { BAR_PROFILE_QUERY } from '@easypub/core/domains/user/graphql'

export default {
  name: 'Drawer',
  props: {
    drawerStatus: Boolean,
  },
  BAR_PROFILE_QUERY,
  components: { DrawerBarInfo },
  data: () => ({
    navItems: [
      { title: 'Home', icon: 'fa-home', to: { name: 'home' } },
      { title: 'Cardápio', icon: 'far fa-list-alt', to: { name: 'menu' } },
      { title: 'Pedidos', icon: 'far fa-chart-bar', to: null },
    ],
  }),
}
</script>
