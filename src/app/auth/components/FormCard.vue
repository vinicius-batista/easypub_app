<template functional>
  <v-row justify="center">
    <v-col cols="10">
      <v-card flat class="form-card">
        <slot></slot>
        <h6
          class="tertiary--text text-center body-1 mt-4 font-weight-regular"
          @click="listeners.actionClick"
          style="cursor: pointer;"
        >
          {{ props.helperText }}
          <span class="font-weight-medium">{{ props.actionText }}</span>
        </h6>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FormCard',
  props: {
    helperText: String,
    actionText: String
  }
}
</script>

<style scoped>
.form-card {
  margin-top: -2em;
  padding: 2em 1em;
}
</style>
