import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Creat from '@/pages/Creat/template.vue'
import Register from '@/pages/Register/template.vue'
import My from '@/pages/My/template.vue'
import User from '@/pages/User/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/creat',
      component: Creat
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/user',
      component: User
    }
  ]
})
