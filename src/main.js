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
import axios from "axios"
Vue.prototype.$http= axios;
/* eslint-disable no-new */

/*router.beforeEach((to,from,next)=>{

})*/
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
