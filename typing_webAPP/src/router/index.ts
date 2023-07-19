import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/views/Top.vue'
import Main from "@/views/Main.vue"

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Main
    }
  ]
})

export default router
