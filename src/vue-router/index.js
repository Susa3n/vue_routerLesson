import install  from './install'
import createMetcher from './create-metcher'
import HashHistory from './history/hash'
export default class VueRouter {
  constructor(options = {}) {
    // 1、什么叫路由？ 核心根据不同路径跳转不同页面
    // 2、将用户传递的routes，转化为好维护的数据结构


    // match 负责匹配路径 { '/': '记录', 'about': '记录' }
    // addRoutes 动态添加路由配置
    this.metcher = createMetcher(options.routes || [])


    // 创建路由系统  根据模式 来创建不同的路由对象
    this.mode = options.mode || 'hash'

    this.history = new HashHistory(this)
  }
  init(app) { // app 为vue的实例 vm
    const history = this.history
    // const setupHashLister = () => {
    //   history.setupListener()
    // } 

    history.transitionTo(history.getCurrentLocation())
  }
}
VueRouter.install = install
