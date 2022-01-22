import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false



Vue.use(ViewUI);
Vue.prototype.$bus = new Vue()
new Vue({
  name: 'main',
  render: h => h(App)
}).$mount('#app')
