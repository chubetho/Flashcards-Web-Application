<template>
  <div class="fixed h-screen w-full bg-light z-50 p-8">
    <div class="cursor-pointer hover:rounded-full w-5 h-5">
      <img
        class="w-full h-auto object-cover"
        src="../assets/images/x-lg-svgrepo-com.svg"
        alt="close menu"
        @click="$emit('onCloseMenu')"
      />
    </div>
    <div class="submenu mt-12 flex flex-col space-y-8">
      <router-link
        class="font-semibold hover:font-bold hover:text-primary active:text-primary"
        :to="{ name: 'Home' }"
        >Home</router-link
      >
      <div
        class="font-semibold hover:font-bold hover:text-primary active:text-primary cursor-pointer"
        @click="$emit('onOpenSubjectMenu')"
      >
        Subject area
      </div>
      <router-link
        class="font-semibold hover:font-bold hover:text-primary active:text-primary"
        :to="{ name: 'Latest' }"
        >Start</router-link
      >
      <router-link
        class="font-semibold hover:font-bold hover:text-primary active:text-primary"
        :to="{ name: 'CreateFlashcards' }"
        >Create</router-link
      >
    </div>
  </div>
</template>
