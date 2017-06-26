import Vue from 'vue'
import Router from 'vue-router'
import address from '@/components/address'
import shoppingCart from '@/components/shoppingCart'
import elementUi from '@/components/elementUi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/shoppingCart'
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/elementUi',
      name: 'elementUi',
      component: elementUi
    }
  ]
})
