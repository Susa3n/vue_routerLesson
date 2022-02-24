export default  {
  functional: true,
  /**
   * 
   * @param {Function} 渲染的方法(默认)
   * @param {*} param1 parent代表当前父组件，任何组件都有$route的属性（$router也就是当前路径匹配到的路由信息）
   * @returns 
   */
  render(h,{parent,data}) {
    let route = parent.$route
    let matched = route.matched
    data.routeView = true //  当前是组件属性routeView 为 true 以便下一层做展示
    let depth = 0
    console.info('data:',data);
    while(parent) {
      if(parent.$vnode && parent.$vnode.data.routeView) {
        depth++
      }
      parent = parent.$parent
    }
    let record = matched[depth]
    if(!record) {
      return h()
    }

    let component = record.component
    console.log('1111111');
    return h(component,data)
  },
}