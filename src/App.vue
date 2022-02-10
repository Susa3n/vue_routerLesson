<template>
  <div id="app">
    <router-view></router-view>
    <Menu></Menu>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: { Menu }
}
</script>
<style scoped>
</style>
