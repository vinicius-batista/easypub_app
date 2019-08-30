<template functional>
  <v-row class="primary py-5" justify="center" >
    <v-col cols="6" class="white logo-card">
      <v-img :src="require('@/assets/images/logo.png')"></v-img>
    </v-col>
    <v-col cols="8" class="mt-4">
      <h2 class="white--text text-center">{{ props.title }}</h2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LogoCard',
  props: {
    title: String
  }
}
</script>

<style scoped>
.logo-card {
  border-radius: 1em;
}
</style>
