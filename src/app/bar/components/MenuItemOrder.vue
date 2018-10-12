<template>
  <div>
    <ApolloMutation
      :mutation="$options.addItemToOrderMutation"
      @done="submitSucess"
      @error="handleError"
    >
      <template slot-scope="{ mutate, loading }">
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
          <v-btn block color="primary" large @click="sendOrder(mutate)">
            PEDIR
            <v-spacer></v-spacer>
            {{ totalPrice | formatMoney }}
          </v-btn>
          <FormErrorMessage ref="formErrorMessage"/>
        </v-card-actions>
        <ModalQrReader :display.sync="showQrReader" @decode="decodeQrCode(mutate, $event)"/>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import { multiply, inc, dec, equals, assoc } from 'ramda'
import { mapState, mapMutations } from 'vuex'
import ModalQrReader from './ModalQrReader'
import { addItemToOrderMutation } from '@/domains/order/graphql'
import FormErrorMessage from '@/components/FormErrorMessage'

export default {
  name: 'MenuItemOrder',
  components: { ModalQrReader, FormErrorMessage },
  addItemToOrderMutation,
  props: {
    itemId: String,
    price: String
  },
  data: () => ({
    input: {
      tableId: '',
      quantity: 1,
      note: ''
    },
    showNote: false,
    showQrReader: false
  }),
  methods: {
    ...mapMutations('order', ['setTableId']),
    sendOrder (mutate) {
      if (!this.tableId) {
        this.showQrReader = true
        return
      }
      this.input.tableId = this.tableId
      const input = assoc('itemId', this.itemId, this.input)
      mutate({ variables: { input } })
    },
    decodeQrCode (mutate, result) {
      this.input.tableId = result
      this.setTableId(result)
      const input = assoc('itemId', this.itemId, this.input)
      mutate({ variables: { input } })
    },
    submitSucess () {
      this.$router.go(-1)
    },
    handleError (error) {
      this.$refs.formErrorMessage.handleError(error)
    },
    incrementQuantity () {
      this.input.quantity = inc(this.input.quantity)
    },
    decrementQuantity () {
      this.input.quantity = dec(this.input.quantity)
    }
  },
  computed: {
    ...mapState('order', ['tableId']),
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
