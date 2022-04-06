<script setup>
  import TopBar from '../components/TopBar.vue';
  import OtherFlashcards from '../components/OtherFlashcards.vue';
  import MyFlashcards from '../components/MyFlashcards.vue';
</script>

<template>
  <TopBar />

  <div class="p-16">
    <div>
      <p class="font-bold text-2xl mb-12">Your flashcards</p>
      <MyFlashcards />
    </div>

    <div>
      <p class="font-bold text-2xl my-12">Explore more flashcards</p>
      <OtherFlashcards />
      <button
        class="bg-primary px-6 py-5 rounded-md mt-24 text-white font-bold md:justify-center hover:bg-primary_dark active:bg-primary_dark"
      >
        Load more ...
      </button>
    </div>
  </div>
</template>
