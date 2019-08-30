<template functional>
  <v-chip
    v-if="props.status === 'aberto'"
    small
    text-color="green darken-4"
    color="green lighten-4"
  >
    Aberto
  </v-chip>
  <v-chip
    v-else
    small
    color="red lighten-4"
    text-color="red darken-4"
  >
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
