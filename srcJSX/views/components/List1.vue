<template>
  <div>
    <ul>
      <template v-for="(item, index) in data">
        <slot :item="item" :a="index" ></slot>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
