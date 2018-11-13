<template functional>
  <v-chip
    v-if="props.status === 'aberto'"
    small
    disabled
    color="green lighten-4"
    class="green--text text--darken-4"
  >
    Aberto
  </v-chip>
  <v-chip v-else small color="red lighten-4" class="red--text text--darken-4">
    Fechado
  </v-chip>
</template>

<script>
export default {
  name: 'BarStatusChip',
  props: {
    status: String
  }
}
</script>
