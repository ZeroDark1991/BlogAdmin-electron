import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
Vue.use(VueRouter)

import agent from 'config/agent'
Vue.prototype.$agent = agent

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})
