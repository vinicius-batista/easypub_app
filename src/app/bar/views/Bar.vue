<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <ApolloQuery
      :query="$options.barQuery"
      :variables="{ id }"
      @result="changeToolbarTitle"
    >
      <template slot-scope="{ result: { data }, isLoading }">
        <Loading v-if="isLoading" />
        <div v-else-if="data">
          <BarDetail v-bind="data.bar" />
          <v-layout row wrap class="mt-2">
            <v-flex xs12>
              <v-tabs
                v-model="category"
                centered
                color="white"
                slider-color="primary"
              >
                <v-tab
                  v-for="menuCategory in data.bar.menuCategories"
                  :key="menuCategory.id"
                >
                  <span class="primary--text">{{ menuCategory.name }}</span>
                </v-tab>
              </v-tabs>
            </v-flex>
            <v-flex xs12>
              <v-tabs-items v-model="category">
                <v-tab-item
                  v-for="menuCategory in data.bar.menuCategories"
                  :key="menuCategory.id"
                  lazy
                >
                  <MenuItemsList :categoryId="menuCategory.id" />
                </v-tab-item>
              </v-tabs-items>
            </v-flex>
          </v-layout>
        </div>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>
import BarDetail from '../components/BarDetail'
import MenuItemsList from '../components/MenuItemsList'
import { barQuery } from '@/domains/bar/graphql'
import { mapMutations } from 'vuex'

export default {
  name: 'Bar',
  components: { BarDetail, MenuItemsList },
  barQuery,
  props: { id: String },
  data: () => ({
    category: 0
  }),
  mounted () {
    this.showBackButton()
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle']),
    changeToolbarTitle ({ data }) {
      const { bar } = data
      this.setTitle(bar.name)
    }
  }
}
</script>
