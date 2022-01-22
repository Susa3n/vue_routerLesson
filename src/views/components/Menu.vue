<template>
  <ul>
    <slot name="default"></slot>
  </ul>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {  }
}
</script>
<style  scoped>
</style>
