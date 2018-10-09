<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title class="tertiary--text subheading font-weight-bold">
            Pedido atual
          </v-card-title>
          <v-card-text class="text-xs-center">
            <h6 class="subheading grey--text text--darken-3 font-weight-medium">R$ 200,00</h6>
          </v-card-text>

          <v-card-text>
            <v-list dense>
              <v-list-tile
                v-for="item in items"
                :key="item.name"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action-text>
                  <span class="body-2">{{item.quantity}}X </span>
                  <span class="body-2">{{item.price | formatMoney}}</span>
                </v-list-tile-action-text>
              </v-list-tile>
            </v-list>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-btn color="primary" block>FINALIZAR PEDIDO</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3">
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title class="tertiary--text subheading">
            Histórico de pedidos
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Orders',
  data: () => ({
    items: [
      { name: 'Photos', quantity: 5, price: '22.22' },
      { name: 'Recipes', quantity: 3, price: '32.22' },
      { name: 'Work', quantity: 2, price: '22.52' }
    ]
  }),
  mounted () {
    this.hiddenBackButton()
    this.setTitle('EasyPub')
  },
  methods: {
    ...mapMutations('home', ['hiddenBackButton', 'setTitle'])
  }
}
</script>
