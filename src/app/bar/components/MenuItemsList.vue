<template>
  <ApolloQuery :query="$options.menuItemsQuery" :variables="{ categoryId }">
    <template slot-scope="{ result: { data }, isLoading }">
      <Loading v-if="isLoading" />
      <v-list two-line v-else-if="data">
        <v-list-tile
          v-for="{ id, name, price } in data.menuItems"
          :key="id"
          :to="{ name: 'home.menuitem', params: { id } }"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ name }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-subheader> {{ price | formatMoney }}</v-subheader>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </template>
  </ApolloQuery>
</template>

<script>
import { menuItemsQuery } from '@/domains/bar/graphql'

export default {
  name: 'MenuItemsList',
  menuItemsQuery,
  props: {
    categoryId: String
  }
}
</script>
