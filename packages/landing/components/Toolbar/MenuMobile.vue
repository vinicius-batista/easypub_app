<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="slide-x-reverse-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon class="d-flex d-sm-none" v-on="on">
        <v-icon>fa-bars</v-icon>
      </v-btn>
    </template>
    <v-card color="#f0f0f0">
      <v-row class="pt-5" justify="center">
        <v-col cols="1" class="pt-5">
          <v-btn icon @click="dialog = false" class="text-center">
            <v-icon>fa-times</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <v-list class="transparent">
            <v-list-tile
              v-for="({ label, element }, i) in items"
              :key="i"
              @click="goTo(element, { offset: -1999 })"
            >
              <v-list-tile-title
                class="font-weight-bold title tertiary--text text-center"
              >
                {{ label }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6">
          <SubscribeBtn @click="dialog = false" />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import SubscribeBtn from './SubscribeBtn'

export default {
  name: 'MenuMobile',
  components: { SubscribeBtn },
  data: () => ({
    dialog: false,
    items: [
      {
        label: 'Sobre',
        element: '#about',
      },
      {
        label: 'Como Funciona',
        element: '#how-it-works',
      },
    ],
  }),
  methods: {
    goTo(element) {
      this.dialog = false
      this.$vuetify.goTo(element)
    },
  },
}
</script>
