<template>
  <div class="bg-white px-6 py-3 space-y-4 rounded-md">
    <div class="row">
      <input
        class="w-full focus:outline-none border-b-4 focus:border-primary mb-1 py-1 placeholder-gray-400 text-sm"
        type="text"
        placeholder="Enter term"
      />
      <label for="title" class="uppercase text-xs text-gray-500">term</label>
    </div>
    <div class="row flex">
      <div class="row">
        <input
          class="w-full focus:outline-none border-b-4 focus:border-primary mb-1 py-1 placeholder-gray-400 text-sm"
          type="text"
          placeholder="Enter definition"
        />
        <label for="title" class="uppercase text-xs text-gray-500"
          >definition</label
        >
      </div>
      <label
        class="relative image w-16 h-16 px-3 ml-6 border-4 border-dotted rounded-md flex flex-col justify-center items-center cursor-pointer"
      >
        <img
          src="../assets/images/image_upload.svg"
          alt="upload photo"
          class="w-8 h-8 absolute cursor-pointer"
        />
        <input type="file" class="opacity-0" />
      </label>
    </div>

    <div class="w-4 h-auto pt-2">
      <img src="../assets/images/trash.svg" alt="" />
    </div>
  </div>
</template>
