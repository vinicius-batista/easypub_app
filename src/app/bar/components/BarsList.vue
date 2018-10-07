<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list two-line>
        <v-subheader>
          Bares
        </v-subheader>
        <template v-for="{ id, name, avatar, status } in bars">
          <v-list-tile
            :key="id"
            avatar
            :to="{ name: 'home.bar', params: { id } }"
          >
            <v-list-tile-avatar color="secondary">
              <img v-if="avatar" :src="avatar">
              <span v-else> {{ name.charAt(0).toUpperCase() }} </span>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ name }}</v-list-tile-title>
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
