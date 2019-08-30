<template>
  <v-app-bar app flat class="primary">
    <v-col cols="2">
      <v-btn icon dark v-if="isBackButtonVisible" @click="backOneRoute">
        <v-icon>fas fa-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col class="text-center" cols="8">
      <v-toolbar-title>
        <h4 class="white--text title">{{ title }}</h4>
      </v-toolbar-title>
    </v-col>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Toolbar',
  computed: {
    ...mapState('home', ['title', 'isBackButtonVisible']),
  },
  methods: {
    backOneRoute() {
      this.$router.go(-1)
    },
  },
}
</script>
