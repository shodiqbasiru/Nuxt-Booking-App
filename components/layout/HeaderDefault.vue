<script lang="ts" setup>
const menu = ref<Boolean>(false);
const isScrolled = ref<Boolean>(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
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
      'border-b border-gray-500/50 bg-gray-50 dark:bg-gray-950': isScrolled,
      'bg-transparent text-gray-50': !isScrolled,
    }"
    class="h-[68px] flex shadow-sm fixed top-0 left-0 w-full z-30 transition-colors duration-300"
    @scroll="onScroll"
  >
    <PageContainer class="flex-1 flex items-center">
      <div class="flex justify-between items-center max-w-sm w-full">
        <NuxtLink to="/" class="font-extrabold text-3xl"
          >Hana<span class="text-lime-500">Bass</span></NuxtLink
        >
        <button class="flex items-center md:hidden" @click="toggleMenu">
          <Icon name="ci:hamburger" class="p-4 text-lime-500" />
        </button>
      </div>
      <transition name="slide-down">
        <nav
          v-if="menu"
          class="flex flex-col justify-center items-center absolute top-[68px] left-0 w-full bg-gray-50 dark:bg-gray-950 shadow-md z-20 py-4"
        >
          <NuxtLink to="/" class="hover:text-lime-500 py-4">Home</NuxtLink>
          <NuxtLink to="/room" class="hover:text-lime-500 py-4">Rooms</NuxtLink>
          <NuxtLink to="/services" class="hover:text-lime-500 py-4"
            >Services</NuxtLink
          >
          <NuxtLink to="/about" class="hover:text-lime-500 py-4"
            >About</NuxtLink
          >
          <NuxtLink to="/contact" class="hover:text-lime-500 py-4"
            >Contact</NuxtLink
          >
          <AppToggleTheme />
        </nav>
      </transition>
      <nav
        class="hidden md:flex flex-1 justify-end items-center space-x-2 xl:space-x-8 uppercase tracking-wider text-lg lg:text-xl font-medium"
      >
        <NuxtLink to="/" class="hover:text-lime-500 py-4">Home</NuxtLink>
        <NuxtLink to="/room" class="hover:text-lime-500 py-4">Rooms</NuxtLink>
        <NuxtLink to="/services" class="hover:text-lime-500 py-4"
          >Services</NuxtLink
        >
        <NuxtLink to="/about" class="hover:text-lime-500 py-4">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-lime-500 py-4"
          >Contact</NuxtLink
        >

        <AppToggleTheme />
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
