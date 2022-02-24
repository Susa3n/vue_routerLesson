<template>
  <div >
    BBBBBBBBBB
    <h2>{{parentValue}}</h2>
    <h2>{{msg}}</h2>
    <button @click="$listeners.test(msg)">通过$listeners使用About的方法</button>
    <button @click="$emit('test')">通过$emit使用About的方法</button>
    <button @click="emitParentMsg">子组件给父组件传递数据</button>
    <button @click="changeAMsg">调用A组件的方法传递数据</button>

    <hr>
    <C v-bind="$attrs" v-on="$listeners" :age="$attrs.age"></C>
    <!-- <router-link :to="{path: '/c'}">ccccccccccccc</router-link> -->
    <!-- <hr>-->
    <router-view></router-view> 
  </div>
</template>
<script>
import C from './C.vue'
export default {
  name: 'B',
  props: ['name','test'],
  data () {
    return {
      msg:'子组件的消息',
      user: {
        name: 'susa3n',
        age: 18,
        job: {
          salary: 10,
          professional: '前端'
        },
        likes: ['lanqiu']
      }
    }
  },
  mounted() {
    console.log(this);
    console.log('name:',this.name); // name: susa3n
    console.log('$attrs:',this.$attrs); // {age: 19,job: {__ob__: Observer},likes: ['篮球', __ob__: Observer],sex: "nv"}
    console.log('$listeners:',this.$listeners); // { test: ƒ invoker() }
    this.$bus.$on('changeBMsg',this.changeBMsg)
  },
  components: { C },
  computed:{
    parentValue:{
      get (){
        return this.$parent.message
      } 
    }
  },
  methods: {
    test1() {
      console.log('11111');
    },
    emitParentMsg() {
      // this.$parent.test(this.msg,2222)
      // this.$emit('test',this.msg,22222)
      this.test(this.msg,2222)
    },
    changeAMsg() {
      this.$bus.$emit('changeAMsg', 'B组件调用')
    },
    changeBMsg(value) {
      console.log(value);
      this.msg = value
    },
  }
}
</script>
<style scoped>
</style>
