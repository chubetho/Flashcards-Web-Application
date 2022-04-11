<script setup>
  const props = defineProps(['card']);
</script>

<template>
  <div class="card min-h-[150px] bg-white shadow-md rounded-md pt-3 px-6 pb-8">
    <div class="top flex justify-end space-x-6 cursor-pointer">
      <div class="h-4 w-4 overflow-hidden">
        <img src="../assets/images/star.svg" alt="" />
      </div>
      <div class="h-4 w-4 overflow-hidden cursor-pointer">
        <img src="../assets/images/edit.svg" alt="" />
      </div>
    </div>
    <div
      class="text text-lg text-black flex flex-col md:flex-row md:space-x-8 lg:space-x-12 lg:mt-2"
    >
      <div class="title mb-6 lg:basis-48 font-semibold shrink-0">
        {{ props.card.term }}
      </div>
      <div class="content leading-7 lg:flex-1">
        {{ props.card.definition }}
      </div>
    </div>
  </div>
</template>
