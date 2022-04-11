<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

  const user = ref({});
  const error = ref('');
  const isPending = ref(false);
  const router = useRouter();

  const onSubmit = () => {
    error.value = '';
    isPending.value = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.value.email, user.value.password)
      .then((userCredential) => {
        isPending.value = false;
        router.push({ name: 'Latest' });
      })
      .catch((err) => {
        isPending.value = false;
        switch (err.code) {
          case 'auth/invalid-email':
            error.value = 'Invalid email';
            break;
          case 'auth/user-not-found':
            error.value = 'No account with that email was found';
            break;
          case 'auth/wrong-password':
            error.value = 'Incorrect password';
            break;
          default:
            error.value = 'Email or password was incorrect';
            break;
        }
      });
  };
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div
      class="bg-white rounded-md min-h-[650px] p-8 md:p-16 flex justify-between"
    >
      <div class="left hidden md:flex flex-col items-center justify-center">
        <div class="w-4/5 lg:w-full h-auto">
          <img src="../assets/images/login.jpg" alt="" />
        </div>
        <router-link :to="{ name: 'SignUp' }" class="underline"
          >Create an account</router-link
        >
      </div>
      <div class="right">
        <div class="flex justify-between items-baseline">
          <h1 class="text-4xl font-bold mb-12">Login</h1>
          <router-link :to="{ name: 'Home' }" class="cursor-pointer">
            <img
              src="../assets/images/x-lg-svgrepo-com.svg"
              alt="close"
              class="w-4 h-4"
            />
          </router-link>
        </div>
        <p v-if="error" class="text-red-500 mb-3">{{ error }}</p>
        <form @submit.prevent="onSubmit" class="space-y-7">
          <div class="row">
            <div
              class="input flex border-b-2 border-gray-400 py-2 items-center"
            >
              <label for="email" class="mr-3 flex-shrink-0">
                <img
                  class="w-3 h-auto"
                  src="../assets/images/email.svg"
                  alt=""
                />
              </label>
              <input
                class="focus:outline-none text-sm px-6"
                type="email"
                placeholder="Your Email"
                id="email"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="row">
            <div
              class="input flex border-b-2 border-gray-400 py-2 items-center"
            >
              <label for="password1" class="mr-3 flex-shrink-0">
                <img
                  class="w-3 h-auto"
                  src="../assets/images/lock-regular.svg"
                  alt=""
                />
              </label>
              <input
                class="focus:outline-none text-sm px-6"
                type="password"
                placeholder="Password"
                id="password1"
                autocomplete="on"
                v-model="user.password"
              />
            </div>
          </div>

          <div class="row flex items-center pt-3">
            <input
              type="checkbox"
              class="h-4 w-4 cursor-pointer accent-yellow"
            />
            <p class="ml-4">Remember me</p>
          </div>

          <button
            type="submit"
            class="px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary_dark w-full flex justify-center items-center"
            :class="{
              'cursor-not-allowed': isPending,
            }"
          >
            <div class="w-5 h-auto animate-spin" v-if="isPending">
              <img src="../assets/images/reload_arrow.svg" alt="" />
            </div>
            <span v-else>Login</span>
          </button>
        </form>
        <div class="mt-8 text-center md:hidden">
          <router-link :to="{ name: 'SignUp' }" class="underline"
            >Create an account</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
