import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
      component: AboutMe
    }
  ]
})
