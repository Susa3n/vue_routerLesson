<template>
  <div>
    <div v-for="(layer, index) in layers" :key="index">{{ layer.message }}  {{layer.id}}</div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      layers: []
    };
  },
  components: {},
  mounted() {
    this.id = 0
  },
  methods: {
    add(options) {
      let layer = {...options,id: ++this.id}
      this.layers.push(layer)
      layer.timer = setTimeout(() => {
        this.remove(layer)
      }, layer.duration);
    },
    remove(layer) {
      clearTimeout(layer.timer)
      this.layers = this.layers.filter(item => item.id !== layer.id)
    }
  }
};
</script>
<style scoped></style>
