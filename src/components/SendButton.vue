<template functional>
  <v-btn
    type="submit"
    color="primary"
    block
    :disabled="props.disabled"
    :loading="props.loading"
  >
    {{ props.text }}
  </v-btn>
</template>

<script>
export default {
  name: 'SendButton',
  props: {
    disabled: Boolean,
    loading: Boolean,
    text: String
  }
}
</script>
