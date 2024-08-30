<script lang="ts" setup>
import { getRooms } from '~/data/data';

const rooms = getRooms();
const router = useRouter();

const goToDetailRoom = (id: number) => {
  router.push(`/room/${id}`);
};
</script>


<template>
  <div class="min-h-screen">
    <AppSlider />

    <PageContainer class="name my-8 relative">
      <div class="flex items-center justify-center">
        <h1 class="text-3xl font-bold mx-auto text-lime-500 dark:text-lime-600 py-2 px-3 border-b-4 border-gray-300 dark:border-gray-500 inline-block mb-8">
          Our <span class="text-gray-950 dark:text-gray-50">Rooms</span>
        </h1>
      </div>
      <div class="grid grid-cols-6 gap-8 mx-56">
        <div
          class="col-span-3 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          v-for="item in rooms" :key="item.id"
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
              <h2 class="text-2xl font-bold text-center">{{item.room}}</h2>
            </div>
          </div>
        </div>

      </div>
    </PageContainer>
  </div>
</template>
