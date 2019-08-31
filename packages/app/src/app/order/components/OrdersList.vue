<template>
  <v-list two-line>
    <ApolloQuery :query="$options.ordersQuery">
      <template slot-scope="{ result: { data }, isLoading }">
        <Loading v-if="isLoading" />
        <div v-else-if="data">
          <v-list-item
            v-for="{ id, insertedAt, table, feedback } in data.orders"
            :key="id"
            avatar
            :to="{ name: 'orders.detail', params: { id } }"
          >
            <v-list-item-avatar color="grey lighten-2" size="60" item>
              <span class="pa-2">{{ formateDate(insertedAt) }}</span>
            </v-list-item-avatar>

            <v-list-item-content class="ml-4">
              <v-list-item-title>{{ table.bar.name }}</v-list-item-title>
              <div v-if="feedback">
                <span class="grey--text text--darken-1 subtitle-1">
                  ({{ feedback.barRating }})
                </span>
                <v-rating
                  readonly
                  :value="parseFloat(feedback.barRating)"
                  small
                  style="display: inline-block;"
                  dense
                  half-increments
                />
              </div>
            </v-list-item-content>
          </v-list-item>
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
    formateDate(date) {
      return new Date(date).toLocaleString(navigator.language, {
        month: 'short',
        day: 'numeric',
      })
    },
  },
}
</script>
