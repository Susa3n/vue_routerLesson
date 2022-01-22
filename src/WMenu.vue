<template>
  <Menu1>
    <!-- <template v-for="(menu, index) in data">
      <SubMenu1 v-if="menu.children" :key="menu.id">
        <template slot="title">
          {{ menu.name }}
        </template>
      </SubMenu1>
      <MenuItem1 v-else :key="menu.id">{{ menu.name }}</MenuItem1>
    </template> -->
      <Sub :data="data"></Sub>




  </Menu1>
</template>
<script>
import Sub from './Sub.vue'
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
    Sub
  },
};
</script>
<style scoped></style>
