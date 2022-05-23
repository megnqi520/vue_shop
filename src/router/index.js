import Vue from 'vue'
import VueRouter from 'vue-router'

import myLogin from '../components/myLogin.vue'
import myHome from '../components/myHome.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: myLogin },
  { path: '/home', component: myHome }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
