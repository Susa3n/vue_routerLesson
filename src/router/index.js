import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue' 
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'
Vue.use(Router)


export default new Router({ // 默认导出 首页和404页面
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  ]
})