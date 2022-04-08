import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

const auth = getAuth();
const user = ref(auth.currentUser);

auth.onAuthStateChanged(auth, (usr) => {
  if (usr) user.value = user;
});

const getUser = () => {
  return user;
};

export function useUser() {
  return { getUser };
}
