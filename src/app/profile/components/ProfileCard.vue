<template functional>
  <v-layout justify-center wrap>
    <v-flex xs12>
      <v-card class="pa-4">
        <v-btn outline small round color="primary" @click="listeners['update:edit'](!props.edit)">
          Editar dados
        </v-btn>
        <slot></slot>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    edit: Boolean
  }
}
</script>
