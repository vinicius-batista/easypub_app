<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list three-line>
        <v-subheader>
          Bares
        </v-subheader>
        <template v-for="{ id, title, avatar, status} in bars">
          <v-list-tile
            :key="id"
            avatar
            :to="{ name: 'home.bar', params: { id } }"
          >
            <v-list-tile-avatar>
              <img :src="avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <BarStatusChip v-bind="{ status }"/>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import BarStatusChip from './BarStatusChip'

export default {
  name: 'BarsList',
  components: { BarStatusChip },
  props: {
    bars: Array
  }
}
</script>
