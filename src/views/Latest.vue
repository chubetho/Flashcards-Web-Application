<script setup>
  import TopBar from '../components/TopBar.vue';
  import FlashcardBox from '../components/FlashcardBox.vue';
  import { useUser } from '../composable/useUser';
  import useCollection from '../composable/useCollection';

  const { error, getRecord } = useCollection('flashcards');
  const { getUser } = useUser();

  const user = getUser();
  const myCards = getRecord(user.value.uid, true);
  const otherCards = getRecord(user.value.uid, false);
  if (error.value) console.log(error.value);
</script>

<template>
  <TopBar />

  <div
    class="px-3 pt-20 2xl:px-16 z-50 2xl:h-16 xl:h-14 lg:px-12 md:px-8 md:pt-16 xl:pt-24"
  >
    <div>
      <p class="font-bold text-2xl mb-12">Your flashcards</p>
      <div
        class="online-flashcards grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-4"
      >
        <FlashcardBox
          v-for="(card, index) in myCards"
          :key="index"
          :card="card"
        />
      </div>
    </div>

    <div class="pt-4">
      <p class="font-bold text-2xl my-12">Explore more flashcards</p>
      <div
        class="online-flashcards grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-4"
      >
        <FlashcardBox
          v-for="(card, index) in otherCards"
          :key="index"
          :card="card"
        />
      </div>
    </div>
    <button
      class="bg-primary px-6 py-5 mt-8 rounded-md text-white font-bold md:justify-center hover:bg-primary_dark active:bg-primary_dark transition-colors"
    >
      Load more ...
    </button>
  </div>
</template>
