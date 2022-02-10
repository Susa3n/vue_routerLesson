<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <template v-for="(menu, index) in $store.state.menuList">
      <ReMenu :menu="menu" :key="index"></ReMenu>
    </template>
  </el-menu>
</template>
<script>
import ReMenu from "@/components/ReMenu";
export default {
  name: "Menu",
  components: {
    ReMenu,
  },
};
</script>
