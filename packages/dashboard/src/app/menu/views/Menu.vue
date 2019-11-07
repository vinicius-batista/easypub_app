<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <ApolloQuery :query="$options.BAR_MENU_CATEGORIES_QUERY">
          <template v-slot="{ result: { data } }">
            <Categories v-if="data">
              <template v-slot:add-category>
                <AddCategory :barId="data.profile.bar.id" />
              </template>
              <template v-slot:categories-list>
                <CategoriesList
                  :categories="data.profile.bar.menuCategories"
                  @category:clicked="categoryClickedHandler"
                />
              </template>
            </Categories>
          </template>
        </ApolloQuery>
      </v-col>
      <v-col cols="12" md="5">
        <ApolloQuery
          :query="$options.MENU_ITEMS_QUERY"
          :variables="{ categoryId }"
        >
          <template v-slot="{ result: { data, loading } }">
            <Items>
              <template v-slot:items-list>
                <ItemsList v-if="data" :items="data.menuItems" />
              </template>
            </Items>
          </template>
        </ApolloQuery>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Categories from '../components/Categories'
import Items from '../components/Items'
import AddCategory from '../components/AddCategory'
import CategoriesList from '../components/CategoriesList'
import ItemsList from '../components/ItemsList'
import {
  BAR_MENU_CATEGORIES_QUERY,
  MENU_ITEMS_QUERY,
} from '@easypub/core/domains/bar/graphql'

export default {
  name: 'Menu',
  components: { Categories, Items, AddCategory, CategoriesList, ItemsList },
  BAR_MENU_CATEGORIES_QUERY,
  MENU_ITEMS_QUERY,
  data: () => ({
    categoryId: '',
  }),
  methods: {
    categoryClickedHandler(categoryId) {
      this.categoryId = categoryId
    },
  },
}
</script>
