<template functional>
  <v-layout class="primary py-5" justify-center wrap>
    <v-flex xs6 class="white logo-card">
      <v-img :src="require('@/assets/images/logo.png')"></v-img>
    </v-flex>
    <v-flex xs8 class="mt-4">
      <h2 class="white--text text-xs-center">{{ props.title }}</h2>
    </v-flex>
  </v-layout>
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
