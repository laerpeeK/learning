import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

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
    meta: {
      title: '首页'
    },
    children: [
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
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
    // beforeEnter: (to,from,next) => {
    //   console.log('profile')
    //   next()
    // }
  }
]
const router = new Router({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//全局导航守卫

//前置 guard
router.beforeEach((to, from, next) => {
  //from 跳转至 to
  document.title = to.matched[0].meta.title
  next()
})

//后置 hook
// router.afterEach((to,from)=>{
//   console.log('afterEach')
// })
//将router实例导入Vue实例中
export default router
