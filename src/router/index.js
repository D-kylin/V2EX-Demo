import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Header from '../components/header'
// import Main from '../components/main'
import UserInfo from '../components/rightbar/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserInfo',
      component: UserInfo

    }
  ]
})
