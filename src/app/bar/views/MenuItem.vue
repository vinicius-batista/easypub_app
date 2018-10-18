<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="pb-4" flat>
          <ApolloQuery
            :query="$options.menuItemQuery"
            :variables="{ id }"
          >
            <template slot-scope="{ result: { data, loading } }">
              <Loading v-if="loading" />
              <div v-else-if="data">
                <MenuItemDescription v-bind="data.menuItem" />
                <MenuItemOrder
                  :itemId="id"
                  :price="data.menuItem.price"
                  :status="data.menuItem.menuCategory.bar.status"
                />
              </div>
            </template>
          </ApolloQuery>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MenuItemDescription from '../components/MenuItemDescription'
import MenuItemOrder from '../components/MenuItemOrder'
import { menuItemQuery } from '@/domains/bar/graphql'
import { mapMutations } from 'vuex'

export default {
  name: 'MenuItem',
  menuItemQuery,
  components: { MenuItemDescription, MenuItemOrder },
  props: {
    id: String
  },
  mounted () {
    this.showBackButton()
    this.setTitle('DETALHES')
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle'])
  }
}
</script>
