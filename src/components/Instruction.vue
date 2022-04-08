<script setup>
  import OtherFlashcards from './OtherFlashcards.vue';
</script>

<template>
  <!-- instruction -->
  <div
    class="bg-light px-3 py-12 lg:flex lg:flex-col 2xl:px-16 xl:px-12 md:px-8"
  >
    <div class="top tracking-wide text-left md:text-center mb-12">
      <h2 class="font-extrabold text-3xl">How to make flashcards</h2>
      <p class="mt-12 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        voluptatem asperiores iure, eligendi omnis reprehenderit unde. Enim
        earum, corrupti assumenda quos accusamus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Similique voluptatem asperiores iure,
        eligendi omnis reprehenderit unde. Enim earum, corrupti assumenda quos
        accusamus.
      </p>
    </div>

    <div
      class="features bg-white py-16 px-8 space-y-12 shadow-xl md:flex md:justify-around md:items-baseline md:pt-8 lg:w-11/12 lg:self-center"
    >
      <div class="row flex items-center justify-between">
        <div class="image w-8 h-8 md:mr-8 lg:w-6 lg:h-6">
          <img src="../assets/images/upload.png" alt="" />
        </div>
        <div class="text-center tracking-wide">
          <h3 class="font-bold text-xl lg:text-lg">Import</h3>
          <p>
            Upload any photo <br />
            to your flashcards
          </p>
        </div>
      </div>
      <div class="row flex items-center justify-between">
        <div class="image w-8 h-8 md:mr-8 lg:w-6 lg:h-6">
          <img src="../assets/images/editing.png" alt="" />
        </div>
        <div class="text-center tracking-wide">
          <h3 class="font-bold text-xl lg:text-lg">Customize</h3>
          <p>
            Take flashcards <br />
            make your own
          </p>
        </div>
      </div>
      <div class="row flex items-center justify-between">
        <div class="image w-8 h-8 md:mr-8 lg:w-6 lg:h-6">
          <img src="../assets/images/star.png" alt="" />
        </div>
        <div class="text-center tracking-wide">
          <h3 class="font-bold text-xl lg:text-lg">Star</h3>
          <p>
            Mark flashcards <br />
            you want to study
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Explore online flashcards -->
  <div class="bg-light px-3 py-12 flex flex-col 2xl:px-16 lg:px-12 md:px-8">
    <div class="top tracking-wide text-left mb-12 md:text-center">
      <h2 class="font-extrabold text-3xl">To lazy to make a flashcards?</h2>
      <p class="mt-12 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        voluptatem asperiores iure, eligendi omnis reprehenderit unde. Enim
        earum, corrupti assumenda quos accusamus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Similique voluptatem asperiores iure,
        eligendi omnis reprehenderit unde. Enim earum, corrupti assumenda quos
        accusamus.
      </p>

      <h2 class="text-xl font-extrabold mt-16">Then find one below</h2>
    </div>

    <OtherFlashcards />

    <button
      class="bg-primary px-6 py-5 rounded-md mt-24 text-white font-bold md:justify-center mx-auto hover:bg-primary_dark active:bg-primary_dark"
    >
      Load more ...
    </button>
  </div>

  <!-- More with flashcards -->
  <div class="bg-light px-3 py-12 2xl:px-16 lg:px-12">
    <div class="more-features bg-white py-16 px-8 space-y-12 shadow-xl">
      <h3 class="text-2xl font-bold text-center">
        Different from traditional flashcards
      </h3>
    </div>
  </div>
</template>
