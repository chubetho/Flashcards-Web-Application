<script setup>
  import { inject } from 'vue';

  defineProps(['title']);
  const selectedTab = inject('selectedTab');
</script>

<template>
  <div v-show="selectedTab.title == title">
    <div class="rows px-3 mt-8">
      <div class="row mb-6">
        <p class="text-sm font-semibold pb-5 border-b-2 border-gray-300">
          View all
        </p>
      </div>
      <div class="others space-y-6">
        <div class="row">
          <p class="text-sm font-semibold pb-5 border-b-2 border-gray-300">
            View all
          </p>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
