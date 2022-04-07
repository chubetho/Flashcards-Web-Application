import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfGoTDiSExc1--xabUhjK9u6G7Gyh1yA4',
  authDomain: 'flashcards-edc9e.firebaseapp.com',
  projectId: 'flashcards-edc9e',
  storageBucket: 'flashcards-edc9e.appspot.com',
  messagingSenderId: '519332163652',
  appId: '1:519332163652:web:df4f15a3aca6053dc20c11',
  measurementId: 'G-XMRVXQC7W1',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();

export { projectAuth, projectFireStore };
