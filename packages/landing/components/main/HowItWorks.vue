<template>
  <v-row id="how-it-works" justify="center" align="center" class="my-5">
    <v-col cols="12" sm="4" class="mt-5">
      <div class="text-center">
        <h2 class="tertiary--text headline font-weight-bold">Como funciona</h2>
      </div>
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="({ icon, text, title }, i) in items"
            :key="i"
            cols="12"
            sm="6"
            md="3"
            xl="2"
          >
            <v-card flat class="transparent">
              <v-card-text class="text-center">
                <v-icon x-large class="secondary--text">{{ icon }}</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <span
                  class="headline tertiary--text font-weight-medium text-center"
                >
                  {{ title }}
                </span>
              </v-card-title>
              <v-card-text
                class="blue-grey--text text--darken-1 font-weight-regular text-center subheading"
              >
                {{ text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HowItWorks',
  data: () => ({
    items: [
      {
        icon: 'fa-check',
        title: 'Sem erros',
        text: `Você faz o pedido pelo celular e ele vai direto para o bar. Sem intermediários que podem anotar errado o seu pedido.`,
      },
      {
        icon: 'fa-qrcode',
        title: 'Simples e rápido',
        text: `Sem necessidade de baixar grandes aplicativos. Apenas leia o QR Code  na  mesa do bar e estará pronto para fazer o pedido.`,
      },
      {
        icon: 'fa-mobile-alt',
        title: 'Tudo integrado',
        text: `Escolha o bar, pegue uma mesa, faça o pedido e pague a conta tudo isso no mesmo aplicativo sem sair de seu celular.`,
      },
      {
        icon: 'fab fa-elementor',
        title: 'Cardápios completos',
        text: `Com os cardápios digitais, você terá acesso a mais informações sobre os produtos do que os cardápios convencionais.`,
      },
    ],
  }),
}
</script>
