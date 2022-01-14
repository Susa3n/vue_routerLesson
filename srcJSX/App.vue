<template>
  <div id="app">
    APP
    <Level :t="1">你好</Level>
    <Level :t="2">你好</Level>
    <Level :t="3">你好</Level>
    <Level :t="4">你好</Level>
    <Level :t="5">你好</Level>
    <Level :t="6">你好</Level>


    <List :data="['香蕉','苹果','橘子']" :render="render"></List>


    <List1 :data="['香蕉','苹果','橘子']"> 
      <!-- 普通插槽在父组件中执行 -->
      <!-- 子组件中执行的是 作用域插槽 -->
      <template v-slot:default="{item,a}">
        <span>{{item}} {{a}}</span>
      </template>
    </List1>
  </div>
</template>
<script>
import Level from '@/views/components/level.js'
import List from '@/views/components/List'
import List1 from '@/views/components/List1'
export default {
  name: 'App',
  components: {
    Level,List,List1
  },
  methods: {
    render(h,data) {
      return <span>{data}</span>
    }
  }
}
</script>

