<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";

const checkIn = ref<string>('');
const checkOut = ref<string>('');
const guests = ref<number>(0);

const route = useRoute();


const handleSearch = (e:Event) => {
  e.preventDefault();
  return navigateTo({
    path: '/booking-room',
    query: {
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      guests: guests.value.toString()
    }
  });
};

watch(
    () => route.query,
    (newQuery,) => {
      checkIn.value = newQuery.checkIn as string;
      checkOut.value = newQuery.checkOut as string;
      guests.value = parseInt(newQuery.guests as string);
    },
    {immediate: true}
);
</script>

<template>
  <div
      class="bg-slate-200 dark:bg-gray-800 w-full lg:w-[90rem] py-8 px-6 static lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-none lg:rounded-lg shadow-lg lg:z-10"
  >
    <h2 class="text-xl font-bold text-center text-gray-950 dark:text-gray-50 uppercase mb-8">
      Book your room
    </h2>
    <form class="mt-4" >
      <div class="grid grid-cols-8 gap-4">
        <form action="" class="col-span-8">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label for="checkIn" class="dark:text-gray-300">Check-in</label>
              <input
                  v-model="checkIn"
                  type="date"
                  id="checkIn"
                  class="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-700 rounded-lg dark:text-gray-100"/>
            </div>
            <div>
              <label for="checkOut" class="dark:text-gray-300">Check-out</label>
              <input
                  v-model="checkOut"
                  type="date"
                     id="checkOut"
                     class="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-700 rounded-lg dark:text-gray-100"/>
            </div>
            <div>
              <label for="guests" class="dark:text-gray-300">Guests</label>
              <input
                  v-model="guests"
                  type="number"
                  id="guests"
                     class="w-full p-2 bg-gray-50 dark:bg-gray-900 border border-gray-700 rounded-lg dark:text-gray-100"/>
            </div>
            <div class="col-span-1 col-start-2">
              <AppButton
                  label="Book Now"
                  variant="primary"
                  transform="uppercase"
                  class="w-full h-full"
                  type="submit"
                  @click="handleSearch"
              />
            </div>
          </div>
        </form>

      </div>
    </form>
  </div>
</template>

<style scoped></style>
