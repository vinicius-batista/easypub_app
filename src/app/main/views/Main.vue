<template>
  <v-layout justify-center class="full-screen" wrap align-content-center>
    <v-flex xs8>
      <v-img :src="require('@/assets/images/logo.png')"></v-img>
    </v-flex>
    <v-flex xs8>
      <h4 class="tertiary--text title text-xs-center">Seu garçom virtual</h4>
    </v-flex>
    <v-flex xs8 class="mt-5">
      <v-btn
        round
        color="primary"
        block
        large
        @click="changeRoute('auth.login')"
      >
        Entrar
      </v-btn>
    </v-flex>
    <v-flex xs8>
      <v-btn
        round
        color="primary"
        outline
        block
        large
        @click="changeRoute('auth.register')"
      >
        Cadastrar
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    changeRoute (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style>
.full-screen {
  height: calc(100vh);
  min-height: calc(100vh);
}
</style>
