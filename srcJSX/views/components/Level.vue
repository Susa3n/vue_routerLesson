<template>
  <div>
    <h1 v-if="t == 1"><slot></slot></h1>
    <h2 v-else-if="t == 2"><slot></slot></h2>
    <h3 v-else-if="t == 3"><slot></slot></h3>
    <h4 v-else-if="t == 4"><slot></slot></h4>
    <h5 v-else-if="t == 5"><slot></slot></h5>
    <h6 v-else-if="t == 6"><slot></slot></h6>
  </div>
</template>
<script>
export default {
  name: "Level",
  props: {
    t: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>
