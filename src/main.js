import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


router.beforeEach(async (to,from,next)=>{
  if(!store.state.hasPermission) { // 如果没有权限
    // 获取权限 
    const newRouter = await store.dispatch('getNewRoute')
    console.log(newRouter);
    router.addRoutes(newRouter)
    next({...to,replace: true})
  }else { // 有权限去放行
    next()
  }
})

new Vue({
  name: 'main',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
