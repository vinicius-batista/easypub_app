<template>
  <div>
    <AppBar @nav-icon:clicked="toogleDrawer" />
    <v-content app>
      <router-view></router-view>
    </v-content>
    <Drawer v-bind="{ drawerStatus }" />
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'

export default {
  name: 'Home',
  components: { AppBar, Drawer },
  data: () => ({
    drawerStatus: true,
  }),
  methods: {
    toogleDrawer() {
      this.drawerStatus = !this.drawerStatus
    },
  },
}
</script>
