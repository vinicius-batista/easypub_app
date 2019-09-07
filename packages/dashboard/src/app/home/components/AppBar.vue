<template>
  <v-app-bar color="primary" dense dark app clipped-left>
    <v-app-bar-nav-icon @click="$emit('nav-icon:clicked')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title>EasyPub - Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
}
</script>
