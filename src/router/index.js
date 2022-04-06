import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    name: 'SignUp',
    path: '/sign-up',
    component: () => import('../views/Sign_up.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
