<template>
  <div>
    <ul>
      <template v-for="(item, index) in data">
        <li v-if="!render" :key="index">{{ item }}</li>
        <ListItem
          v-else
          :key="`a${index}`"
          :render="render"
          :item="item"
        ></ListItem>
      </template>
    </ul>
  </div>
</template>
<script>
import ListItem from "./ListItem";
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
    render: {
      type: Function
    },
  },
  components: {
    ListItem,
  },
};
</script>
