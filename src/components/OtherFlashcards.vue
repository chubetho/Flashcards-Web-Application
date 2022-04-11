<script setup>
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '../main';
  import { ref } from 'vue';
  import { useUser } from '../composable/useUser';
  const { getUser } = useUser();

  const user = getUser();
  const cards = ref([]);

  getDocs(collection(db, 'flashcards')).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (doc.data().userId !== user.value.uid)
        cards.value.push({ ...doc.data(), id: doc.id });
    });
  });
</script>

<template>
  <div
    class="online-flashcards grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-4"
  >
    <router-link
      :to="{ name: 'Home' }"
      class="row bg-white p-4 rounded-md shadow-lg cursor-pointer hover:scale-[1.01] transition-transform"
      v-for="(card, index) in cards"
      :key="index"
    >
      <div class="top flex items-center justify-between">
        <div class="text-left tracking-wide">
          <h3 class="font-bold text-lg lg:text-base">{{ card.title }}</h3>
          <p class="text-sm text-gray-400 font-bold lg:text-xs">
            {{ card.cards.length }}
          </p>
        </div>
        <div class="image w-12 h-12">
          <img src="../assets/logo.png" alt="" />
        </div>
      </div>

      <div class="bottom flex mt-10">
        <img class="h-5 w-5 mr-2" src="../assets/logo.png" alt="" />
        <span>{{ card.userName }}</span>
      </div>
    </router-link>
  </div>
</template>
