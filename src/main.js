import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router/index';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

let app;

const firebaseConfig = {
  apiKey: 'AIzaSyAfGoTDiSExc1--xabUhjK9u6G7Gyh1yA4',
  authDomain: 'flashcards-edc9e.firebaseapp.com',
  projectId: 'flashcards-edc9e',
  storageBucket: 'flashcards-edc9e.appspot.com',
  messagingSenderId: '519332163652',
  appId: '1:519332163652:web:df4f15a3aca6053dc20c11',
  measurementId: 'G-XMRVXQC7W1',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount('#app');
  }
});
const db = getFirestore(firebaseApp);

export { db };
