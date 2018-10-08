<template>
  <div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        icon
        flat
        color="primary"
        :disabled="disableDecrement"
        @click="decrementQuantity"
      >
        <v-icon>fa-minus</v-icon>
      </v-btn>
      <h6 class="subheading mx-2 black--text font-weight-bold">
        {{ input.quantity }}
      </h6>
      <v-btn
        icon
        flat
        color="primary"
        @click="incrementQuantity"
      >
        <v-icon>fa-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-actions>
      <v-btn @click="showNote = !showNote" flat block large color="primary">
        Adicionar observação
      </v-btn>
    </v-card-actions>
    <v-scale-transition>
      <v-textarea
        v-if="showNote"
        v-model="input.note"
        class="mx-4"
        box
        placeholder="Digite aqui sua obersavação"
      />
    </v-scale-transition>
    <v-card-actions class="mx-4">
      <v-btn block color="primary" large>
        PEDIR
        <v-spacer></v-spacer>
        R$ {{ totalPrice }}
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { multiply, inc, dec, equals } from 'ramda'

export default {
  name: 'MenuItemOrder',
  props: {
    itemId: String,
    price: String
  },
  data: () => ({
    input: {
      barId: '',
      quantity: 1,
      note: ''
    },
    showNote: false
  }),
  methods: {
    incrementQuantity () {
      this.input.quantity = inc(this.input.quantity)
    },
    decrementQuantity () {
      this.input.quantity = dec(this.input.quantity)
    }
  },
  computed: {
    totalPrice () {
      const { input: { quantity }, price } = this
      return multiply(quantity, price)
    },
    disableDecrement () {
      return equals(this.input.quantity, 1)
    }
  }
}
</script>
