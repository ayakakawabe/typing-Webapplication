import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/views/Top.vue'
import Main from "@/views/Main.vue"
import Result from "@/views/Result.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },{
      path:"/main/result",
      name:"result",
      component:Result
    }
  ]
})

export default router
