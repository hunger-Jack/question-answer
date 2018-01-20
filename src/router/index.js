import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import { dirname } from 'path';
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
      },{
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
      },
      {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
      }]
    }
  ]
})
