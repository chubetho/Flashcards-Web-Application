<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
  } from 'firebase/auth';

  const newUser = ref({});
  const error = ref('');
  const isPending = ref(false);
  const router = useRouter();

  const onSubmit = () => {
    error.value = '';
    isPending.value = true;

    if (newUser.value.password !== newUser.value.password2) {
      error.value = 'Passwords must match!. Try again!';
      isPending.value = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      newUser.value.email,
      newUser.value.password
    )
      .then(() => {
        updateProfile(auth.currentUser, { displayName: newUser.value.name });
        isPending.value = false;
        router.push({ name: 'Latest' });
      })
      .catch((err) => {
        isPending.value = false;
        error.value = err.message;
      });
  };
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div
      class="bg-white rounded-md min-h-[650px] max-w-5xl p-8 md:p-16 flex justify-between"
    >
      <div class="left">
        <div class="flex justify-between items-baseline">
          <h1 class="text-4xl font-bold mb-12">Sign Up</h1>
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
              <label for="name" class="mr-3">
                <img
                  class="w-3 h-auto"
                  src="../assets/images/user.svg"
                  alt=""
                />
              </label>
              <input
                class="focus:outline-none text-sm px-6"
                type="text"
                placeholder="Your Name"
                id="name"
                v-model="newUser.name"
              />
            </div>
          </div>
          <div class="row">
            <div
              class="input flex border-b-2 border-gray-400 py-2 items-center"
            >
              <label for="email" class="mr-3">
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
                v-model="newUser.email"
              />
            </div>
          </div>
          <div class="row">
            <div
              class="input flex border-b-2 border-gray-400 py-2 items-center"
            >
              <label for="password1" class="mr-3">
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
                v-model="newUser.password"
              />
            </div>
          </div>
          <div class="row">
            <div
              class="input flex border-b-2 border-gray-400 py-2 items-center"
            >
              <label for="password2" class="mr-3">
                <img
                  class="w-3 h-auto"
                  src="../assets/images/lock-light.svg"
                  alt=""
                />
              </label>
              <input
                class="focus:outline-none text-sm px-6"
                type="password"
                placeholder="Repeat your password"
                id="password2"
                autocomplete="on"
                v-model="newUser.password2"
              />
            </div>
          </div>

          <div class="row flex items-center pt-3">
            <input
              type="checkbox"
              class="h-4 w-4 cursor-pointer accent-yellow"
              v-model="newUser.agreeTerms"
            />
            <p class="ml-4">
              I agree all statements in
              <span class="underline cursor-pointer">Terms of service</span>
            </p>
          </div>

          <button
            type="submit"
            class="px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary_dark w-full flex justify-center items-center"
            :class="{
              'cursor-not-allowed': isPending,
              'bg-primary_dark': isPending,
            }"
          >
            <div class="w-5 h-auto animate-spin" v-if="isPending">
              <img src="../assets/images/reload_arrow.svg" alt="" />
            </div>
            <span v-else>Register</span>
          </button>
        </form>

        <div class="mt-8 text-center md:hidden">
          <router-link :to="{ name: 'Login' }" class="underline"
            >I am already a member</router-link
          >
        </div>
      </div>

      <div class="right hidden md:flex flex-col items-center justify-center">
        <div class="w-4/5 lg:w-full h-auto">
          <img src="../assets/images/sign_up.jpg" alt="" />
        </div>
        <router-link :to="{ name: 'Login' }" class="underline"
          >I am already a member</router-link
        >
      </div>
    </div>
  </div>
</template>
