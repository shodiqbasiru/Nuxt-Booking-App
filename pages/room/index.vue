<script lang="ts" setup>
import {useRoom} from "~/composables/useRoom";

const {data: {rooms}, methods: {fetchRooms}} = useRoom();
const router = useRouter();

const goToDetailRoom = (slug: string) => {
  router.push(`/room/${slug}`);
};

onMounted(() => {
  fetchRooms();
});
</script>


<template>
  <div class="min-h-screen">
    <AppSlider/>

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
            @click="goToDetailRoom(item.slug)"
        >
          <div class="flex flex-col">
            <div class="relative overflow-hidden">
              <img
                  :src="item.url"
                  :alt="item.room"
                  class="w-full h-[500px] object-cover hover:scale-110 transition-all duration-500 ease-in-out brightness-100 dark:brightness-75 hover:brightness-125 dark:hover:brightness-100 rounded-lg"
              />
            </div>
            <div class="p-4">
              <h2 class="text-2xl font-bold text-center">{{ item.room }}</h2>
            </div>
          </div>
        </div>

      </div>
    </PageContainer>
  </div>
</template>
