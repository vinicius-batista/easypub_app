<template>
  <v-container grid-list-xs style="padding: 1em 0">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="pb-4">
          <ApolloQuery
            :query="$options.menuItemQuery"
            :variables="{ id }"
          >
            <template slot-scope="{ result: { data } }">
              <div v-if="data">
                <MenuItemDescription v-bind="data.menuItem" />
                <v-card-actions>
                  <v-btn @click="showObservation = !showObservation" flat block large color="secondary">
                    Adicionar observação
                    <v-icon right>fas fa-plus</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-textarea v-if="showObservation" outline placeholder="Digite aqui sua obersavação"></v-textarea>
                <v-card-actions class="text-xs-center">
                  <v-spacer></v-spacer>
                  <v-btn round block color="primary">PEDIR</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
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
import { menuItemQuery } from '@/domains/bar/graphql'

export default {
  name: 'MenuItem',
  menuItemQuery,
  components: { MenuItemDescription },
  props: {
    id: String
  },
  data: () => ({
    showObservation: false
  })
}
</script>
