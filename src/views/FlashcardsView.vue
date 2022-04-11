<script setup>
  import TopBar from '../components/TopBar.vue';
  import FlashcardsBoxDetail from '../components/FlashcardsBoxDetail.vue';
  import Flipcard from '../components/Flipcard.vue';
  import { useRoute } from 'vue-router';
  import useCollection from '../composable/useCollection';

  const { getRecordWithId, error } = useCollection('flashcards');
  const route = useRoute();
  const card = getRecordWithId(route.params.flashcardsId);

  if (error.value) console.log(error.value);
</script>

<template>
  <TopBar />
  <div
    class="px-3 pt-12 2xl:px-60 xl:px-48 lg:px-32 md:px-8 xl:pt-16"
    v-if="card"
  >
    <div class="title pt-5 text-black">
      <h3 class="text-4xl font-bold">{{ card.title }}</h3>
      <p class="font-semibold mt-8 xl:text-lg">{{ card.description }}</p>
    </div>

    <div class="mt-8">
      <Flipcard :card="card" />
    </div>

    <div class="flascards_info mt-8 flex justify-between">
      <div class="left flex shrink-0 items-center">
        <div class="avatar h-11 w-11 overflow-hidden rounded-full">
          <img
            class="w-full h-auto object-cover"
            src="../assets/images/avatar.jpg"
            alt=""
          />
        </div>
        <div
          class="creation flex flex-col justify-between ml-2 items-center md:flex-row md:space-x-1"
        >
          <span class="text-sm font-extralight xl:text-lg">Created by</span>
          <span class="text-sm xl:text-lg">{{ card.userName }}</span>
        </div>
      </div>
      <div class="right flex space-x-2">
        <div class="button">
          <div
            class="w-10 h-10 rounded-full bg-white flex justify-center items-center xl:w-12 xl:h-12 cursor-pointer"
          >
            <img
              class="w-4 h-4 opacity-80"
              src="../assets/images/plus.svg"
              alt=""
            />
          </div>
        </div>
        <div class="button">
          <div
            class="w-10 h-10 rounded-full bg-white flex justify-center items-center xl:w-12 xl:h-12 cursor-pointer"
          >
            <img
              class="w-4 h-4 opacity-80"
              src="../assets/images/cards.svg"
              alt=""
            />
          </div>
        </div>
        <div class="button">
          <div
            class="w-10 h-10 rounded-full bg-white flex justify-center items-center xl:w-12 xl:h-12 cursor-pointer"
          >
            <img
              class="w-4 h-4 opacity-80"
              src="../assets/images/share.svg"
              alt=""
            />
          </div>
        </div>
        <div class="button">
          <div
            class="w-10 h-10 rounded-full bg-white flex justify-center items-center xl:w-12 xl:h-12 cursor-pointer"
          >
            <img
              class="w-3.5 h-3.5 opacity-80"
              src="../assets/images/info.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="cards my-16 space-y-4">
      <div class="count text-2xl font-bold text-black mb-8">
        Term in this set ({{ card.cards.length }})
      </div>
      <FlashcardsBoxDetail
        v-for="(card, index) in card.cards"
        :key="index"
        :card="card"
      />
    </div>
  </div>
</template>
