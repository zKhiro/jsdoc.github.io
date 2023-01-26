import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';
import Articles from '@views/Articles.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:index',
      component: Articles,
      meta: {
        hasNavbar: true,
      }
    }
  ]
})

export default router
