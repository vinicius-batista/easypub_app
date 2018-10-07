<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list three-line>
        <template v-for="{ id} in menuItems">
          <v-list-tile
            :key="id"
            avatar
          >

            <v-list-tile-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    menuItems: Array

  },

  data () {
    return {

    }
  }
}
</script>
