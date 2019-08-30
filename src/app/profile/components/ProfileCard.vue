<template functional>
  <v-row justify="center" >
    <v-col cols="12">
      <v-card class="pa-4">
        <v-btn outlined small round color="primary" @click="listeners['update:edit'](!props.edit)">
          Editar dados
        </v-btn>
        <slot></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    edit: Boolean
  }
}
</script>
