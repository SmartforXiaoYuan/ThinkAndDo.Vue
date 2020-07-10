import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Home/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    // path: '/',
    // name: 'Home',
    // component: Home
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
  {
    path: '/error',
    name: 'Error',
    component: () => import('../components/Error.vue')
  }
  // {
  //   path: '/goods',
  //   name: 'Goods',
  //   component: () => import('../views/Goods.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // },
  // {
  //   path: '/goods/details',
  //   name: 'Details',
  //   component: () => import('../views/Details.vue')
  // },
  // {
  //   path: '/shoppingCart',
  //   name: 'ShoppingCart',
  //   component: () => import('../views/ShoppingCart.vue'),
  //   meta: {
  //     requireAuth: true // 需要验证登录状态
  //   }
  // },
  // {
  //   path: '/collect',
  //   name: 'Collect',
  //   component: () => import('../views/Collect.vue'),
  //   meta: {
  //     requireAuth: true // 需要验证登录状态
  //   }
  // },
  // {
  //   path: '/order',
  //   name: 'Order',
  //   component: () => import('../views/Order.vue'),
  //   meta: {
  //     requireAuth: true // 需要验证登录状态
  //   }
  // },
  // {
  //   path: '/confirmOrder',
  //   name: 'ConfirmOrder',
  //   component: () => import('../views/ConfirmOrder.vue'),
  //   meta: {
  //     requireAuth: true // 需要验证登录状态
  //   }
  // }
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
