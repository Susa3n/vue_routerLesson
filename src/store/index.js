import Vuex from 'vuex'
import vue from 'vue'
import axios from 'axios'
import { authRoutes } from '@/router'
vue.use(Vuex)
const request = axios.create({
  baseURL: 'http://localhost:3000'
});
request.interceptors.response.use(result => {
  return result.data
})
/**
*@menuList 扁平化的后台路由表
*@menu 树状结构路由表
*@auths 权限关键字数组
*@authRoutes 静态路由表
*@needRoutes 根据权限关键字过滤出的真实路由表
*/

// 将扁平化的路由表改为树结构
function getTreeList(menuList) {
  let menu = []
  let auths = []
  let mapRoutes = {}
  menuList.forEach(item => {
    auths.push(item.auth)
    item.children = [] // 给所有menu 加一个children属性
    mapRoutes[item.id] = item
    if (item.pid === -1) { // 根节点
      menu.push(item)
    } else {
      if (mapRoutes[item.pid]) { // 如果不是根节点  找到对应的父节点 之后将当前节点插入到父节点中
        mapRoutes[item.pid].children.push(item)
      }
    }
  })
  // 返回 权限数组的关键字，以便过滤静态路由。 树状的路由菜单
  return { auths, menu }
}


// 过滤路由根据权限关键字数组
function formatMenuList(authRoutes,auths) {
  return authRoutes.filter(route => {
    // 如果当前route的route的name属于路由权限关键字 返回true
    if(auths.includes(route.name)){
      // 如果当前route有children 进行递归 查看下一层是否有权限 返回给当前route的children属性
      route.children = route.children && formatMenuList(route.children,auths)
      return true
    }
  })
}



export default new Vuex.Store({
  state: {
    hasPermission: false,
    menuList: []
  },
  mutations: {
    setPermission(state) {
      state.hasPermission = true
    },
    saveMenu(state, menu) {
      state.menuList = menu
    }
  },
  actions: {
    async getNewRoute({ commit }) {
      let { menuList } = await request.get('/roleAuth')
      let { menu, auths } = getTreeList(menuList)
      commit('saveMenu', menu)
      let needRoutes = formatMenuList(authRoutes,auths)
      console.log(needRoutes,menu);
      commit('setPermission')
      return needRoutes
    }
  }
})