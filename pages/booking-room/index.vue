<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router';
import {useRoom} from '~/composables/useRoom';
import {useBooking} from "~/composables/useBooking";

const router = useRouter();
const route = useRoute();
const {checkOut, checkIn, guests} = useBooking();
const {data: {rooms}, methods: {fetchRooms}} = useRoom();

await fetchRooms();

const setQueryParams = () => {
  router.replace({
    query: {
      ...route.query,
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      guests: guests.value.toString()
    }
  });
};

const resetQueryParams = () => {
  router.replace({
    query: {}
  });
};

const handleSearch = (e: Event) => {
  e.preventDefault();
  setQueryParams();
};

const filteredRooms = computed(() => {
  let filtered = rooms;
  const {checkIn, checkOut, guests} = route.query;

  if (checkIn) {
    filtered = filtered.filter(room => room.availableFrom <= checkIn);
  }
  if (checkOut) {
    filtered = filtered.filter(room => room.availableTo >= checkOut);
  }
  if (guests) {
    filtered = filtered.filter(room => room.occupancy >= guests && room.numberOfRooms > 0)
  }
  ;

  return filtered;
});

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
  <div class="my-20">
    <PageContainer>
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl font-bold mx-auto text-lime-500 dark:text-lime-600 py-2 px-3 border-b-4 dark:border-gray-500 inline-block mb-8">
          Booking <span class="text-gray-950 dark:text-gray-50">Room</span>
        </h1>
        <div class="flex gap-8 mt-4">
          <div>
            <form @submit="handleSearch" class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="checkIn" class="dark:text-gray-300">Check-in</label>
                  <input
                      v-model="checkIn"
                      type="date"
                      id="checkIn"
                      class="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-700 rounded-lg dark:text-gray-100"
                  />
                </div>
                <div>
                  <label for="checkOut" class="dark:text-gray-300">Check-out</label>
                  <input
                      v-model="checkOut"
                      type="date"
                      id="checkOut"
                      class="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-700 rounded-lg dark:text-gray-100"
                  />
                </div>
              </div>
              <div class="mt-4">
                <label for="guests" class="dark:text-gray-300">Guests</label>
                <input
                    v-model="guests"
                    type="number"
                    id="guests"
                    class="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-700 rounded-lg dark:text-gray-100"
                />
              </div>
              <div class="mt-4 flex gap-8">
                <AppButton
                    label="Search"
                    variant="primary"
                    transform="uppercase"
                    size="md"
                    type="submit"
                />
                <AppButton
                    label="Reset"
                    variant="danger"
                    transform="uppercase"
                    size="md"
                    @click="resetQueryParams"
                />
              </div>
            </form>
          </div>
          <div class="flex-1">
            <BookingDataRoom :rooms="filteredRooms"/>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>
