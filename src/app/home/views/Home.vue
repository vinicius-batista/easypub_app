<template>
  <div>
    <Toolbar />
    <router-view></router-view>
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
