import { projectAuth } from '../firebase';
import { ref } from 'vue';

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, name) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) throw new Error('Can not create this account. Please try again!');

    await res.user.updateProfile({ displayName: name });

    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export function userRegister() {
  return { error, isPending, signup };
}
