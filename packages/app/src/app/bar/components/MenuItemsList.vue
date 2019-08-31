<template>
  <ApolloQuery :query="$options.menuItemsQuery" :variables="{ categoryId }">
    <template slot-scope="{ result: { data }, isLoading }">
      <Loading v-if="isLoading" />
      <v-list two-line v-else-if="data">
        <v-list-item
          v-for="{ id, name, price } in data.menuItems"
          :key="id"
          link
          :to="{ name: 'home.menuitem', params: { id } }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-subheader> {{ price | formatMoney }}</v-subheader>
          </v-list-item-action>
        </v-list-item>
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
    categoryId: String,
  },
}
</script>
