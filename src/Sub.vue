<template>
  <div>
    <template v-for="(menu, index) in data">
      <SubMenu1 v-if="menu.children" :key="menu.id">
        <template slot="title">
          {{ menu.name }}
        </template>
        <Sub :data="menu.children"></Sub>
      </SubMenu1>
      <MenuItem1 v-else :key="menu.id">{{ menu.name }}</MenuItem1>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Sub',
  props: {
    data: {

    }
  },
  data () {
    return {}
  },
  components: { }
}
</script>
<style scoped>
</style>
