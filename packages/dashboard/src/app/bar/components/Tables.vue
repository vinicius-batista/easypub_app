<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card class="border-top" elevation="5">
        <v-card-title>Mesas</v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12" md="10">
              <slot name="add-table"></slot>
              <v-list two-line> </v-list>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    id: String,
    tables: Array,
  },
}
</script>

<style lang="scss">
.send-button {
  margin: 0 0;
  left: -8px;
  top: -12px;
}
</style>
