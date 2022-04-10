<script setup>
  import MobileMenu from './MobileMenu.vue';
  import SubjectMenu from './SubjectMenu.vue';
  import SubjectSubMenu from './SubjectSubmenu.vue';
  import { SUBJECTS } from '../constants/constants';

  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useUser } from '../composable/useUser';

  const route = useRoute();
  const mobileMenuIsOpen = ref(false);
  const subjectMenuIsOpen = ref(false);
  const searchOpen = ref(false);
  const avatarMenuOpen = ref(false);
  const nightMode = ref(false);
  const { getUser } = useUser();
  const user = getUser();

  const toggleMobileMenu = () => {
    mobileMenuIsOpen.value = !mobileMenuIsOpen.value;
  };

  const toggleSubjectMenu = () => {
    subjectMenuIsOpen.value = !subjectMenuIsOpen.value;
  };

  const toggleSearch = () => {};

  const toggleAvatarMenu = () => {
    avatarMenuOpen.value = !avatarMenuOpen.value;
  };
</script>

<template>
  <div
    class="topbar fixed h-12 flex justify-between bg-white items-center w-full px-3 shadow-md 2xl:px-16 z-50 lg:px-12 md:px-8"
  >
    <!-- Left side of topbar -->
    <div class="left">
      <div class="menu flex">
        <img
          class="h-14 w-14 md:hidden cursor-pointer"
          src="../assets/images/menu.svg"
          alt="open menu"
          @click="toggleMobileMenu"
        />
        <div
          class="branch_logo font-bold text-xl mr-8 md:mr-4 xl:mr-12 hidden md:block xl:text-2xl"
        >
          <router-link :to="{ name: 'Home' }">
            Flash<span class="text-primary">Cards</span>
          </router-link>
        </div>
        <div class="submenu hidden md:flex md:items-center">
          <div
            class="flex space-x-4 text-sm font-semibold lg:text-base lg:space-x-8 2xl:text-base 2xl:space-x-12"
          >
            <router-link
              :to="{ name: 'Latest' }"
              class="hover:font-bold hover:text-primary_dark"
            >
              Start
            </router-link>
            <div
              class="hover:font-bold hover:text-primary_dark cursor-pointer"
              @click="toggleSubjectMenu"
            >
              Subject areas
            </div>
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
        class="search border border-black rounded-full w-7 h-7 flex justify-center xl:justify-end items-center xl:rounded-lg 2xl:w-80 xl:w-52 2xl:h-8 xl:h-8"
        :class="{ 'w-80': searchOpen, 'justify-end': searchOpen }"
      >
        <input
          type="text"
          placeholder="Search for flashcards"
          class="font-semibold xl:focus:outline-none xl:w-5/6 2xl:text-base xl:block xl:text-sm hidden"
        />
        <img
          class="h-5 w-5 2xl:h-6 2xl:w-6 2xl:mr-3 xl:mr-2 cursor-pointer"
          src="../assets/images/search.svg"
          alt="search"
          @click="toggleSearch"
        />
      </div>
      <div class="buttons" v-if="!searchOpen">
        <div class="space-x-4 lg:space-x-4" v-if="route.meta.type === 'auth'">
          <router-link
            :to="{ name: 'Login' }"
            class="bg-white px-3.5 py-1.5 md:px-3 md:py-1 rounded-sm text-sm font-bold hover:bg-light hover:text-primary_dark"
          >
            Login
          </router-link>
          <router-link
            :to="{ name: 'SignUp' }"
            class="bg-yellow px-3.5 py-1.5 md:px-3 md:py-1 rounded-sm text-sm font-bold shadow-md text-black hover:bg-primary_dark active:bg-primary_dark"
          >
            Sign up
          </router-link>
        </div>

        <div class="space-x-4 flex relative" v-else>
          <div
            class="notification border border-black rounded-full w-7 h-7 flex justify-center items-center 2xl:w-8 2xl:h-8"
          >
            <img
              class="h-4 w-4 cursor-pointer"
              src="../assets/images/bell.svg"
              alt="notifications"
            />
          </div>
          <button class="rounded-full w-7 h-7 overflow-hidden 2xl:w-8 2xl:h-8">
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
                <p>{{ user.displayName }}</p>
                <p>{{ user.email }}</p>
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
                    v-model="nightMode"
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
                :to="{ name: 'Logout' }"
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

  <!-- Left Menu -->
  <MobileMenu
    v-if="mobileMenuIsOpen"
    @onCloseMenu="toggleMobileMenu"
    @onOpenSubjectMenu="toggleSubjectMenu"
  />
  <SubjectMenu v-if="subjectMenuIsOpen" @onCloseSubjectMenu="toggleSubjectMenu">
    <SubjectSubMenu title="Arts and Humanities" img="art"></SubjectSubMenu>
    <SubjectSubMenu title="Math" img="math"></SubjectSubMenu>
    <SubjectSubMenu title="Science" img="science"> </SubjectSubMenu>
    <SubjectSubMenu title="Languages" img="language"> </SubjectSubMenu>
    <SubjectSubMenu title="Other" img="other"></SubjectSubMenu>
  </SubjectMenu>
</template>
