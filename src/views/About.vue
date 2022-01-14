<template>
  <div class="about">
      <A></A>
       <button @click="changeLikes">操作likes数据</button>
      <hr>
      <input type="text" v-model="message">
      <button @click="changeBMsg">改变B组件的方法</button>
      <B :name="name" :age="age" :sex="sex" :likes="likes" :job="job" @test="test" :test="test" ref="b"></B>
      <button @click="viewB">refs查看B组件</button>
      <!-- <h2>{{$refs.b.msg}}</h2> -->
  </div>
</template>
<script>
import A from './components/A.vue'
import B from './components/B.vue'
export default {
  name:'about',
  data() {
    return {
      name: 'susa3n',
      age:19,
      sex:'nv',
      likes: ['篮球'],
      job: {
        salary: 9000,
        professional: 'gongren'
      },
      message: 'hello'
    }
  },
  // provide: {
  //   about: this.name
  // },
  provide() {
    return {
      about:this
    }
  },
  components: {
    A,B
  },
  mounted() {
    console.log(this.$refs.b.msg);
  },
  methods: {
    test() {},
    viewB(msg,num) {
      console.log(this.$refs.b);
      this.$refs.b.test1()
    },
    changeBMsg() {
      this.$children[1].msg = '父组件改变子组件的消息'
    },
    changeLikes() {
      this.likes.splice(1,1)
    }
  }
}
</script>
