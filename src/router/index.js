/*
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-26 09:46:38
 * @LastEditors: 王磊
 * @LastEditTime: 2019-11-27 20:09:59
 */
import Vue from 'vue'
import Router from 'vue-router'
import WseachPage from '@/pages/WseachPage'
import WshoppingCar from '@/pages/WshoppingCar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WseachPage',
      component: WseachPage
    },
    {
      path: '/WseachPage',
      name: 'WseachPage',
      component: WseachPage
    },
    {
      path: '/WshoppingCar',
      name: 'WshoppingCar',
      component: WshoppingCar
    }
  ]
})
