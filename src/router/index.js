import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from '@firebase/auth';

const requireAuthGuard = (from, to, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    alert('You have to be member to use this feature');
    next({ name: 'SignUp' });
  } else next();
};

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
    beforeEnter: requireAuthGuard,
  },
  {
    name: 'CreateFlashcards',
    path: '/create-flashcards',
    component: () => import('../views/CreateFlashcards.vue'),
    beforeEnter: requireAuthGuard,
  },
  {
    name: 'Logout',
    path: '/logout',
    component: () => import('../views/Logout.vue'),
    beforeEnter: requireAuthGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
