<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <SearchInput v-model="search" />
    <ApolloQuery
      :query="$options.barsQuery"
      :variables="{ name: search }"
    >
      <template slot-scope="{ result: { data }, isLoading }">
        <Loading v-if="isLoading" />
        <BarsList v-else v-bind="data" />
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>
import SearchInput from '../components/SearchInput'
import BarsList from '../components/BarsList'
import { barsQuery } from '@/domains/bar/graphql'
import { mapMutations } from 'vuex'
import { currentOrderQuery } from '@/domains/order/graphql'

export default {
  name: 'Bars',
  components: { SearchInput, BarsList },
  barsQuery,
  data: () => ({
    search: ''
  }),
  mounted () {
    this.hiddenBackButton()
    this.setTitle('EasyPub')
  },
  methods: {
    ...mapMutations('home', ['hiddenBackButton', 'setTitle'])
  },
  apollo: {
    currentOrder: {
      query: currentOrderQuery,
      manual: true,
      result ({ data: { currentOrder } }) {
        if (currentOrder) {
          const { bar } = currentOrder.table
          const params = { id: bar.id }
          this.$router.push({ name: 'home.bar', params })
        }
      }
    }
  }
}
</script>
