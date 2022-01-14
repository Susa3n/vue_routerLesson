<template>
  <div>
    CCCC
    <button @click="$listeners.test">通过$listeners使用About的方法</button>

    <h2>inject注入的属性：{{ this.about.likes }}</h2>
    <button @click="changeLikes">操作inject的属性</button>
    <h2>{{data.name}}</h2>
  </div>
</template>
<script>
export default {
  name: "C",
  inject: ["about"],
  props: {
    age: {
      type: Number,
    },
  },
  data() {
    return {
      data: {
        name: 'susa3n'
      }
    };
  },
  components: {},
  mounted() {
    console.log(this.about);
    console.log(`age:`, this.age); // age: 19
    console.log(`$attrs:`, this.$attrs); // $attrs: {job: {__ob__: Observer},likes: ['篮球', __ob__: Observer],sex: "nv"}
    console.log(`$listeners:`, this.$listeners); // $listeners: {test: ƒ}
  },
  methods: {
    changeLikes() {
      let { name } = { ...this.data }
      name = 'lisi'
    },
  },
};
</script>
<style scoped></style>
