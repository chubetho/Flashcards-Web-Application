<script setup>
  import { ref } from 'vue';

  const isFlip = ref(false);
  const props = defineProps(['card']);
  const listTerms = props.card.cards;
  const currentIndex = ref(0);
  const selectedTerm = ref(listTerms[currentIndex.value]);

  const handleNextAndBack = (action) => {
    if (action === 'next') {
      if (currentIndex.value == 4) return;
      selectedTerm.value = listTerms[++currentIndex.value];
    }
    if (action === 'back') {
      if (currentIndex.value == 0) return;
      selectedTerm.value = listTerms[--currentIndex.value];
    }
  };
</script>

<template>
  <div
    class="h-[550px] bg-white rounded-xl shadow-lg px-6 md:px-12 flex justify-center items-center text-2xl duration-700 ease-in-out cursor-pointer transform-gpu"
    :class="{ 'my-rotate-x-180': isFlip }"
    @click="isFlip = !isFlip"
  >
    <p v-if="!isFlip" :class="{ 'text-white': isFlip }" class="text-3xl">
      {{ selectedTerm.term }}
    </p>
    <p
      v-else
      class="transition-all my-rotate-x-180 tracking-wide text-black duration-100"
      :class="{ 'text-white': !isFlip }"
    >
      {{ selectedTerm.definition }}
    </p>
  </div>

  <div class="flex mt-6 justify-around">
    <div
      class="left rotate-180 w-5 h-5 hover:w-6 hover:h-6 cursor-pointer"
      @click="handleNextAndBack('back')"
    >
      <img src="../assets/images/right-arrow.svg" alt="" />
    </div>
    <div class="center text-lg">
      {{ currentIndex + 1 }}/{{ card.cards.length }}
    </div>
    <div
      class="right w-5 h-5 hover:w-6 hover:h-6 cursor-pointer"
      @click="handleNextAndBack('next')"
    >
      <img src="../assets/images/right-arrow.svg" alt="" />
    </div>
  </div>
</template>
