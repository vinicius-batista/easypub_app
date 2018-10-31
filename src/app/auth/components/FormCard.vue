<template functional>
  <v-layout justify-center>
    <v-flex xs10>
      <v-card flat class="form-card">
        <slot></slot>
        <h6
          class="tertiary--text text-xs-center body-1 mt-4 font-weight-regular"
          @click="listeners.actionClick"
          style="cursor: pointer;"
        >
          {{ props.helperText }}
          <span class="font-weight-medium">{{ props.actionText }}</span>
        </h6>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormCard',
  props: {
    helperText: String,
    actionText: String
  }
})
</script>

<style scoped>
.form-card {
  margin-top: -2em;
  padding: 2em 1em;
}
</style>
