<template>
  <v-container style="padding: 0">
    <ApolloQuery
      :query="$options.barQuery"
      :variables="{ id }"
      @result="changeToolbarTitle"
    >
      <template slot-scope="{ result: { data }, isLoading }">
        <Loading v-if="isLoading" />
        <div v-else-if="data">
          <BarDetail v-bind="data.bar" />
          <v-row>
            <v-col cols="12">
              <v-tabs
                v-model="category"
                center-active
                show-arrows
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
            </v-col>
            <v-col cols="12">
              <v-tabs-items v-model="category">
                <v-tab-item
                  v-for="menuCategory in data.bar.menuCategories"
                  :key="menuCategory.id"
                >
                  <MenuItemsList :categoryId="menuCategory.id" />
                </v-tab-item>
              </v-tabs-items>
            </v-col>
          </v-row>
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
    category: 0,
  }),
  mounted() {
    this.showBackButton()
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle']),
    changeToolbarTitle({ data }) {
      const { bar } = data
      this.setTitle(bar.name)
    },
  },
}
</script>
