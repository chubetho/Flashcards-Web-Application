<script setup>
  import TopBar from '../components/TopBar.vue';
  import AddCardForm from '../components/AddCardFrom.vue';
  import { ref } from 'vue';
  import { collection, addDoc } from 'firebase/firestore';
  import { db } from '../main';

  const scrollPosition = ref(0);
  window.addEventListener(
    'scroll',
    () => (scrollPosition.value = window.scrollY)
  );

  const set = ref({
    title: '',
    description: '',
    cards: [],
  });

  const cards = ref([
    {
      term: '',
      definition: '',
    },
  ]);

  const onAddCard = () => {
    cards.value.push({
      term: '',
      definition: '',
    });
  };

  const onSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, 'flashcards'), {
        title: set.value.title,
        description: set.value.description,
        cards: set.value.cards,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
</script>

<template>
  <TopBar v-if="!scrollPosition" />
  <div
    class="top-bar flex justify-between items-center h-12 pt-20 mb-20 px-3 sticky top-0 bg-light z-20"
    :class="{ 'shadow-xl': scrollPosition, 'pt-0': scrollPosition }"
  >
    <h1 class="font-bold">Create a new study set</h1>
    <button
      class="px-2 py-1 text-white bg-primary text-sm rounded-sm"
      @click="onSubmit"
    >
      Create
    </button>
  </div>
  <div class="px-3">
    <form class="space-y-4 mb-12">
      <div class="row">
        <input
          class="w-full bg-light focus:outline-none border-b-4 focus:border-primary mb-1 py-1 placeholder-gray-400"
          type="text"
          placeholder="Add a title ..."
          v-model="set.title"
        />
        <label for="title" class="uppercase text-xs text-gray-500">
          enter a title to create set
        </label>
      </div>
      <div class="row">
        <input
          class="w-full bg-light focus:outline-none border-b-4 focus:border-primary mb-1 py-1 placeholder-gray-400"
          type="text"
          placeholder="Add a description ..."
          v-model="set.description"
        />
        <label for="title" class="uppercase text-xs text-gray-500">
          Description
        </label>
      </div>
      <div class="row">
        <select
          class="appearance-none w-full px-3 py-1 rounded-sm bg-white border border-solid border-gray-300 focus:bg-white focus:border-primary focus:outline-none"
          v-model="set.type"
        >
          <option selected disabled>Select subject</option>
          <option value="maths">Maths</option>
          <option value="sciences">Sciences</option>
          <option value="languages">Languages</option>
          <option value="other">Other</option>
        </select>
      </div>
    </form>
    <div class="add-cards space-y-6">
      <AddCardForm v-for="(card, index) in cards" :key="index" />
    </div>

    <div class="bg-white mt-4">
      <button class="w-full py-3">
        <span
          class="border-b-4 border-primary uppercase font-bold text-xs tracking-widest py-1"
          @click="onAddCard"
        >
          + add card
        </span>
      </button>
    </div>
  </div>
</template>
