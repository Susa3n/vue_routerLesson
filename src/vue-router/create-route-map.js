export default function createRouteMap(routes,oldPathList,oldPathMap) {
  // 将用户传入的数据格式化  构建 存放路由数组 及 路由映射表
  let pathList = oldPathList || [] // pathList 路由路径列表  默认为空数组
  let pathMap = oldPathMap || Object.create(null) // pathMap 路由映射表 默认为空对象
  let parentRoute

  routes.forEach(route => { // 遍历routers
    // 添加路由记录
    addRouteRecord(route,pathList,pathMap, parentRoute) // 传入当前的遍历的route 路由路径列表  路由映射表
  })
  console.log(pathMap);
  debugger
  return {pathList,pathMap}
}

/**
 * 
 * @param {Object} route 遍历的route
 * @param {Array} pathList  空的路由路径列表
 * @param {Object} pathMap 空的路由映射表  
 * @param {Object} parentRoute  如果遍历的某个路由的有父路由 需要拼接path
 */
function addRouteRecord(route,pathList,pathMap,parentRoute) {
  // let path = parentRoute ? `${parentRoute.path}/${route.path}` : route.path 
  let path
  if(parentRoute) {
    route.parentRoute = parentRoute
    path = `${parentRoute.path}/${route.path}`
  } else {
    path = route.path
  }

  
  let record = { 
    path,
    component: route.component, // 对应的路由组件
    parentRoute
  }


  if(!pathMap[path]) { // 如果路由映射表没有当前路由path添加路由记录、push路由路径
    pathMap[path] = record
    pathList.push(path)
  }
  if(route.children) { // 遍历的路由如果有子路由递归添加路由记录 
    route.children.forEach(childRoute => {
      if(childRoute.path.indexOf('/') == 0){ // 根据路由路径的开头是否是“/”,如果是直接递归添加子路由，如果不是递归添加子路由需要传入父路由
        addRouteRecord(childRoute,pathList,pathMap)
      }else {
        route.path = path
        addRouteRecord(childRoute,pathList,pathMap,route)
      }
    })
  }
}

