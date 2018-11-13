<template>
  <v-toolbar app flat class="primary">
    <v-flex xs2>
      <v-btn icon dark v-if="isBackButtonVisible" @click="backOneRoute">
        <v-icon>fas fa-chevron-left</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs8 text-xs-center>
      <v-toolbar-title>
        <h4 class="white--text title">{{ title }}</h4>
      </v-toolbar-title>
    </v-flex>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Toolbar',
  computed: {
    ...mapState('home', ['title', 'isBackButtonVisible'])
  },
  methods: {
    backOneRoute () {
      this.$router.go(-1)
    }
  }
}
</script>
