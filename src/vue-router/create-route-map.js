export default function createRouteMap(routes,oldPathList,oldPathMap) {
  // 将用户传入的数据格式化  构建 存放路由数组 及 路由映射表
  let pathList = oldPathList || []
  let pathMap = oldPathMap || Object.create(null)


  routes.forEach(route => {
    // 添加路由记录
    addRouteRecord(route,pathList,pathMap)
  })
  return {pathList,pathMap}
}

function addRouteRecord(route,pathList,pathMap,parentRoute) {
  let path = parentRoute ? `${parentRoute.path}/${route.path}` : route.path
  let record = {
    path: path,
    component: route.component,
    parentRoute
  }
  if(!pathMap[path]) {
    pathMap[path] = record
    pathList.push(path)
  }
  if(route.children) {
    route.children.forEach(childRoute => {
      if(childRoute.path.indexOf('/') == 0){
        addRouteRecord(childRoute,pathList,pathMap)
      }else {
        addRouteRecord(childRoute,pathList,pathMap,route)
      }
    })
  }
}

