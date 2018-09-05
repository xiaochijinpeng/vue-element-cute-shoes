import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new Router({
  routes
})

export default router
