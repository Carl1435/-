import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import '../src/assets/icon/iconfont.css' 

import vueRouter from 'vue-router' // 引入vue路由
import routes from './router/routes.js' // 引入自己的路由js
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(vueRouter)

const router = new vueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#myapp',
  router,
  render: h => h(App)
})
