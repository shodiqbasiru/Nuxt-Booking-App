<script setup lang="ts">

import {getFacilities} from "~/data/data";

const router = useRouter();

const facilities = getFacilities();

const goToFacility = (slug: string) => {
  router.push(`/facilities/${slug}`);
}
</script>

<template>
  <div class="flex flex-col relative">
    <PageContainer class="my-20 py-20">
      <div class="bg-image absolute inset-0 opacity-75 dark:opacity-20"></div>
      <h1 class="text-4xl font-bold text-center mb-8 relative">
        Our
        <span class="text-lime-500 dark:text-lime-600">
        Facilities
      </span>
      </h1>
      <div class="grid grid-cols-4 gap-4 relative">
        <div
            class="relative overflow-hidden rounded-lg group cursor-pointer"
            v-for="facility in facilities"
            :key="facility.id"
            @click="goToFacility(facility.slug)">
          <img :src="facility.url" :alt="facility.name"
               class="w-full h-[300px] rounded-lg object-cover brightness-75 transition-all duration-300 group-hover:brightness-50"/>
          <p class="text-center absolute inset-0 flex items-center justify-center text-2xl font-bold text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {{ facility.name }}
          </p>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<style scoped>

</style>