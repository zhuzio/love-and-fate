import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('pages/chat_module/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
  ]
})
