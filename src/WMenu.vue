<template>
  <Menu>
    <template v-for="(menu, index) in data">
      <Resub v-if="menu.children" :key="menu.id" :data="menu"></Resub>
      <MenuItem v-else :key="menu.id">{{ menu.name }}</MenuItem>
    </template>
  </Menu>
</template>
<script>
import Resub from './Resub.vue'
export default {
  name: "WMenu",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: {
    Resub
  },
};
</script>
<style scoped></style>
