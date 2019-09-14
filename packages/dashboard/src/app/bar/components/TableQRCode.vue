<template>
  <v-card class="mx-auto" :loading="loading">
    <v-img v-if="qrCodeSrc" :src="qrCodeSrc" alt="QR Code da mesa"> </v-img>
    <v-card-actions>
      <v-btn icon :href="qrCodeSrc" download="qrcode.png">
        <v-icon>fa-download</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'TableQRCode',
  props: {
    tableId: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    qrCodeSrc: null,
    loading: false,
  }),
  watch: {
    tableId: {
      immediate: true,
      handler(value) {
        if (!value) {
          this.qrCodeSrc = null
          return
        }

        this.loading = true
        QRCode.toDataURL(value, { width: 500 }, (err, url) => {
          this.qrCodeSrc = url
          this.loading = false
        })
      },
    },
  },
}
</script>
