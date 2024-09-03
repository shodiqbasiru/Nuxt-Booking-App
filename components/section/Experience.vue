<script setup lang="ts">

const {data: {facilities}, methods: {fetchFacilities}} = useFacility();
await fetchFacilities();

const data = facilities.slice(0, 3);

</script>

<template>
  <PageContainer class="py-4 lg:py-32 flex flex-col items-center mt-8 lg:mt-20">
    <div>
      <h1 class="text-4xl font-bold text-center">
        Hana<span class="text-lime-500 dark:text-lime-600">Bass</span> Experience
      </h1>
      <p class="text-center mt-4 text-gray-900 dark:text-gray-300 w-full lg:w-[900px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Minima illum, cumque quis
        similique commodi ab provident! Perferendis animi beatae fuga eum
        voluptatibus necessitatibus rerum unde voluptate, delectus omnis
        perspiciatis hic?
      </p>
    </div>

    <div class="mt-16 grid grid-cols-6 gap-4">
      <div
          v-for="facility in data"
          :key="facility.id"
          class="lg:col-span-2 md:col-span-3 col-span-6 bg-slate-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <div class="flex-1 overflow-hidden">
          <img
              :src="facility.url"
              :alt="facility.name"
              class="w-full h-64 object-cover brightness-100 dark:brightness-75 hover:brightness-125 dark:hover:brightness-100 hover:scale-105 transition-all duration-300"
          />
        </div>
        <div class="p-4 lg:p-6 flex flex-col">
          <div class="flex-1">
            <h2 class="text-xl font-bold text-gray-950 dark:text-gray-50">{{ facility.name }}</h2>
            <p class="text-gray-900 dark:text-gray-300 mt-4">
              {{ facility.description}}
            </p>
          </div>
          <div class="mt-4 min-h-[50px]">
            <NuxtLink
                :to="`/facilities/${facility.slug}`"
                class="mt-4 text-lime-500 dark:text-lime-600 font-bold rounded-lg underline hover:text-gray-900 dark:hover:text-gray-200 transition-colors float-start lg:float-end"
            >View Rooms
            </NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>
