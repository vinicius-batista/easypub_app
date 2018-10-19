<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat class="pb-3">
          <v-card-title primary-title>
            <h2 class="headline">Bar do jose</h2>
          </v-card-title>
          <FeedbackMistakeRadio v-model="input.hasMistake" />
          <v-card-text
            v-for="{ text, model } in fiveStarsRate"
            :key="model"
            class="text-xs-center"
          >
            <h5 class="title">{{ text }}</h5>
            <p class="subheading pt-2 grey--text">Escolha de 1 a 5 estrelas</p>
            <v-rating
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
              :empty-icon="'far fa-check-circle'"
              :full-icon="'fas fa-check-circle'"
            >
              <span>{{ 1 }}</span>
            </v-rating>
          </v-card-text>

          <v-card-actions class="my-3">
            <v-spacer></v-spacer>
            <SendButton text="AVALIAR"/>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import SendButton from '@/components/SendButton'
import FeedbackMistakeRadio from '../components/FeedbackMistakeRadio'

export default {
  name: 'Feedback',
  components: { SendButton, FeedbackMistakeRadio },
  props: {
    orderId: String
  },
  data: () => ({
    input: {
      hasMistake: false,
      barRating: 0,
      appRating: 0,
      indication: 0
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
  }),
  mounted () {
    this.showBackButton()
    this.setTitle('AVALIAÇÃO')
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle'])
  }
}
</script>
