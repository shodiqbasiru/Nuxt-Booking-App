<script lang="ts" setup>
import {getFacilities, getRooms} from "~/data/data";

const menu = ref<Boolean>(false);
const isScrolled = ref<Boolean>(false);
const isRoomHovered = ref<Boolean>(false);
const isFacilityHovered = ref<Boolean>(false);

const facilityItems = getFacilities();
const roomItems = getRooms();

const toggleMenu = () => {
  menu.value = !menu.value;
};

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const handleRoomHover = () => {
  isRoomHovered.value = true;
};

const handleRoomLeave = () => {
  isRoomHovered.value = false;
};

const handleFacilityHover = () => {
  isFacilityHovered.value = true;
};

const handleFacilityLeave = () => {
  isFacilityHovered.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
      :class="{
      'border-b border-gray-200/50 dark:border-gray-800/50 bg-gray-50 dark:bg-gray-950 shadow-sm': isScrolled,
      'bg-transparent text-gray-50': !isScrolled,
    }"
      class="h-[68px] flex fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      @scroll="onScroll"
  >
    <PageContainer class="flex-1 flex items-center">
      <div class="flex justify-between items-center max-w-sm w-full">
        <NuxtLink to="/" class="font-extrabold text-4xl text-gray-950 dark:text-gray-50"
        >Hana<span class="text-lime-500">Bass</span></NuxtLink
        >
        <button class="flex items-center md:hidden" @click="toggleMenu">
          <Icon name="ci:hamburger" class="p-4 text-lime-500"/>
        </button>
      </div>
      <transition name="slide-down">
        <nav
            v-if="menu"
            class="flex flex-col justify-center items-center absolute top-[68px] left-0 w-full bg-gray-50 dark:bg-gray-950 shadow-md z-20 py-4"
        >
          <NuxtLink to="/" class="hover:text-lime-500 py-4">Home</NuxtLink>
          <NuxtLink to="/room" class="hover:text-lime-500 py-4">Rooms</NuxtLink>
          <NuxtLink
              to="/facilities" class="hover:text-lime-500 py-4"
          >
            Facilities
          </NuxtLink>
          <NuxtLink to="/about-us" class="hover:text-lime-500 py-4"
          >
            About
          </NuxtLink
          >
          <NuxtLink to="/contact" class="hover:text-lime-500 py-4"
          >
            Contact
          </NuxtLink
          >
          <AppToggleTheme/>
        </nav>
      </transition>
      <nav
          class="hidden md:flex flex-1 justify-end items-center space-x-2 xl:space-x-8 uppercase tracking-wider text-lg lg:text-xl font-light"
      >
        <NuxtLink to="/" class="hover:text-lime-500 text-lime-500 dark:text-gray-50 py-4">Home</NuxtLink>
        <div class="relative">
          <NuxtLink
              to="/room"
              class="hover:text-lime-500 text-lime-500 dark:text-gray-50 py-4"
              @mouseenter="handleRoomHover"
              @mouseleave="handleRoomLeave"
          >
            Rooms
          </NuxtLink>
          <AppDropdown
              path-name="room"
              :items="roomItems"
              v-if="isRoomHovered"
              @mouseenter="handleRoomHover"
              @mouseleave="handleRoomLeave"/>
        </div>
        <div class="relative">
          <NuxtLink
              to="/facilities"
              class="hover:text-lime-500 text-lime-500 dark:text-gray-50 py-4"
              @mouseenter="handleFacilityHover"
              @mouseleave="handleFacilityLeave"
          >
            Facilities
          </NuxtLink>
          <AppDropdown path-name="facilities" :items="facilityItems" v-if="isFacilityHovered" @mouseenter="handleFacilityHover"
                       @mouseleave="handleFacilityLeave"/>
        </div>
        <NuxtLink to="/about-us" class="hover:text-lime-500 text-lime-500 dark:text-gray-50 py-4">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-lime-500 text-lime-500 dark:text-gray-50 py-4"
        >Contact
        </NuxtLink
        >

        <AppToggleTheme/>
      </nav>
    </PageContainer>
  </header>
</template>

<style scoped>
header {
  transition: background-color 0.3s ease;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>