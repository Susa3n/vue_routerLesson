<template>
  <div >
    AAAAAAAAAAAA
    <hr>
    <button @click="changeBMsg">A组件调用B组件方法</button>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  name: 'A',
  data () {
    return {
      msg: 'A组件定义内容'
    }
  },
  components: { },
  mounted() {
    this.$bus.$on('changeAMsg',this.changeAMsg)
  },
  methods: {
    changeAMsg(value) {
      this.msg = value
    },
    changeBMsg() {
      this.$bus.$emit('changeBMsg','A组件改变B组的Msg')
    },
    
  }
}
</script>
<style scoped>
</style>
