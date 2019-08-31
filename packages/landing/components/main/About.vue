<template>
  <v-row id="about" justify="center" align="center" class="my-5">
    <v-col cols="12" md="5" xl="4">
      <v-img :src="require('~/assets/images/about-min.png')"></v-img>
    </v-col>
    <v-col cols="10" md="5" xl="4">
      <h2 class="tertiary--text display-1 font-weight-regular">
        Você é seu próprio garçom!
      </h2>
      <h4 class="blue-grey--text text--darken-1 title mt-5">
        Veja todos os detalhes dos pratos oferecidos pela casa e escolha o
        preferido quando quiser.
      </h4>
      <br />
      <h4 class="blue-grey--text text--darken-1 title mb-5">
        Nunca mais passe por situações desagradáveis como espera para ser
        atendido e eventuais erros. Confira o valor de sua comanda em tempo
        real.
      </h4>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'About',
}
</script>
