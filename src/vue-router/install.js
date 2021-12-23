// 安装插件，依赖vue
export let _Vue;
export default function install(Vue) {
  _Vue =  Vue
  Vue.mixin({ 
    beforeCreate() {
      if(this.$options.router) {
        this._routerRoot = this // 根实例
        this._router = this.$options.router
        console.log(this._router);
        this._router.init(this) // 初始化
      }else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
      console.log(this);
    },
  })

  // 1. 注册全局属性 $route $router
  // 2. 注册全局指令 v-scroll 
  // 3. 注册全局的组件 router-view router-link
}

