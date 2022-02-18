import Vuex from 'vuex'
import vue from 'vue'
import { login,validate } from '@/api'
vue.use(Vuex)



export default new Vuex.Store({
  state: {
   userName:""
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName
    }
  },
  actions: {
    async validate({commit}) {
      const r = await validate()
      if(r.code === 1) {
        return false
      }
      commit('setUserName',r.userName)
      localStorage.setItem('token',r.token)
      return true
    },


    async login({commit},username) {
      const r = await login({username})
      if(r.code === 1) {
        return Promise.reject(r)
      }else {
        commit('setUserName',r.username)
        localStorage.setItem('token',r.token)
      }
    }
  }
})