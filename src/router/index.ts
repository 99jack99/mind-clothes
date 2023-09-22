// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { path: "/home" },
    component: () => import('@/layouts/main.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
/*       {
        path: 'favorites',
        name: 'Home',
        component: () => import('@/views/Fav.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/Cart.vue'),
      }, */
    ],
  },
/*   {
    path: '/favorites',
    name: 'Home',
    component: () => import('@/views/Fav.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
  } */



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
