import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import login from '@/components/login/login'
import introduce from '@/components/introduce/introduce'
import xiasha from '@/components/xiasha/xiasha'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/introduce',
      name:"introduce",
      component:introduce
    },
    {
      path:'/xiasha',
      name:"xiasha",
      component:xiasha
    }
  ]
})
