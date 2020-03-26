import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
 {
   path:"/login",
   // 除了首页之外的页面都可以用懒加载，@符号代表的src这个目a录
  //  component: () => import("@/views/Login"),
   component: () => import("@/views/Login")
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
