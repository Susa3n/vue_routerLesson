import createRouteMap from './create-route-map'
import { createRoute } from './history/history'
export default function createMatcher(routes) {
  // routes 用户当前传入的配置
  // 扁平化用户传入的数据 传入路由映射表


  // [/,/about,/about/a,/about/b] 存放路径
  // {/:记录,/about:记录,/about/a:记录,/about/b:记录 }  存放路由映射表
  let {pathList,pathMap} = createRouteMap(routes) // 初始化配置
  console.log(pathMap);
  // 动态添加路由 
  
  /**
   * 
   * @param {Array} routes  动态添加的路由配置routes
   * @param {Array} pathList  已经初始化好的路由路径列表
   * @param {Object} pathMap  已经初始化好的路由映射表
   */
  function addRoutes(routes) {
    createRouteMap(routes,pathList,pathMap)
  }

  // 用来匹配的方法，根据路径找到对应的记录
  function match(location) {
    let record = pathMap[location]  // 找到了记录
    let local = {
      path: location
    }
    if(record) {
      return createRoute(record,local)
    }
    return createRoute(null, local) // 如果没有匹配到 记录为null 路径放进去
  }

  return {
    match,
    addRoutes
  }
}