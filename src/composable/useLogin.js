import { projectAuth } from '../firebase';
import { ref } from 'vue';

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    if (!res) throw new Error('Can sign in to this account. Please try again');
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useLogin() {
  return { error, isPending, signin };
}
