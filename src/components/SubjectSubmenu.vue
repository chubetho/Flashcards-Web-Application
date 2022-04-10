<script setup>
  import { inject } from 'vue';

  defineProps(['title']);
  const selectedTab = inject('selectedTab');
</script>

<template>
  <div v-show="selectedTab.title == title">
    <div class="rows px-3 mt-8">
      <div class="row mb-6">
        <p
          class="text-sm pb-6 border-b border-gray font-semibold hover:font-bold cursor-pointer text-gray"
        >
          View all
        </p>
      </div>
      <div class="others space-y-6">
        <div
          class="row"
          v-for="(sub, index) in selectedTab.subjects"
          :key="index"
        >
          <p
            class="text-sm pb-6 font-semibold border-b border-gray hover:font-bold cursor-pointer text-gray"
          >
            {{ sub.name }}
          </p>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
