<template>
  <div>
    <Toolbar />
    <v-content app>
      <router-view></router-view>
    </v-content>
    <BottomNavigation />
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar'
import BottomNavigation from '../components/BottomNavigation'

export default {
  name: 'Home',
  components: {
    Toolbar,
    BottomNavigation
  }
}
</script>
