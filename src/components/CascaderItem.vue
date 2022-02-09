<template>
  <div class="content">
    <div class="content-left">
      <div
        v-for="(item, index) in options"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="content-right"  v-if="lists && lists.length">
        <CascaderItem :options="lists"></CascaderItem>
    </div>
  </div>
</template>
<script>
export default {
  name: "CascaderItem",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentItem: null,
    };
  },
  computed: {
    lists() {
      return this.currentItem && this.currentItem.children;
    },
  },
  methods: {
    selectItem(item) {
      this.currentItem = item;
    },
  },
};
</script>
