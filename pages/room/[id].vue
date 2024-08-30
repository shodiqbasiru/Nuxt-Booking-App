<script lang="ts" setup>

import {getRooms} from "~/data/data";

const activeComponent = ref<string>('overview');

const route = useRoute();
const rooms = getRooms();

const {id} = route.params;

const item = rooms.find(room => room.id === Number(id));
const currentRooms = rooms.filter(room => room.id !== Number(id));

const router = useRouter();

const setActiveComponent = (component: string) => {
  activeComponent.value = component;
};

const goToDetailRoom = (id: number) => {
  router.push(`/room/${id}`);
};
</script>

<template>
  <PageContainer class="flex flex-col items-center min-h-screen mt-24">
    <div class="relative flex flex-col items-center overflow-hidden">
      <img
          :src="item.src"
          :alt="item.room"
          class="w-full h-[800px] rounded-lg drop-shadow-lg	"
      />
      <h2 class="text-3xl font-bold mx-auto text-lime-600 my-3 py-2 px-3 border-b-4 border-gray-300 dark:border-gray-500 inline-block">
        {{ item.room }}
      </h2>
    </div>

    <div class="flex gap-8 mt-4 w-full">
      <div class="w-1/3">
        <div class="bg-gray-50 dark:bg-gray-800 dark:rounded-lg dark:shadow-lg overflow-hidden">
          <ul class="p-8">
            <li
                :class="`text-xl font-light dark:text-gray-300 uppercase tracking-widest border-b dark:border-gray-700 py-5 relative group cursor-pointer ${activeComponent === 'overview' ? 'text-lime-600' : ''}`"
                @click="setActiveComponent('overview')"
            >
              Overview
              <span
                  :class="`absolute bottom-0 left-0 h-[2px] bg-lime-500 transition-all duration-300 group-hover:w-1/2 ${activeComponent === 'overview' ? 'w-1/2' : 'w-0'}`"
              ></span>
            </li>

            <li
                :class="`text-xl font-light dark:text-gray-300 uppercase tracking-widest border-b dark:border-gray-700 py-5 relative group cursor-pointer ${activeComponent === 'amenities' ? 'text-lime-600' : ''}`"
                @click="setActiveComponent('amenities')"
            >
              Amenities
              <span
                  :class="`absolute bottom-0 left-0 h-[2px] bg-lime-500 transition-all duration-300 group-hover:w-1/2 ${activeComponent === 'amenities' ? 'w-1/2' : 'w-0'}`"
              ></span>
            </li>

            <li
                :class="`text-xl font-light dark:text-gray-300 uppercase tracking-widest border-b dark:border-gray-700 py-5 relative group cursor-pointer ${activeComponent === 'bookNow' ? 'text-lime-600' : ''}`"
                @click="setActiveComponent('bookNow')"
            >
              Book Now
              <span
                  :class="`absolute bottom-0 left-0 h-[2px] bg-lime-500 transition-all duration-300 group-hover:w-1/2 ${activeComponent === 'bookNow' ? 'w-1/2' : 'w-0'}`"
              ></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1">
        <RoomOverview v-if="activeComponent === 'overview'" :item="item"/>
        <RoomAmenities v-if="activeComponent === 'amenities'" :item="item"/>
        <RoomBooking v-if="activeComponent === 'bookNow'"/>
      </div>
    </div>

    <div class="flex flex-col mt-12">
      <h2 class="text-3xl font-bold mx-auto text-lime-500 dark:text-lime-600 py-2 px-3 border-b-4 border-gray-500 inline-block">
        More <span class="text-gray-950 dark:text-gray-50">Rooms</span>
      </h2>
      <div class="grid grid-cols-6 gap-8 my-8">
        <div
            class="col-span-3 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            v-for="item in currentRooms" :key="item.id"
            @click="goToDetailRoom(item.id)"
        >
          <div class="flex flex-col">
            <div class="relative overflow-hidden">
              <img
                  :src="item.src"
                  :alt="item.room"
                  class="w-full h-[500px] object-cover hover:scale-110 transition-all duration-500 ease-in-out brightness-75 hover:brightness-100 rounded-lg"
              />
            </div>
            <div class="p-4">
              <h2 class="text-2xl font-bold text-center">{{ item.room }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>

</style>