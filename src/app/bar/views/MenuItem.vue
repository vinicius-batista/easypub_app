<template>
  <v-container style="padding: 1em 0">
    <v-row>
      <v-col cols="12">
        <v-card class="pb-4" flat>
          <ApolloQuery :query="$options.menuItemQuery" :variables="{ id }">
            <template slot-scope="{ result: { data }, isLoading }">
              <Loading v-if="isLoading" />
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
      </v-col>
    </v-row>
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
    id: String,
  },
  mounted() {
    this.showBackButton()
    this.setTitle('DETALHES')
  },
  methods: {
    ...mapMutations('home', ['showBackButton', 'setTitle']),
  },
}
</script>
