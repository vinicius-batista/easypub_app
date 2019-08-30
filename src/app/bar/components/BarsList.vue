<template>
  <v-row style="background-color: #fff">
    <v-col cols="12">
      <v-list two-line>
        <v-subheader>
          Bares
        </v-subheader>
        <template v-for="{ id, name, avatar, status } in bars">
          <v-list-item :key="id" :to="{ name: 'home.bar', params: { id } }">
            <v-list-item-avatar color="secondary">
              <v-img v-if="avatar" :src="avatar" />
              <span v-else> {{ name.charAt(0).toUpperCase() }} </span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <BarStatusChip v-bind="{ status }" />
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import BarStatusChip from './BarStatusChip'

export default {
  name: 'BarsList',
  components: { BarStatusChip },
  props: {
    bars: Array,
  },
}
</script>
