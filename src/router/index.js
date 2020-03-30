import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
 {
  //  登录页
   path:"/login",
   // 除了首页之外的页面都可以用懒加载，@符号代表的src这个目a录
  //  component: () => import("@/views/Login"),
   component: () => import("@/views/Login")
 },
 {
  //  注册页
  path: "/register",
  component: () => import("@/views/Register")
 },
 {
  //  个人信息页
  path: "/personal",
  component: () => import("@/views/Personal")
 },
 {
  //  编辑页
  path: "/edit-profile",
  component: () => import("@/views/EditProfile")
 },
 {
  //  我的关注页
  path: "/follow",
  component: () => import("@/views/Follow")
 },
 {
  //  我的跟贴页
  path: "/comment",
  component: () => import("@/views/Comment")
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
