<template>
  <v-app style="background-color: #f3f7f9">
    <v-content>
      <v-container grid-list-xs :style="{ padding: 0 }">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
