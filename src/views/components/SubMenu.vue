<template>
  <li>
    <span @click="change">
      <slot name="title"></slot>
    </span>
    <ul v-show="token">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: "SubMenu",
  data() {
    return {
      token: false,
    };
  },
  components: {},
  methods: {
    change() {
      this.token = !this.token;
    },
  },
};
</script>
<style scoped></style>
