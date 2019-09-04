<template>
  <v-alert type="error" text border="left">
    <span class="red--text text--darken-4 alert-box body-1">
      {{ errorMessage }}
    </span>
  </v-alert>
</template>

<script>
export default {
  name: 'FormErrorMessage',
  props: {
    error: Object,
  },
  computed: {
    errorMessage() {
      return this.error && this.error.message
    },
  },
}
</script>
