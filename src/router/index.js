import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '@/vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    children: [
      {
        path: 'a',
        component: () => import('@/views/components/A.vue')
      },
      {
        path: 'b',
        component: () => import('@/views/components/B.vue'),
        children: [
          {
            path: '/c',
            component: () => import('@/views/components/C.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
