import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main/Main.vue';
import Login from '@/views/login/Login.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'main',
    redirect: '/login',
    component: Main,
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/main/main-views/home/Home.vue')
      },
      // 侧边栏部分
      {
        path: '/user-manage',
        name: 'user-manage',
        component: () => import('@/views/main/main-views/user-manage/UserManage.vue')
      },
      {
        path: '/goods-manage',
        name: 'goods-manage',
        component: () => import('@/views/main/main-views/goods-manage/GoodsManage.vue')
      },
      {
        path: '/order-manage',
        name: 'order-manage',
        component: () => import('@/views/main/main-views/order-manage/OrderManage.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
