<template>
  <el-submenu v-if="menu.children.length > 0" :index="menu.auth">
    <template slot="title">
      <span>{{ menu.name }}</span>
    </template>
    <template v-for="(m, i) in menu.children">
      <ReMenu :menu="m" :key="i"></ReMenu>
    </template>
  </el-submenu>
  <el-menu-item v-else :index="menu.auth">
    <span slot="title">
      <router-link :to="{ name: menu.auth }">{{ menu.name }}</router-link>
    </span>
  </el-menu-item>
</template>
<script>
export default {
  name: "ReMenu",
  props: {
    menu: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>
<style scoped></style>
