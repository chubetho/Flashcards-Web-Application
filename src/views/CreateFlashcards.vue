<script setup>
  import TopBar from '../components/TopBar.vue';
  import AddCardForm from '../components/AddCardFrom.vue';
  import { ref, reactive } from 'vue';
  import useCollection from '../composable/useCollection';
  import { useUser } from '../composable/useUser';
  import { uid } from 'uid';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const scrollPosition = ref(0);
  window.addEventListener(
    'scroll',
    () => (scrollPosition.value = window.scrollY)
  );

  const { getUser } = useUser();
  const user = getUser();

  //These will be summitted
  const set = reactive({
    title: '',
    description: '',
    type: '',
    cards: [
      {
        term: '',
        definition: '',
        uid: uid(8),
      },
    ],
    userId: user.value.uid,
    userName: user.value.displayName,
  });

  const { addRecord, error } = useCollection('flashcards');

  const onAddCard = () => {
    set.cards.push({
      term: '',
      definition: '',
      uid: uid(8),
    });
  };

  const onSubmit = () => {
    addRecord(set);
    if (error.value) {
      console.log(error);
      return;
    }

    router.push({ name: 'Latest' });
  };
  const editCard = (cardId, newCard) => {
    set.cards = set.cards.map((c) =>
      c.uid === cardId
        ? { ...c, term: newCard.term, definition: newCard.definition }
        : c
    );
  };

  const deleteCard = (cardId) => {
    set.cards = set.cards.filter((c) => c.uid !== cardId);
  };
</script>

<template>
  <TopBar v-if="!scrollPosition" />
  <div
    class="top-bar flex justify-between items-center h-12 pt-20 mb-20 px-3 sticky top-0 bg-light 2xl:px-16 lg:px-12 md:px-8"
    :class="{ 'shadow-xl': scrollPosition, 'pt-0': scrollPosition }"
  >
    <h1 class="font-bold md:text-lg lg:text-xl xl:text-3xl">
      Create a new study set
    </h1>
    <button
      class="px-2 py-1 text-white bg-primary text-sm rounded-sm md:text-base lg:text-lg xl:text-xl xl:px-6 xl:py-1.5"
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
      <AddCardForm
        v-for="(card, index) in set.cards"
        :card="card"
        :key="index"
        @onDeleteCard="deleteCard"
        @onEditCard="editCard"
      />
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
