<script setup>
  import TopBar from '../components/TopBar.vue';
  import { ref } from 'vue';
  import AddCardForm from '../components/AddCardFrom.vue';

  const scrollPosition = ref(0);
  window.addEventListener(
    'scroll',
    () => (scrollPosition.value = window.scrollY)
  );

  const set = ref({
    title: '',
    description: '',
  });

  const onAddCard = () => {
    cards.value.push({
      term: '',
      definition: '',
    });
  };

  const onSubmit = () => {};
</script>

<template>
  <TopBar v-if="!scrollPosition" />
  <div
    class="top-bar flex justify-between items-center h-12 pt-20 mb-20 px-3 sticky top-0 bg-light z-20 2xl:px-16 2xl:h-16 xl:h-14 lg:px-12 md:px-8"
    :class="{ 'shadow-xl': scrollPosition, 'pt-0': scrollPosition }"
  >
    <h1 class="font-bold lg:text-xl md:text-lg">Create a new study set</h1>
    <button
      class="px-2 py-1 text-white bg-primary text-sm rounded-sm lg:text-lg md:text-base"
      @click="onSubmit"
    >
      Create
    </button>
  </div>
  <div class="px-3 2xl:px-16 lg:px-12 md:px-8">
    <form class="space-y-4 mb-12">
      <div class="row">
        <input
          class="w-full bg-light focus:outline-none border-b-4 border-slate-400 focus:border-primary mb-1 py-1 placeholder-gray-400 lg:text-lg"
          type="text"
          placeholder="Add a title ..."
          v-model="set.title"
        />
        <label for="title" class="uppercase text-xs text-gray-500 lg:text-base">
          enter a title to create set
        </label>
      </div>
      <div class="row">
        <input
          class="w-full bg-light focus:outline-none border-b-4 border-slate-400 focus:border-primary mb-1 py-1 placeholder-gray-400 lg:text-lg"
          type="text"
          placeholder="Add a description ..."
          v-model="set.description"
        />
        <label for="title" class="uppercase text-xs text-gray-500 lg:text-base">
          Description
        </label>
      </div>
      <div class="row">
        <select
          class="w-full px-3 py-1 rounded-sm bg-white border border-solid border-gray-300 focus:bg-white focus:border-primary focus:outline-none"
          v-model="set.type"
        >
          <option value="arts_and_humanities">Arts and Humanities</option>
          <option value="maths">Maths</option>
          <option value="science">Science</option>
          <option value="languages">Languages</option>
          <option value="other">Other</option>
        </select>
        <label class="uppercase text-xs text-gray-500"> Select subject </label>
      </div>
    </form>
    <div class="add-cards space-y-6">
      <AddCardForm />
    </div>

    <div class="bg-white my-4" @click="onAddCard">
      <button class="w-full py-3">
        <span
          class="border-b-4 border-primary uppercase font-bold text-xs tracking-widest py-1"
        >
          + add card
        </span>
      </button>
    </div>
  </div>
</template>
