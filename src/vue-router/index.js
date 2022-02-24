import install  from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hash'
export default class VueRouter {
  constructor(options = {}) {
    // 1、什么叫路由？ 核心根据不同路径跳转不同页面
    // 2、将用户传递的routes，转化为好维护的数据结构


    // match 负责匹配路径 { '/': '记录', 'about': '记录' }
    // addRoutes 动态添加路由配置
    this.matcher = createMatcher(options.routes || [])
    // 创建路由系统  根据模式 来创建不同的路由对象
    this.mode = options.mode || 'hash'
    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this) // 创建
        break;
      case 'history':
        this.history = new Html5History(this)
        break;
    }
    
  }

  // 默认已运行的时候
  init(app) { // app 为vue的实例 vm  初始化 根据当前的路径 显示对应路由
    const history = this.history // 生成HashHistory的实例  可以访问导history类及hash类的方法
    const setupHashLister = () => {
      history.setupListener()
    } 
    // history.getCurrentLocation() 获取当前hash模式下的指定路径，history.transitionTo()过渡导当前组件
    history.transitionTo(history.getCurrentLocation(),setupHashLister)  // 后续需要监听路径的变化
    // 发布订阅模式  给history 绑定一个监听的函数 传入callback 
    history.listen((route) => {
      app._route = route
    })
  }

  // 用来匹配路由的方法
  match(location) {
    return this.matcher.match(location)
  }

  push() {

  }

  replace() {

  }
}
VueRouter.install = install
