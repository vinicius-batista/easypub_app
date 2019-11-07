<template>
  <v-card class="border-top" elevation="5">
    <v-card-title>Categorias</v-card-title>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="11">
          <slot name="add-category"></slot>
        </v-col>
        <v-col cols="12" md="11">
          <slot name="categories-list"></slot>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Categories',
}
</script>

<style lang="scss" scoped>
.border-top {
  border-top: 0.3em solid #2962ff !important;
}
</style>
