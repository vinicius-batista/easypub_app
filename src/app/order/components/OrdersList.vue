<template>
  <v-list two-line>
    <ApolloQuery
      :query="$options.ordersQuery"
    >
      <template slot-scope="{ result: { data }, isLoading }">
        <Loading v-if="isLoading" />
        <div v-else-if="data">
          <v-list-tile
            v-for="{ id, insertedAt, table, rating } in data.orders"
            :key="id"
            avatar
            :to="{ name: 'orders.detail', params: { id } }"
          >
            <v-list-tile-avatar color="grey lighten-2" size="60" tile>
              <span class="pa-2">{{ formateDate(insertedAt) }}</span>
            </v-list-tile-avatar>

            <v-list-tile-content class="ml-4">
              <v-list-tile-title>{{ table.bar.name }}</v-list-tile-title>
              <div v-if="rating">
                <span class="grey--text text--darken-1 subheading">
                  ({{ rating }})
                </span>
                <v-rating
                  readonly
                  :value="rating"
                  small
                  color="yellow darken-3"
                  style="display: inline-block;"
                  dense
                  half-increments
                />
              </div>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </template>
    </ApolloQuery>
  </v-list>
</template>

<script>
import { ordersQuery } from '@/domains/order/graphql'

export default {
  name: 'OrdersList',
  ordersQuery,
  methods: {
    formateDate (date) {
      return new Date(date).toLocaleString(navigator.language, { month: 'short', day: 'numeric' })
    }
  }
}
</script>
