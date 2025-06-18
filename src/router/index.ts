import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from '@/modules/admin/router'
import Errors from '@/views/Errors.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoutes,
    {
      path: '/error-403',
      name: 'Error403',
      component: Errors,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
