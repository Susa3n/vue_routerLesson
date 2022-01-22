import Vue from 'vue'
import App from './App.vue'
import Menu from "@/views/components/Menu";
import SubMenu from "@/views/components/SubMenu";
import MenuItem from "@/views/components/MenuItem";


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.component('Menu',Menu)
Vue.component('SubMenu',SubMenu)
Vue.component('MenuItem',MenuItem)


new Vue({
  name: 'main',
  render: h => h(App)
}).$mount('#app')
