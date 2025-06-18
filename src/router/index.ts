import { createRouter, createWebHistory } from 'vue-router'
import Errors from '@/views/Errors.vue'
import NotFound from '@/views/NotFound.vue'
import adminRoutes from '../modules/admin/router'

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
