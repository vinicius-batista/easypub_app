<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-img :src="require('@/assets/images/logo.png')"></v-img>
        <v-card elevation="12" class="pa-3">
          <FormErrorMessage
            v-if="error !== null"
            v-bind="{ error }"
            transition="scale-transition"
          />
          <v-card-text>
            <v-form v-model="valid" @submit.prevent="submit">
              <slot></slot>
              <v-btn
                color="primary"
                type="submit"
                block
                large
                :loading="isButtonLoading"
                data-testId="submit-button"
              >
                {{ buttonText }}
              </v-btn>
            </v-form>
          </v-card-text>
          <h6
            class="tertiary--text text-center body-1 mt-4 font-weight-regular"
            style="cursor: pointer;"
            @click="$emit('action-text:clicked')"
            data-testId="action-text"
          >
            {{ helperText }}
            <span class="font-weight-medium">{{ actionText }}</span>
          </h6>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormErrorMessage from '@/components/FormErrorMessage'

export default {
  props: {
    buttonText: String,
    helperText: String,
    actionText: String,
    isButtonLoading: Boolean,
    error: Object,
  },
  components: { FormErrorMessage },
  data: () => ({ valid: false }),
  methods: {
    submit() {
      if (this.valid) {
        this.$emit('submit')
      }
    },
  },
}
</script>
