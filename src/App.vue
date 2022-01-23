<template>
  <div class='app'>
    <button @click="showMessage">点击</button>
  </div>
</template>
<script>
import  Message  from '@/message.js'
import vue from 'vue'
vue.use(Message)
export default {
  name: 'App',
  data () {
    return {}
  },
  components: { },
  methods: {
    showMessage() {
      // Message.success({
      //   duration: 2000,
      //   message: '弹出框'
      // })
      this.$message.success({
        duration: 2000,
        message: 'ceshi'
      })
    }
  }
}
</script>
<style scoped>
</style>
