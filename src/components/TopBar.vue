<template>
  <div
    class="topbar fixed h-12 flex justify-between bg-white items-center w-full px-3 shadow-md"
  >
    <!-- Left side of topbar -->
    <div class="left">
      <div class="menu">
        <img class="h-8" src="../assets/images/menu.svg" alt="open menu" />
      </div>
    </div>

    <!-- Right side of topbar -->
    <div class="right flex items-center space-x-4">
      <div
        class="search border border-black rounded-full w-7 h-7 flex justify-center items-center cursor-pointer"
      >
        <img class="h-5 w-5" src="../assets/images/search.svg" alt="search" />
      </div>
      <button
        class="login_button btn bg-white px-3.5 py-1.5 rounded-sm text-sm font-bold"
      >
        Login
      </button>
      <button
        class="signup_button btn bg-primary px-3.5 py-1.5 rounded-sm text-sm font-bold shadow-md text-white"
      >
        Sign up
      </button>
    </div>
  </div>
</template>
