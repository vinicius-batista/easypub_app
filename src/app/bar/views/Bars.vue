<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <SearchInput v-model="search" />
    <ApolloQuery
      :query="$options.barsQuery"
      :variables="{ name: search }"
    >
      <template slot-scope="{ result: { data, loading } }">
        <v-progress-circular v-if="loading" indeterminate color="secondary"/>  <!-- #TODO: ALIGN CENTER -->
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
  }
}
</script>
