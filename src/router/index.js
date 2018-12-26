import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import Treatments from '@/pages/treatments/treatments'
import About from '@/pages/about/about'
import Invisalign from '@/pages/invisalign/invisalign'
import GetStarted from '@/pages/get-started/get-started'
import Contact from '@/pages/contact/contact'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import Styleguide from '@/pages/styleguide/styleguide'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: true,
      component: Home
    },
    {
      path: '/get-started',
      name: 'get started!',
      navigation: true,
      component: GetStarted
    },
    {
      path: '/about',
      name: 'about',
      navigation: true,
      component: About
    },
    {
      path: '/treatments',
      name: 'treatments',
      navigation: true,
      component: Treatments
    },
    {
      path: '/invisalign',
      name: 'invisalign',
      navigation: true,
      component: Invisalign
    },
    {
      path: '/contact',
      name: 'contact',
      navigation: true,
      component: Contact
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

export default router
