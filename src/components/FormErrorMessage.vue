<template>
  <v-alert
    type="error"
    v-model="hasError"
    color="red lighten-4"
    class="alert-box mb-4"
    transition="scale-transition"
   >
    <span class="red--text text--darken-4 alert-box body-1">
      {{ errorMessage }}
    </span>
  </v-alert>
</template>

<script lang="ts">
import { ErrorHandler } from './types'
import Vue from 'vue'

export default Vue.extend({
  name: 'FormErrorMessage',
  data: () => ({
    errorMessage: '',
    hasError: false
  }),
  methods: {
    handleError (error: ErrorHandler) {
      this.errorMessage = error.graphQLErrors[0].message
      this.hasError = true
    },
    reset () {
      this.hasError = false
      this.errorMessage = ''
    }
  }
})
</script>

<style scoped>
.alert-box {
  border-color: rgba(183, 28, 28, 0.788) !important;
}
</style>
