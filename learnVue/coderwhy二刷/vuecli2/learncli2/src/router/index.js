import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

//安装插件
Vue.use(Router)

//创建路由实例
const routes = [
  //默认路径
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/user/:userId',
    component: User
  }
]
const router = new Router({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//将router实例导入Vue实例中
export default router
