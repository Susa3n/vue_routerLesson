import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

// 路由的渲染流程 钩子的执行顺序  
let whiteRoutes = ['/login']
router.beforeEach((to, from, next) => {
  console.log(to);
  store.dispatch('validate').then(result => {
    if(!result) {
      if(to.name === 'login') {
        next({
          path: '/'
        })
      }else {
        next()
    }
  })
})
new Vue({
  name: 'main',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
