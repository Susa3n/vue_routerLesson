import routerView from "./components/view";

// 安装插件，依赖vue
export let _Vue;
export default function install(Vue) {
  _Vue =  Vue
  Vue.mixin({ 
    beforeCreate() {
      if(this.$options.router) {
        this._routerRoot = this // 根实例
        this._router = this.$options.router
        this._router.init(this) // 初始化
        // 响应式数据变化  只要_route发生变化 就会更新视图
        Vue.util.defineReactive(this,'_route',this._router.history.current)
      }else {
        // 所有的组件都能通过 _routerRoot.router 拿到VueRouter的实例
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    },
  })

  // 1. 注册全局属性 $route $router
  Object.defineProperty(Vue.prototype,'$route',{ // $route 都是属性 matched path current
    get() {
      return this._routerRoot._route
    }
  })


  Object.defineProperty(Vue.prototype,'$router',{ // $router 
    get() {
      return this._routerRoot._router
    }
  })
  // 2. 注册全局指令 v-scroll 


  // 3. 注册全局的组件 router-view router-link
  Vue.component('routerView',routerView)
  
}

