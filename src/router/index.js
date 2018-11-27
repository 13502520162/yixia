import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import credit from '@/components/credit/credit'
import my from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
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
