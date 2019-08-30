<template>
  <v-row>
    <v-col cols="12">
      <v-card flat>
        <v-card-title primary-title class="tertiary--text subtitle-1 font-weight-bold">
          Pedido atual
        </v-card-title>
        <ApolloQuery
          :query="$options.currentOrderQuery"
        >
          <template slot-scope="{ result: { data }, isLoading }">
            <Loading v-if="isLoading" />
            <div v-else-if="data && data.currentOrder">
              <v-card-text class="text-center">
                <h6 class="subtitle-1 grey--text text--darken-3 font-weight-medium">
                 {{ calculateTotal(data.currentOrder.items) | formatMoney }}
                </h6>
              </v-card-text>

              <v-card-text>
                <OrderItemsList v-bind="data.currentOrder" />
              </v-card-text>
              <ApolloMutation
                :mutation="$options.closeOrderMutation"
                :variables="{ orderId: data.currentOrder.id }"
                :refetchQueries="refetchQueries"
                @done="goToFeedBack"
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
              <v-card-text class="text-center pa-4">
                <h5 class="grey--text text--darken-2 subtitle-1">Você não possui um pedido em andamento</h5>
              </v-card-text>
            </div>
          </template>
        </ApolloQuery>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { currentOrderQuery, closeOrderMutation } from '@/domains/order/graphql'
import { reduce } from 'ramda'
import { mapMutations } from 'vuex'
import OrderItemsList from './OrderItemsList'
import { getData } from '../../../helpers/graphql'

export default {
  name: 'CurrentOrder',
  components: { OrderItemsList },
  currentOrderQuery,
  closeOrderMutation,
  methods: {
    ...mapMutations('order', ['setTableId']),
    calculateTotal (items) {
      const sumTotal = (acc, item) => {
        const { quantity, menuItem } = item
        return acc + (quantity * menuItem.price)
      }
      return reduce(sumTotal, 0, items)
    },
    refetchQueries () {
      return [
        {
          query: this.$options.currentOrderQuery
        }
      ]
    },
    updateStore (store) {
      const { currentOrderQuery } = this.$options
      store.writeQuery({
        query: currentOrderQuery,
        data: { currentOrder: null }
      })
    },
    goToFeedBack (result) {
      const closeOrder = getData('closeOrder', result)
      this.setTableId('')
      this.$router.push({ name: 'orders.feedback', params: { orderId: closeOrder.id } })
    }
  }
}
</script>
