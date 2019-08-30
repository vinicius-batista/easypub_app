<template>
  <v-dialog
    :value="display"
    full-width
    max-width="600px"
    transition="dialog-transition"
    @input="updateDisplay"
  >
    <v-card>
      <v-card-title primary-title>
        <h5 class="title tertiary--text">Leia o QRCode que está na sua mesa</h5>
      </v-card-title>
      <QrcodeStream v-if="display" @decode="onDecode" @init="onInit">
        <Loading v-if="loading" />
      </QrcodeStream>
    </v-card>
  </v-dialog>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  name: 'ModalQrReader',
  props: {
    display: Boolean
  },
  data: () => ({
    loading: false
  }),
  components: { QrcodeStream },
  methods: {
    updateDisplay (e) {
      this.$emit('update:display', e)
    },
    onDecode (result) {
      this.$emit('decode', result)
      this.updateDisplay(false)
    },
    stopLoading () {
      this.loading = false
    },
    async onInit (promise) {
      this.loading = true
      promise
        .then(this.stopLoading)
        .catch(this.stopLoading)
    }
  }
}
</script>
