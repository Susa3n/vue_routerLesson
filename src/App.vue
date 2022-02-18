<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/profile">个人中心</router-link>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import { getTest } from '@/api/index.js'
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
