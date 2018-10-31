<template>
  <v-app style="background-color: #f1f3f5">
    <v-container grid-list-xs :style="{ padding: 0 }">
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>
