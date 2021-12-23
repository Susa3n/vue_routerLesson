import createRouteMap from './create-route-map'
export default function createMetcher(routes) {
  // routes 用户当前传入的配置
  // 扁平化用户传入的数据 传入路由映射表


  // [/,/about,/about/a,/about/b] 存放路径
  // {/:记录,/about:记录,/about/a:记录,/about/b:记录 }  存放路由映射表
  let {pathList,pathMap} = createRouteMap(routes) // 初始化配置
  console.log(pathList,pathMap);

  // 动态添加路由
  function addRoutes(routes) {
    createRouteMap(routes,pathList,pathMap)
  }

  // 用来匹配的方法
  function match() {

  }

  return {
    match,
    addRoutes
  }
}