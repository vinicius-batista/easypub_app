<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <CurrentOrder />
    <v-layout class="mt-3">
      <v-flex xs12>
        <v-card flat>
          <v-card-title primary-title class="tertiary--text subheading">
            Histórico de pedidos
          </v-card-title>
          <OrdersList />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import CurrentOrder from '../components/CurrentOrder'
import OrdersList from '../components/OrdersList'

export default {
  name: 'Orders',
  components: { CurrentOrder, OrdersList },
  mounted () {
    this.hiddenBackButton()
    this.setTitle('EasyPub')
  },
  methods: {
    ...mapMutations('home', ['hiddenBackButton', 'setTitle'])
  }
}
</script>
