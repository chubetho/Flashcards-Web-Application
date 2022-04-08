import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

const auth = getAuth();
const user = ref(auth.currentUser);

onAuthStateChanged(auth, (usr) => {
  if (usr) {
    user.value = usr;
  }
});

const getUser = () => {
  return user;
};

export function useUser() {
  return { getUser };
}
