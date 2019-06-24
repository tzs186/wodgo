import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/register')
    },
    {
      path: '/GetPass',
      name: 'GetPass',
      component: () => import('@/views/login/GetPass')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('@/views/classify/classify')
    },
    {
      path: '/classes',
      name: 'classes',
      component: () => import('@/views/classify/classes')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/views/classify/goods')
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
        keepAlive:true
      },
      component: () => import('@/views/cart/cart')
    },
    {
      path: '/user',
      name: 'user',
      meta:{
        keepAlive:true
      },
      component: () => import('@/views/user/user')
    },
  ]
})
