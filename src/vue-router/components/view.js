export default  {
  functional: true,
  render(h,{parent,data}) {
    let route = parent.$route
    let matched = route.matched
    data.routeView = true // 当前是组件属性routeView 为 true 以便下一层做展示
    let depth = 0
    
    while(parent) {
      console.log(parent);
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
    return h(component,data)
  },
}