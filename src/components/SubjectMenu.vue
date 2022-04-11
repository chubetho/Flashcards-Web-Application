<script setup>
  import { useSlots } from 'vue';
  import { ref, provide } from 'vue';
  import { SUBJECTS } from '../constants/constants';

  const slots = useSlots();
  const tabs = slots.default().map((tap) => tap.props);
  const selectedTab = ref(tabs[0]);
  const subMenuIsOpen = ref(false);
  const topTitle = ref('Subjects area');

  provide('selectedTab', selectedTab);

  const emit = defineEmits(['onCloseSubjetMenu', 'onExitMenu', 'onCloseMenu']);

  const getImageUrl = (img) => {
    return new URL(`../assets/images/${img}.svg`, import.meta.url).href;
  };

  const handleBackClick = () => {
    if (subMenuIsOpen.value) {
      subMenuIsOpen.value = false;
      topTitle.value = 'Subjects area';
    } else emit('onCloseSubjectMenu');
  };

  const handleClickTab = (tab) => {
    selectedTab.value = tab;
    topTitle.value = tab.title;
    subMenuIsOpen.value = true;
  };

  const getSubjects = (title) => {
    const subjects = SUBJECTS.filter((subject) => subject.title === title);
    return subjects[0].subs.slice(0, 5);
  };
</script>

<template>
  <div
    class="fixed h-screen w-full bg-light z-[99] md:max-w-[800px] lg:bg-white"
  >
    <div class="topbar px-3 h-12 bg-primary flex items-center justify-between">
      <div class="flex items-center">
        <div
          class="left-arrow h-8 w-8 p-1 bg-white overflow-hidden rounded-full flex justify-center items-center cursor-pointer"
          @click="handleBackClick"
        >
          <img
            class="w-4 h-4 object-cover"
            src="../assets/images/left-arrow.svg"
            alt=""
          />
        </div>
        <p class="text-white font-semibold text-lg ml-2">{{ topTitle }}</p>
      </div>

      <div
        class="left-arrow h-8 w-8 p-1 bg-white overflow-hidden rounded-full flex justify-center items-center cursor-pointer"
        @click="$emit('onExitMenu')"
      >
        <img
          class="w-3.5 h-3.5 object-cover"
          src="../assets/images/x-lg-svgrepo-com.svg"
          alt=""
        />
      </div>
    </div>

    <!-- submenu -->
    <div
      class="submenu px-3 py-6 space-y-4 transition-all"
      v-show="!subMenuIsOpen"
    >
      <div
        class="row flex bg-white py-4 px-6 rounded-lg shadow-md items-center hover:scale-[1.01] cursor-pointer hover:font-semibold lg:rounded-none lg:hover:scale-100 lg:cursor-default lg:hover:font-normal lg:shadow-none lg:border-b-2 border-slate-200 lg:items-center lg:min-h-[137px]"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="handleClickTab(tab)"
      >
        <div class="left flex items-center lg:basis-52 md:mr-12 shrink-0">
          <div class="w-8 h-auto mr-12 lg:w-12">
            <img
              class="w-full h-auto object-cover"
              :alt="tab.img"
              :src="getImageUrl(tab.img)"
            />
          </div>
          <p
            class="text-semibold text-sm text-gray lg:text-base lg:font-semibold"
          >
            {{ tab.title }}
          </p>
        </div>
        <div
          class="hidden right lg:grid grid-cols-2 text-gray gap-y-2 gap-x-16"
        >
          <p
            class="hover:font-semibold cursor-pointer text-sm w-32"
            v-for="(sub, index) in getSubjects(tab.title)"
            :key="index"
          >
            {{ sub.name }}
          </p>
          <p class="font-bold text-sm">View all</p>
        </div>
      </div>
    </div>
    <slot v-if="subMenuIsOpen" />
  </div>
</template>
