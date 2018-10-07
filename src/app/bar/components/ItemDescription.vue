<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div class="headline"> <span>{{item.name}}</span>
          </div>
          <v-spacer></v-spacer>
          <v-subheader class="headline">R$ {{item.price}}</v-subheader>
        </v-card-title>
        <v-img :alt="item.description" height="auto" :src="item.photo" class="mx-4" />
        <v-card-text>
          <v-subheader>{{item.description}}</v-subheader>
        </v-card-text>
        <v-card-text class="text-xs-center">
          <span class="body-2 mr-3">
            <v-icon>fa-clock</v-icon>
            {{item.waitingTime}}
          </span>
          <span class="body-2 ml-2">
            <v-icon>fa-users</v-icon>
            {{item.howManyPeopleEats}} Pessoas
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="status = !status" flat block large color="secondary">
            Adicionar observação
            <v-icon right>fas fa-plus</v-icon>
          </v-btn>
        </v-card-actions>
          <v-textarea v-if="status" outline placeholder="Digite aqui sua obersavação"></v-textarea>
        <v-card-actions class="text-xs-center">
          <v-spacer></v-spacer>
          <v-btn round block color="primary">PEDIR</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data: () => ({
    status: false
  })
}
</script>
