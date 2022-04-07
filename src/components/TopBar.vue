<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const mobileMenuOpen = ref(false);
  const searchOpen = ref(false);
  const avatarMenuOpen = ref(false);

  const toggleMobildMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };

  const toggleSearch = () => {
    searchOpen.value = !searchOpen.value;
  };

  const toggleAvatarMenu = () => {
    avatarMenuOpen.value = !avatarMenuOpen.value;
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
          @click="toggleMobildMenu"
        />
        <div class="branch_logo font-bold text-xl mr-8 hidden md:block">
          <router-link :to="{ name: 'Home' }">
            Flash<span class="text-primary">Cards</span>
          </router-link>
        </div>
        <div class="submenu hidden md:flex md:items-center">
          <div class="flex space-x-8 text-sm font-semibold">
            <router-link
              :to="{ name: 'Latest' }"
              class="hover:font-bold hover:text-primary_dark"
            >
              Start
            </router-link>
            <router-link
              :to="{ name: 'Home' }"
              class="hover:font-bold hover:text-primary_dark"
            >
              Subject areas
            </router-link>
            <router-link
              :to="{ name: 'CreateFlashcards' }"
              class="hover:font-bold hover:text-primary_dark"
            >
              Create
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Right side of topbar -->
    <div class="right flex items-center justify-end space-x-4">
      <div
        class="search border border-black rounded-full w-7 h-7 flex justify-center xl:justify-end items-center xl:rounded-lg xl:w-80"
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
      <div class="buttons" v-if="!searchOpen">
        <div class="space-x-4" v-if="route.meta.type === 'auth'">
          <router-link
            :to="{ name: 'Login' }"
            class="bg-white px-3.5 py-1.5 rounded-sm text-sm font-bold hover:bg-light hover:text-primary_dark"
          >
            Login
          </router-link>
          <router-link
            :to="{ name: 'SignUp' }"
            class="bg-yellow px-3.5 py-1.5 rounded-sm text-sm font-bold shadow-md text-black hover:bg-primary_dark active:bg-primary_dark"
          >
            Sign up
          </router-link>
        </div>

        <div class="space-x-4 flex relative" v-else>
          <div
            class="notification border border-black rounded-full w-7 h-7 flex justify-center items-center"
          >
            <img
              class="h-4 w-4 cursor-pointer"
              src="../assets/images/bell.svg"
              alt="notifications"
            />
          </div>
          <button class="rounded-full w-7 h-7 overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="../assets/images/avatar.jpg"
              alt="avatar"
              @click="toggleAvatarMenu"
            />
          </button>
          <div
            class="flex flex-col bg-white py-3 border-2 w-64 rounded-lg absolute top-8 -left-48"
            v-if="avatarMenuOpen"
          >
            <div class="profile-info mx-4 mb-4 flex items-center space-x-4">
              <div class="rounded-full w-7 h-7 overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  src="../assets/images/avatar.jpg"
                  alt="avatar"
                />
              </div>
              <div class="text-sm">
                <p>Phat Nguyen</p>
                <p>admin@gmail.com</p>
              </div>
            </div>
            <hr />
            <div class="submenu flex flex-col mt-4">
              <router-link
                :to="{ name: 'Latest' }"
                class="hover:text-white hover:bg-primary px-4 py-3"
              >
                Profile
              </router-link>
              <div
                class="hover:text-white hover:bg-primary px-4 py-3 flex justify-between"
              >
                Night mode
                <div class="relative w-10">
                  <input
                    type="checkbox"
                    id="toggle"
                    class="absolute block w-5 h-5 rounded-full bg-white border-2 appearance-none cursor-pointer checked:right-0 checked:bg-primary"
                  />
                  <label
                    for="toggle"
                    class="block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer checked:bg-primary"
                  ></label>
                </div>
              </div>
              <router-link
                :to="{ name: 'Latest' }"
                class="hover:text-white hover:bg-primary px-4 py-3"
              >
                Setting
              </router-link>
              <router-link
                :to="{ name: 'Latest' }"
                class="hover:text-white hover:bg-primary px-4 py-3 mb-2"
              >
                Feedback
              </router-link>
              <hr />
              <router-link
                :to="{ name: 'Latest' }"
                class="text-red-500 px-4 py-3 hover:bg-light mt-2"
              >
                Logout
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Hamburger Menu -->
  <div class="fixed h-screen w-full bg-white z-50 p-8" v-if="mobileMenuOpen">
    <div class="cursor-pointer hover:rounded-full w-5 h-5">
      <img
        class="w-full h-auto object-cover"
        src="../assets/images/x-lg-svgrepo-com.svg"
        alt="close menu"
        @click="toggleMobildMenu"
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
