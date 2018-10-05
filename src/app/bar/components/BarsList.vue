<template functional>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list three-line>
        <v-subheader>
          Bares
        </v-subheader>
        <template v-for="{ title, avatar, status} in props.bars">
          <v-list-tile
            :key="title"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-chip
                v-if="status === 'aberto'"
                small
                disabled
                color="green lighten-4"
                class="green--text text--darken-4"
              >
                Aberto
              </v-chip>
              <v-chip
                v-else
                small
                color="red lighten-4"
                class="red--text text--darken-4"
              >
                Fechado
              </v-chip>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BarsList',
  props: {
    bars: Array
  }
}
</script>
