<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat class="py-5">
          <ApolloQuery
            :variables="{ id }"
            :query="$options.orderQuery"
          >
            <template slot-scope="{ result: { data, loading } }">
              <Loading v-if="loading" />
              <div v-else-if="data">
                <v-card-title primary-title class="tertiary--text subheading font-weight-bold">
                  <h2 class="title">{{ data.order.table.bar.name }}</h2>
                </v-card-title>
                <v-card-text class="px-0">
                  <OrderItemsList :items="data.order.items"/>
                </v-card-text>
                <v-card-actions class="px-3">
                  <span class="title">Total</span>
                  <v-spacer></v-spacer>
                  <span class="title text-xs-right">{{ calculateTotal(data.order.items) | formatMoney }}</span>
                </v-card-actions>
              </div>
            </template>
          </ApolloQuery>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import OrderItemsList from '../components/OrderItemsList'
import { orderQuery } from '@/domains/order/graphql'
import { path, sum, map, pipe } from 'ramda'

export default {
  name: 'Order',
  orderQuery,
  components: { OrderItemsList },
  props: {
    id: String
  },
  mounted () {
    this.showBackButton()
    this.setTitle('DETALHES')
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle']),
    calculateTotal (items) {
      return pipe(
        map(path(['menuItem', 'price'])),
        sum
      )(items)
    }
  }
}
</script>
