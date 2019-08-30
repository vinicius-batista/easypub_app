<template>
  <v-container style="padding: 1em 0">
    <v-row  >
      <v-col cols="12">
        <v-card flat class="pb-3">
          <ApolloQuery
            :query="$options.feedbackQuery"
            :variables="{ orderId }"
          >
            <template slot-scope="{ result: { data, error }, isLoading }">
              <span>{{ error }} </span>
              <Loading v-if="isLoading" />
              <div v-if="data">
                <v-card-title primary-title>
                  <h2 class="headline">{{ data.order.table.bar.name }}</h2>
                </v-card-title>
                <FeedbackForm
                  v-bind="Object.assign({ orderId }, data.order.feedback)"
                  :readOnly="!!data.order.feedback"
                />
              </div>
            </template>
          </ApolloQuery>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import FeedbackForm from '../components/FeedbackForm'
import { feedbackQuery } from '@/domains/order/graphql'

export default {
  name: 'Feedback',
  feedbackQuery,
  components: { FeedbackForm },
  props: {
    orderId: String
  },
  mounted () {
    this.showBackButton()
    this.setTitle('AVALIAÇÃO')
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle'])
  }
}
</script>
