<script setup>
  const props = defineProps(['card']);
</script>

<template>
  <router-link
    :to="{ name: 'Flashcards', params: { flashcardsId: props.card.id } }"
    class="row bg-white p-4 rounded-md shadow-lg cursor-pointer hover:scale-[1.01] transition-transform"
  >
    <div class="top flex items-center justify-between grow-0">
      <div class="text-left tracking-wide">
        <h3 class="font-semibold text-lg">{{ props.card.title }}</h3>
        <p class="text-sm text-gray">{{ props.card.cards.length }} terms</p>
      </div>
      <div class="image w-12 h-12">
        <img src="../assets/logo.png" alt="" />
      </div>
    </div>

    <div class="bottom flex mt-8">
      <div class="w-6 h-6 rounded-full overflow-hidden mr-2">
        <img
          class="h-full w-full object-cover"
          src="../assets/images/avatar.jpg"
          alt=""
        />
      </div>
      <span>{{ props.card.userName }}</span>
    </div>
  </router-link>
</template>
