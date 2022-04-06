import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    path: '/',
    meta: {
      type: 'auth',
    },
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
  {
    name: 'Latest',
    path: '/latest',
    component: () => import('../views/Latest.vue'),
  },
  {
    name: 'CreateFlashcards',
    path: '/create-flashcards',
    component: () => import('../views/CreateFlashcards.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
