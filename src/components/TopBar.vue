<script setup>
  import { ref } from 'vue';

  const menuOpen = ref(false);
  const searchOpen = ref(false);

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  const toggleSearch = () => {
    searchOpen.value = !searchOpen.value;
  };
</script>

<template>
  <div
    class="topbar fixed h-12 flex justify-between bg-white items-center w-full px-3 shadow-md md:px-8 lg:px-12 z-50"
  >
    <!-- Left side of topbar -->
    <div class="left">
      <div class="menu flex">
        <img
          class="h-8 md:hidden cursor-pointer"
          src="../assets/images/menu.svg"
          alt="open menu"
          @click="toggleMenu"
        />
        <div class="branch_logo font-bold text-xl mr-8 hidden md:block">
          <router-link :to="{ name: 'Home' }">
            Flash
            <span class="text-primary">Cards</span>
          </router-link>
        </div>
        <div class="submenu hidden md:flex md:items-center">
          <div class="flex space-x-8 text-sm font-semibold">
            <router-link
              :to="{ name: 'Home' }"
              class="hover:font-bold hover:text-primary_dark"
              >Home</router-link
            >
            <router-link
              :to="{ name: 'Home' }"
              class="hover:font-bold hover:text-primary_dark"
              >Subject areas</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right side of topbar -->
    <div class="right flex items-center justify-end space-x-4">
      <div
        class="search border border-black rounded-full w-7 h-7 flex justify-center xl:justify-end items-center xl:w-80"
        :class="{ 'w-80': searchOpen, 'justify-end': searchOpen }"
      >
        <input
          type="text"
          placeholder="Search for flashcards"
          class="xl:focus:outline-none xl:w-5/6 xl:text-sm xl:block hidden"
        />
        <img
          class="h-5 w-5 xl:mr-3 cursor-pointer"
          src="../assets/images/search.svg"
          alt="search"
          @click="toggleSearch"
        />
      </div>
      <div class="buttons space-x-4" v-if="!searchOpen">
        <router-link
          :to="{ name: 'Login' }"
          class="bg-white px-3.5 py-1.5 rounded-sm text-sm font-bold hover:bg-light hover:text-primary_dark"
          >Login</router-link
        >
        <router-link
          :to="{ name: 'SignUp' }"
          class="bg-primary px-3.5 py-1.5 rounded-sm text-sm font-bold shadow-md text-white hover:bg-primary_dark active:bg-primary_dark"
          >Sign up</router-link
        >
      </div>
    </div>
  </div>

  <!-- Hamburger Menu -->
  <div class="fixed h-screen w-full bg-white z-50 p-8" v-if="menuOpen">
    <div class="cursor-pointer hover:rounded-full w-5 h-5">
      <img
        class="w-full h-auto object-cover"
        src="../assets/images/x-lg-svgrepo-com.svg"
        alt="close menu"
        @click="toggleMenu"
      />
    </div>
    <div class="submenu mt-12 flex flex-col space-y-8">
      <router-link
        class="font-semibold hover:font-bold hover:text-primary active:text-primary"
        :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link
        class="font-semibold hover:font-bold hover:text-primary active:text-primary"
        :to="{ name: 'Home' }"
        >Subject area</router-link
      >
      <router-link
        class="font-semibold hover:font-bold hover:text-primary active:text-primary"
        :to="{ name: 'Home' }"
        >Entertainment</router-link
      >
    </div>
  </div>
</template>
