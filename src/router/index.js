import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const authRoutes = [ // 权限路由
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart'),
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        component: () => import('@/views/CartList'),
        children: [
          {
            path: 'lottery',
            name: 'lottery',
            component: () => import('@/views/Lottery'),
          },
          {
            path: 'product',
            name: 'product',
            component: () => import('@/views/Product'),
          },
        ],
      },
    ],
  },
];


export default new Router({ // 默认导出 首页和404页面
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`@/views/Home.vue`)
    },
    {
      path:'*',
      component:{
        render:h=>h('h1',{},'Not Found')
      }
    }
  ]
})