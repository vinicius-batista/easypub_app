<template>
  <v-container style="padding: 1em 0">
    <CurrentOrder />
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card flat>
          <v-card-title primary-title class="tertiary--text">
            Histórico de pedidos
          </v-card-title>
          <OrdersList />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import CurrentOrder from '../components/CurrentOrder'
import OrdersList from '../components/OrdersList'

export default {
  name: 'Orders',
  components: { CurrentOrder, OrdersList },
  mounted() {
    this.hiddenBackButton()
    this.setTitle('EasyPub')
  },
  methods: {
    ...mapMutations('home', ['hiddenBackButton', 'setTitle']),
  },
}
</script>
