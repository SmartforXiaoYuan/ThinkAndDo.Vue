import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Home/Index.vue'

Vue.use(VueRouter)

const routes=   [
  {
    path: '/', // 首页
    name: 'Index',
    component: Index
    // component: () => import('../views/Home/Index.vue')
  },
  {
    path: '/goodsList', // 商品列表
    name: 'GoodsList',
    component: () => import('../views/Goods/GoodsList.vue')
  },
]

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/About.vue')
//   }
// ]

const router = new VueRouter({
  routes
})

export default router
