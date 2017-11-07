import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myTest from '@/components/myTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          name:'myTest',
          path: '/index/myTest/:routerParam',
          component: myTest
        },
        {
          name:'myTest2',
          path: '/index/myTest/:routerParam',
          component: myTest
        }
      ]
    },
  ]
})
