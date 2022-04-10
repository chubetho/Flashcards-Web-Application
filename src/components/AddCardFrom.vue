<script setup>
  const onDeleteCard = () => {
    console.log('delete card');
  };
</script>

<template>
  <div
    class="bg-white p-6 pt-3 space-y-4 rounded-md md:flex md:space-x-10 md:justify-center md:items-baseline"
  >
    <div class="row lg:flex-1">
      <input
        class="w-full focus:outline-none border-b-4 border-slate-400 focus:border-primary mb-1 py-1 placeholder-gray-400 text-sm lg:text-base"
        type="text"
        placeholder="Enter term"
      />
      <label for="title" class="uppercase text-xs text-gray-500 lg:text-sm"
        >term</label
      >
    </div>
    <div class="row flex justify-between lg:flex-1 lg:items-center">
      <div class="definition flex-1">
        <input
          class="w-full focus:outline-none border-b-4 border-slate-400 focus:border-primary mb-1 py-1 placeholder-gray-400 text-sm lg:text-base"
          type="text"
          placeholder="Enter definition"
        />
        <label for="title" class="uppercase text-xs lg:text-sm text-gray-500"
          >definition</label
        >
      </div>
      <label
        class="relative image w-16 h-16 px-3 ml-6 border-4 border-dotted rounded-md cursor-pointer hover:bg-light"
      >
        <img
          src="../assets/images/image_upload.svg"
          alt="upload photo"
          class="w-8 h-8 cursor-pointer absolute top-4"
        />
        <input type="file" class="opacity-0" />
      </label>
    </div>

    <div
      class="w-4 h-auto pt-2 cursor-pointer self-center flex-shrink-0 lg:w-6"
      @click="onDeleteCard"
    >
      <img src="../assets/images/trash.svg" alt="" />
    </div>
  </div>
</template>
