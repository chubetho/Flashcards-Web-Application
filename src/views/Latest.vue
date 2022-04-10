<script setup>
  import TopBar from '../components/TopBar.vue';
  import OtherFlashcards from '../components/OtherFlashcards.vue';
  import MyFlashcards from '../components/MyFlashcards.vue';
</script>

<template>
  <TopBar />

  <div
    class="px-3 pt-20 2xl:px-16 z-50 2xl:h-16 xl:h-14 lg:px-12 md:px-8 md:pt-16 xl:pt-24"
  >
    <div>
      <p class="font-bold text-2xl mb-12">Your flashcards</p>
      <MyFlashcards />
    </div>

    <div class="py-16">
      <p class="font-bold text-2xl my-12">Explore more flashcards</p>
      <OtherFlashcards />
      <button
        class="bg-primary px-6 py-5 mt-16 rounded-md text-white font-bold md:justify-center hover:bg-primary_dark active:bg-primary_dark"
      >
        Load more ...
      </button>
    </div>
  </div>
</template>
