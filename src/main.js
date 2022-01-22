import Vue from 'vue'
import App from './App.vue'
import Menu1 from "@/views/components/Menu";
import SubMenu1 from "@/views/components/SubMenu";
import MenuItem1 from "@/views/components/MenuItem";


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.component('Menu1',Menu1)
Vue.component('SubMenu1',SubMenu1)
Vue.component('MenuItem1',MenuItem1)


new Vue({
  name: 'main',
  render: h => h(App)
}).$mount('#app')
