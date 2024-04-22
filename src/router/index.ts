
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
// 引入进度条插件
import NProgress from 'nprogress'
// 修改进度条插件的配置
NProgress.configure({
  showSpinner: false
})

import autoRoutes from '~pages'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '@/pages/Home.vue'
import Blog from '@/pages/Blog.vue'
import Render from '@/pages/Render.vue'
import ReadMe from '@/pages/readme.md'


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    component: Blog, 
    children: autoRoutes.concat([{
      path: '/readme', component: ReadMe
    },
    {
      name: 'render',
      path: '/r/:path', component: Render
    }
  ])
  }
]
console.log("autoRoutes", autoRoutes)
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

// 前置首位 访问权限控制
router.beforeEach((to, from, next) => {
  // 开启页面进度条
  NProgress.start()
  // const wihteList = ['/login']
  next()
  // 没有token 并且 不再白名单 则跳转登录页

})
// 后置守卫
router.afterEach((to, form) => {
  // 设置页面标题
  NProgress.done()
})

export default router