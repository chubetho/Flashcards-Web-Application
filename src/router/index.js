import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const getCurrentUser = () => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
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
    meta: {
      requireAuth: true,
    },
  },
  {
    name: 'CreateFlashcards',
    path: '/create-flashcards',
    component: () => import('../views/CreateFlashcards.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    name: 'Logout',
    path: '/logout',
    component: () => import('../views/Logout.vue'),
    meta: {
      requireAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (await getCurrentUser()) next();
    else {
      alert('You have to login to access this feature');
      next({ name: 'Login' });
    }
  } else next();
});

export default router;
