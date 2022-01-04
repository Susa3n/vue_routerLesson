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
        this.history = new HashHistory(this)
        break;
      case 'history':
        this.history = new Html5History(this)
        break;
    }
    
  }
  init(app) { // app 为vue的实例 vm
    const history = this.history // 生成HashHistory的实例  可以访问导history类及hash类的方法
    const setupHashLister = () => {
      history.setupListener()
    } 
    // history.getCurrentLocation() 获取当前hash模式下的路径，history.transitionTo()过渡导当前组件
    history.transitionTo(history.getCurrentLocation(),setupHashLister)  // 后续需要监听路径的变化
  }

  match(location) {
    return this.matcher.match(location)
  }
}
VueRouter.install = install
