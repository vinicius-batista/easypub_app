<template>
  <div>
    <ApolloMutation
      :mutation="$options.addItemToOrderMutation"
      :refetchQueries="refetchQueries"
      @done="submitSuccess"
      @error="handleError"
    >
      <template slot-scope="{ mutate, loading }">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            text
            color="primary"
            :disabled="disableDecrement"
            @click="decrementQuantity"
          >
            <v-icon>fa-minus</v-icon>
          </v-btn>
          <h6 class="subtitle-1 mx-2 black--text font-weight-bold">
            {{ input.quantity }}
          </h6>
          <v-btn icon text color="primary" @click="incrementQuantity">
            <v-icon>fa-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            @click="showNote = !showNote"
            block
            large
            color="primary"
            outlined
          >
            Adicionar observação
          </v-btn>
        </v-card-actions>
        <v-scale-transition>
          <v-textarea
            v-if="showNote"
            v-model="input.note"
            class="mx-4"
            filled
            placeholder="Digite aqui sua observação"
          />
        </v-scale-transition>
        <v-card-actions>
          <v-btn
            block
            color="primary"
            large
            @click="sendOrder(mutate)"
            :disabled="status === 'fechado'"
            :loading="loading"
          >
            PEDIR
            <v-spacer></v-spacer>
            {{ totalPrice | formatMoney }}
          </v-btn>
          <FormErrorMessage ref="formErrorMessage" />
        </v-card-actions>
        <ModalQrReader
          :display.sync="showQrReader"
          @decode="decodeQrCode(mutate, $event)"
        />
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import { multiply, inc, dec, equals, assoc } from 'ramda'
import { mapState, mapMutations } from 'vuex'
import ModalQrReader from './ModalQrReader'
import {
  addItemToOrderMutation,
  currentOrderQuery,
} from '@/domains/order/graphql'
import FormErrorMessage from '@/components/FormErrorMessage'

export default {
  name: 'MenuItemOrder',
  components: { ModalQrReader, FormErrorMessage },
  addItemToOrderMutation,
  currentOrderQuery,
  props: {
    itemId: String,
    price: String,
    status: String,
  },
  data: () => ({
    input: {
      tableId: '',
      quantity: 1,
      note: '',
    },
    showNote: false,
    showQrReader: false,
  }),
  methods: {
    ...mapMutations('order', ['setTableId']),
    sendOrder(mutate) {
      if (!this.tableId) {
        this.showQrReader = true
        return
      }
      this.input.tableId = this.tableId
      const input = assoc('itemId', this.itemId, this.input)
      mutate({ variables: { input } })
    },
    refetchQueries() {
      return [
        {
          query: this.$options.currentOrderQuery,
        },
      ]
    },
    decodeQrCode(mutate, result) {
      this.input.tableId = result
      this.setTableId(result)
      const input = assoc('itemId', this.itemId, this.input)
      mutate({ variables: { input } })
    },
    submitSuccess() {
      this.$router.go(-1)
    },
    handleError(error) {
      this.setTableId('')
      this.$refs.formErrorMessage.handleError(error)
    },
    incrementQuantity() {
      this.input.quantity = inc(this.input.quantity)
    },
    decrementQuantity() {
      this.input.quantity = dec(this.input.quantity)
    },
  },
  computed: {
    ...mapState('order', ['tableId']),
    totalPrice() {
      const {
        input: { quantity },
        price,
      } = this
      return multiply(quantity, price)
    },
    disableDecrement() {
      return equals(this.input.quantity, 1)
    },
  },
}
</script>
