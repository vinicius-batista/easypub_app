<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title class="tertiary--text subheading font-weight-bold">
          Pedido atual
        </v-card-title>
        <ApolloQuery
          :query="$options.currentOrderQuery"
        >
          <template slot-scope="{ result: { data } }">
            <div v-if="data">
              <v-card-text class="text-xs-center">
                <h6 class="subheading grey--text text--darken-3 font-weight-medium">
                 {{ calculateTotal(data.currentOrder.items) | formatMoney }}
                </h6>
              </v-card-text>

              <v-card-text>
                <v-list dense>
                  <v-list-tile
                    v-for="item in data.currentOrder.items"
                    :key="item.id"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.menuItem.name }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action-text>
                      <span class="body-2">{{item.quantity}}X </span>
                      <span class="body-2">{{item.menuItem.price | formatMoney}}</span>
                    </v-list-tile-action-text>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </div>
          </template>
        </ApolloQuery>
        <v-card-actions class="pa-4">
          <v-btn color="primary" block>FINALIZAR PEDIDO</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { currentOrderQuery } from '@/domains/order/graphql'
import { path, sum, map, pipe } from 'ramda'

export default {
  name: 'CurrentOrder',
  currentOrderQuery,
  methods: {
    calculateTotal (items) {
      return pipe(
        map(path(['menuItem', 'price'])),
        sum
      )(items)
    }
  }
}
</script>
