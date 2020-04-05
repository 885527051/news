import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    // redirect:"/index",
    component:()=>import("@/views/Index")
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
  component: () => import("@/views/Register"),
  // 路由可以通过meta自定义数据，可以选择在路由随意加上自己的数据，
  // 它的值可以是任意的类型,
  meta: {
    // 代表这个页面需要授权
    authorization: true
  }
 },
 {
  //  个人信息页
  path: "/personal",
  component: () => import("@/views/Personal"),
  // 路由可以通过meta自定义数据，可以选择在路由随意加上自己的数据，
  // 它的值可以是任意的类型,
  meta: {
    // 代表这个页面需要授权
    authorization: true
  }
 },
 {
  //  编辑页
  path: "/edit-profile",
  component: () => import("@/views/EditProfile"),
  // 路由可以通过meta自定义数据，可以选择在路由随意加上自己的数据，
  // 它的值可以是任意的类型,
  meta: {
    // 代表这个页面需要授权
    authorization: true
  }
 },
 {
  //  我的关注页
  path: "/follow",
  component: () => import("@/views/Follow"),
  // 路由可以通过meta自定义数据，可以选择在路由随意加上自己的数据，
  // 它的值可以是任意的类型,
  meta: {
    // 代表这个页面需要授权
    authorization: true
  }
 },
 {
  //  我的跟贴页
  path: "/comment",
  component: () => import("@/views/Comment"),
  // 路由可以通过meta自定义数据，可以选择在路由随意加上自己的数据，
  // 它的值可以是任意的类型,
  meta: {
    // 代表这个页面需要授权
    authorization: true
  }
 },
 {
  //  我的收藏页
  path: "/star",
  component: () => import("@/views/Star"),
  // 路由可以通过meta自定义数据，可以选择在路由随意加上自己的数据，
  // 它的值可以是任意的类型,
  meta: {
    // 代表这个页面需要授权
    authorization: true
  }
 },
 {
  //  我的栏目管理页
  path: "/category",
  component: () => import("@/views/Category"),
 },
 {
  //  我的搜索页
  path: "/search",
  component: () => import("@/views/Search"),
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
