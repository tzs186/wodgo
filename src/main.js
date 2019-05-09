// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'lib-flexible'
import 'font-awesome/css/font-awesome.css'
import "@/styles/common.less";
Vue.config.productionTip = false;

import request from '@/config/httpConfig'
Vue.prototype.$axios = request;
/* eslint-disable no-new */


import vdialog from './components/dialog'

Vue.use(vdialog);

 router.beforeEach((to,from,next)=>{
   if (to.matched.some(record => record.meta.keepAlive)){  // 判断该路由是否需要登录权限
     if (window.sessionStorage.getItem('token')) {  // 判断当前的token是否存在
       next();
     }
     else {
       next({
         path: '/login',
         query: {redirect:to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
       })
     }
   }
   else {
     next();
   }
})
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
