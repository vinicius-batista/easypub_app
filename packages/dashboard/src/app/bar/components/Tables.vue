<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card class="border-top" elevation="5">
        <v-card-title>Mesas</v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="12" md="10">
              <slot name="add-table"></slot>
            </v-col>
            <v-col cols="12" md="8">
              <slot name="tables-list"></slot>
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
}
</script>

<style lang="scss" scoped>
.border-top {
  border-top: 0.3em solid #2962ff !important;
}
</style>
