import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'

import Backentry from '@/backviews/backentry'
import Interest from '@/backviews/backend/interest'
import Collection from '@/backviews/backend/collection'
import Recommend from '@/backviews/backend/recommend'

import Login from '@/components/login'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/backentry',
      name: 'Backentry',
      component: Backentry,
      children: [
        {
          path: '/interest',
          name: 'interest',
          component: Interest,
          meta: {
            login: true
          }
        },
        {
          path: '/collection',
          name: 'Collection',
          component: Collection,
          meta: {
            login: true
          }
        },
        {
          path: '/recommend',
          name: 'Recommend',
          component: Recommend,
          meta: {
            login: false
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  let bl = to.matched.some(function (item) {
    return item.meta.login
  })
  if (bl) {
    let info = router.app.$local.fetch('dyh')
    if (info.login) {
      next()
    } else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next()
  }
})
