<template>
  <v-row justify="center" class="full-screen" align-content="center">
    <v-col cols="8">
      <v-img :src="require('@/assets/images/logo.png')"></v-img>
    </v-col>
    <v-col cols="8">
      <h4 class="tertiary--text title text-center">Seu garçom virtual</h4>
    </v-col>
    <v-col cols="8" class="mt-5">
      <v-btn
        round
        color="primary"
        block
        large
        @click="changeRoute('auth.login')"
      >
        Entrar
      </v-btn>
    </v-col>
    <v-col cols="8">
      <v-btn
        round
        color="primary"
        outlined
        block
        large
        @click="changeRoute('auth.register')"
      >
        Cadastrar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    changeRoute(name) {
      this.$router.push({ name })
    },
  },
}
</script>

<style>
.full-screen {
  height: calc(100vh);
  min-height: calc(100vh);
}
</style>
