<script setup lang="ts">

import {getFacilities} from "~/data/data";

const route = useRoute();
const router = useRouter();
const facilities = getFacilities();

const {slug} = route.params;
const facility = facilities.find(facility => facility.slug === slug);
const currentFacilities = facilities.filter(facility => facility.slug !== slug);

const arr = facility.name.split(" ")
const title = arr[0]
const restOfTitle = arr.slice(1).join(" ")

const goToFacility = (slug: string) => {
  router.push(`/facilities/${slug}`);
}
</script>

<template>
  <div class="my-24">
    <PageContainer class="flex flex-col">
     <div class="relative overflow-hidden mb-8">
      <div class="flex items-center justify-center">
        <h1 class="text-3xl font-bold mx-auto text-lime-600 py-2 px-3 border-b-4 border-gray-500 inline-block mb-8">
          {{ title }} <span class="text-gray-50">{{ restOfTitle }}</span>
        </h1>
      </div>
       <div class="relative rounded-lg overflow-hidden mb-8">
         <img
             :src="facility.url"
             :alt="facility.name"
             class="w-full h-[500px] object-cover hover:scale-110 transition-all duration-500 ease-in-out brightness-75 hover:brightness-100 rounded-lg cursor-pointer"/>
       </div>
       <p class="text-lg text-gray-200">
         {{ facility.description }}
       </p>
     </div>
      <div>
        <div class="flex items-center justify-center">
          <h1 class="text-3xl font-bold mx-auto text-lime-600 py-2 px-3 border-b-4 border-gray-500 inline-block mb-8">
            Other <span class="text-gray-50">Facilities</span>
          </h1>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <div
              class="relative overflow-hidden rounded-lg group cursor-pointer"
              v-for="facility in currentFacilities"
              :key="facility.id"
              @click="goToFacility(facility.slug)">
            <img :src="facility.url" :alt="facility.name"
                 class="w-full h-[300px] rounded-lg object-cover brightness-75 transition-all duration-300 group-hover:brightness-50"/>
            <p class="text-center absolute inset-0 flex items-center justify-center text-2xl font-bold text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {{ facility.name }}
            </p>
          </div>
        </div>
      </div>

    </PageContainer>
  </div>
</template>

<style scoped>

</style>