<script setup>
  import { ref } from 'vue';

  const newUser = ref({});
  const error = ref(null);

  const onSubmit = () => {
    if (!newUser.agreeTerms) {
      error.value = 'Please agree all statements in Terms';
      return;
    }
  };
</script>

<template>
  <div class="md:p-16 p-0">
    <div
      class="bg-white rounded-md min-h-[650px] p-8 md:p-16 flex justify-between"
    >
      <div class="left hidden md:flex flex-col items-center justify-center">
        <div class="w-4/5 h-auto">
          <img src="../assets/images/login.jpg" alt="" />
        </div>
        <router-link :to="{ name: 'SignUp' }" class="underline"
          >Create an account</router-link
        >
      </div>
      <div class="right">
        <h1 class="text-4xl font-bold mb-12">Login</h1>
        <p v-if="error" class="text-red-500 mb-3">{{ error }}</p>
        <form @submit.prevent="onSubmit" class="space-y-7">
          <div class="row">
            <div
              class="input flex border-b-2 border-gray-400 py-2 items-center"
            >
              <label for="email">
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
              <label for="password1">
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
                v-model="newUser.password"
              />
            </div>
          </div>

          <div class="row flex items-center pt-3">
            <input
              type="checkbox"
              class="h-4 w-4 cursor-pointer accent-yellow"
              v-model="newUser.agreeTerms"
            />
            <p class="ml-4">Remember me</p>
          </div>

          <button
            type="submit"
            class="px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary_dark w-full"
          >
            Login
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
