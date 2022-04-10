<script setup>
  import { useSlots } from 'vue';
  import { ref, provide } from 'vue';

  const slots = useSlots();
  const tabs = slots.default().map((tap) => tap.props);
  const selectedTab = ref(tabs[0]);
  const subMenuIsOpen = ref(false);

  provide('selectedTab', selectedTab);

  const emit = defineEmits(['onCloseSubjetMenu']);

  const getImageUrl = (img) => {
    return new URL(`../assets/images/${img}.svg`, import.meta.url).href;
  };

  const handleExitClick = () => {
    if (subMenuIsOpen.value) subMenuIsOpen.value = false;
    else emit('onCloseSubjectMenu');
  };

  const handleClick = (tab) => {
    selectedTab.value = tab;
    subMenuIsOpen.value = true;
  };
</script>

<template>
  <div class="fixed h-screen w-full bg-light z-[99]">
    <div class="topbar h-12 bg-primary flex items-center px-3">
      <div
        class="left-arrow h-8 w-8 p-1 bg-white overflow-hidden rounded-full flex justify-center items-center cursor-pointer"
        @click="handleExitClick"
      >
        <img
          class="w-4 h-4 object-cover"
          src="../assets/images/left-arrow.svg"
          alt=""
        />
      </div>
      <p class="text-white font-semibold text-lg ml-2">Subjects area</p>
    </div>

    <!-- submenu -->
    <div class="submenu px-3 py-6 space-y-4" v-if="!subMenuIsOpen">
      <div
        class="row flex bg-white py-4 px-6 rounded-lg shadow-sm items-center hover:scale-[1.01] cursor-pointer"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="handleClick(tab)"
      >
        <div class="w-8 h-8 mr-12">
          <img
            class="w-full h-full object-cover"
            :alt="tab.img"
            :src="getImageUrl(tab.img)"
          />
        </div>
        <p class="text-semibold text-sm">{{ tab.title }}</p>
      </div>
    </div>
    <slot v-else />
  </div>
</template>
