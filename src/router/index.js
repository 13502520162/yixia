import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import popular from '@/components/home/popular'
import extremespeed from '@/components/home/extremespeed'
import highvolume from '@/components/home/highvolume'
import credit from '@/components/credit/credit'
import my from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/popular',
      name: 'popular',
      component: popular
    },
    {
      path: '/home/extremespeed',
      name: 'extremeSpeed',
      component: extremespeed
    },
    {
      path: '/home/highvolume',
      name: 'highVolume',
      component: highvolume
    },
    {
      path: '/credit',
      name: 'credit',
      component: credit
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
