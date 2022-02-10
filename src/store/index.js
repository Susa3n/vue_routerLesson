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
  return { auths, menu }
}

function formatMenuList(authRoutes,auths) {
  return authRoutes.filter(route => {
    if(auths.includes(route.name)){
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
      console.log(menu);
      commit('saveMenu', menu)
      let needRoutes = formatMenuList(authRoutes,auths)
      console.log(needRoutes,menu);
      commit('saveMenu', menu)
      commit('setPermission')
      return needRoutes
    }
  }
})