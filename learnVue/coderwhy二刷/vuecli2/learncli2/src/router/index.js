import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


//安装插件
Vue.use(Router)

//配置
const router = new Router({
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    },
  ],
  mode: 'history'
})

export default router
