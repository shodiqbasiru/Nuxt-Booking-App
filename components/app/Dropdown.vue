<script setup lang="ts">
const props = defineProps({
  items: Array,
  onHover: Function,
  onLeave: Function,
});

const {items, onHover, onLeave} = props;
</script>

<template>
  <div
      class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40 overflow-hidden transition-transform transform-gpu origin-top scale-y-0 group-hover:scale-y-100"
      @mouseenter="onHover"
      @mouseleave="onLeave"
  >
    <div v-for="item in items" :key="item.id" class="bg-gray-800">
      <NuxtLink :to="`/facilities/${item.slug}`"
                class="block p-4 text-sm text-gray-50 hover:bg-gray-50 capitalize cursor-pointer">{{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.group-hover\:scale-y-100 {
  transform: scaleY(1);
}
</style>