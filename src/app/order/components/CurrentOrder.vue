<template>
  <v-layout>
    <v-flex xs12>
      <v-card flat>
        <v-card-title primary-title class="tertiary--text subheading font-weight-bold">
          Pedido atual
        </v-card-title>
        <ApolloQuery
          :query="$options.currentOrderQuery"
        >
          <template slot-scope="{ result: { data } }">
            <div v-if="data && data.currentOrder">
              <v-card-text class="text-xs-center">
                <h6 class="subheading grey--text text--darken-3 font-weight-medium">
                 {{ calculateTotal(data.currentOrder.items) | formatMoney }}
                </h6>
              </v-card-text>

              <v-card-text>
                <OrderItemsList v-bind="data.currentOrder" />
              </v-card-text>
              <ApolloMutation
                :mutation="$options.closeOrderMutation"
                :variables="{ orderId: data.currentOrder.id }"
                :update="updateStore"
              >
                <template slot-scope="{ mutate, loading }">
                  <v-card-actions class="pa-4">
                    <v-btn color="primary" block v-bind="{ loading }" @click="mutate()">
                      FINALIZAR PEDIDO
                    </v-btn>
                  </v-card-actions>
                </template>
              </ApolloMutation>
            </div>
            <div v-else>
              <v-card-text class="text-xs-center pa-4">
                <h5 class="grey--text text--darken-2 subheading">Você não possui um pedido em andamento</h5>
              </v-card-text>
            </div>
          </template>
        </ApolloQuery>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { currentOrderQuery, closeOrderMutation } from '@/domains/order/graphql'
import { path, sum, map, pipe } from 'ramda'
import { mapMutations } from 'vuex'
import OrderItemsList from './OrderItemsList'

export default {
  name: 'CurrentOrder',
  components: { OrderItemsList },
  currentOrderQuery,
  closeOrderMutation,
  methods: {
    ...mapMutations('order', ['setTableId']),
    calculateTotal (items) {
      return pipe(
        map(path(['menuItem', 'price'])),
        sum
      )(items)
    },
    updateStore (store) {
      const { currentOrderQuery } = this.$options
      store.writeQuery({
        query: currentOrderQuery,
        data: { currentOrder: null }
      })
      this.setTableId('')
    }
  }
}
</script>
