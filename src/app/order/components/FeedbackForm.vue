<template>
  <ApolloMutation
    :mutation="$options.createFeedbackMutation"
    :variables="{ input }"
    :refetchQueries="refetchQueries"
    @done="submitSuccess"
    :update="updateStore"
  >
    <template slot-scope="{ mutate, loading }">
      <v-form @submit.prevent="mutate()">
        <FeedbackMistakeRadio v-model="input.hasMistake" :readonly="readOnly" />
        <v-card-text
          v-for="{ text, model } in fiveStarsRate"
          :key="model"
          class="text-xs-center"
        >
          <h5 class="title">{{ text }}</h5>
          <p class="subheading pt-2 grey--text">Escolha de 1 a 5 estrelas</p>
          <v-rating
            :readonly="readOnly"
            v-model="input[model]"
            style="display: inline-block;"
            half-increments
          />
        </v-card-text>
        <v-card-text class="text-xs-center">
          <h5 class="title">Qual a chance de indicar o EasyPub a um amigo?</h5>
          <p class="subheading pt-2 grey--text">Em uma escala de 1 a 10</p>
          <v-rating
            v-model="input.indication"
            length="10"
            dense
            :readonly="readOnly"
            :empty-icon="'far fa-check-circle'"
            :full-icon="'fas fa-check-circle'"
          />
        </v-card-text>

        <v-card-actions class="my-3" v-if="!readOnly">
          <v-spacer></v-spacer>
          <SendButton text="AVALIAR" v-bind="{ loading }" />
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-form>
    </template>
  </ApolloMutation>
</template>

<script>
import FeedbackMistakeRadio from './FeedbackMistakeRadio'
import SendButton from '@/components/SendButton'
import {
  createFeedbackMutation,
  feedbackQuery,
  ordersQuery
} from '@/domains/order/graphql'
import { assocPath } from 'ramda'

export default {
  name: 'FeedbackForm',
  props: {
    orderId: String,
    hasMistake: { type: Boolean, default: false },
    barRating: { type: String, default: '0' },
    appRating: { type: String, default: '0' },
    indication: { type: Number, default: 0 },
    readOnly: Boolean
  },
  components: { SendButton, FeedbackMistakeRadio },
  createFeedbackMutation,
  feedbackQuery,
  data () {
    const { orderId, hasMistake, barRating, appRating, indication } = this

    return {
      input: {
        orderId,
        hasMistake,
        barRating: parseFloat(barRating),
        appRating: parseFloat(appRating),
        indication
      },
      fiveStarsRate: [
        {
          model: 'barRating',
          text: 'Como você avalia o bar?'
        },
        {
          model: 'appRating',
          text: 'Como foi a sua experiência com o EasyPub?'
        }
      ]
    }
  },
  methods: {
    submitSuccess () {
      this.$router.go(-1)
    },
    refetchQueries () {
      return [
        {
          query: ordersQuery
        }
      ]
    },
    updateStore (
      store,
      {
        data: { createFeedback }
      }
    ) {
      const { feedbackQuery } = this.$options
      const { orderId } = this

      const feedbackData = store.readQuery({
        query: feedbackQuery,
        variables: { orderId }
      })
      const newFeedbackData = assocPath(
        ['order', 'feedback'],
        createFeedback,
        feedbackData
      )
      store.writeQuery({
        query: feedbackQuery,
        variables: { orderId },
        data: newFeedbackData
      })
    }
  }
}
</script>
