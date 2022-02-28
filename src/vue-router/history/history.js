export function createRoute(record, location) {
  console.log(record);
  let res = [];
  if(record) { // 如果匹配到路由 将匹配到的路由记录unshift 到matched中 递归找上一层,直至record为undefined 
    while(record) { 
      res.unshift(record)
      record = record.parentRoute
    }
  }
  console.log(res);
  return {
    ...location,
    matched: res
  }
}
export default class History {
  constructor(router) {
    this.router = router
    // 默认路由中应该保存一个当前的路径 后续会更改这个路径
    this.current = createRoute(null, {
      path: '/'
    })
  }
  /**
   * 跳转路由核心逻辑
   * @param {String} location 代表跳转目的地，当前路由路径
   * @param {Function} onComplete 代表当跳转成功要执行的方法
   * @returns 
   */
   transitionTo(location,onComplete) {
    let route = this.router.match(location) // 用当前路径去匹配record 
    // route 就是当前路径要匹配的所有路由matched,路径信息path


    // 需要新匹配到的路由信息 覆盖掉当前实例的current
    if(this.current.path === location && route.matched.length === this.current.matched.length) {
      return // 如果相同路径 就不进行跳转路由了
    }


    // 更新当前实例的current信息
    this.updateRoute(route)
    onComplete && onComplete()
  }
  
  updateRoute(route) {
    this.current = route
    this.callback && this.callback(route) // 路径变化传给listen方法
  }
  
  // 提前发布一个回调函数 用于
  listen(callback) {
    this.callback = callback
  }
}