import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/index.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from '@/api/api'
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$api = api
Vue.use(Element)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.name === 'user') {
    if (localStorage.getItem('userId')) {
      next()
    } else {
      alert('你还没登请先登录')
      router.push('/')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
