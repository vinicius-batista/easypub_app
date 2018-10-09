<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title class="tertiary--text subheading font-weight-bold">
            Pedido atual
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
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
export default {
  name: 'Orders'
}
</script>
