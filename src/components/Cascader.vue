<template>
  <div class="container"  v-click-outside="colse">
    <div class="title" @click="toggle">
    </div>
    <div v-if="isVisiable">
      <CascaderItem :options="options"></CascaderItem>
    </div>
  </div>
</template>
<script>
import { default as utils } from "@/diretives/outside";
import CascaderItem from './CascaderItem.vue'
export default {
  name: "Cascader",
  components: {
    CascaderItem
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisiable: true,
    };
  },
  directives: {
    clickOutside: utils.clickOutside,
  },
  methods: {
    colse() {
      this.isVisiable = false;
    },
    toggle() {
      this.isVisiable = !this.isVisiable;
    },
  },
};
</script>
<style>
.container > .title {
  height: 30px;
  width: 150px;
  border: 1px solid #ccc;
  display: inline-block;
  margin-bottom: 10px;
}
.content {
  display: flex;
}
</style>
