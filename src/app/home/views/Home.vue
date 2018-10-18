<template>
  <div>
    <Toolbar />
    <v-content app>
      <v-slide-x-transition leave-absolute>
        <router-view></router-view>
      </v-slide-x-transition>
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
