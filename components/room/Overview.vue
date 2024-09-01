<script setup lang="ts">

const props = defineProps({
  item: Object
})

const bathroom = ref<string>();
const {item} = props;

item.amenity.bathroom.map((bath: string) => bathroom.value === undefined ? bathroom.value = bath : bathroom.value += `, ${bath}`);
</script>

<template>
  <div class="">
    <div class="flex mb-8">
      <div class="flex-1">
        <h2 class="text-4xl font-bold text-lime-500 dark:text-lime-600">${{ item.price }}</h2>
        <p class="text-sm text-gray-400">{{ item.cancellationPolicy }}</p>
      </div>
      <div>
        <table class="table-auto w-full border-collapse border dark:border-gray-800">
          <thead class="bg-lime-500 dark:bg-gray-800 text-gray-400">
          <tr>
            <th class="px-4 py-2 border border-gray-700 text-gray-950 dark:text-gray-50">Check-in</th>
            <th class="px-4 py-2 border border-gray-700 text-gray-950 dark:text-gray-50">Check-out</th>
          </tr>
          </thead>
          <tbody>
          <tr class="hover:bg-gray-700">
            <td class="px-4 py-2 border border-gray-700 text-gray-950 dark:text-gray-50">{{ item.checkInCheckOut.checkIn }}</td>
            <td class="px-4 py-2 border border-gray-700 text-gray-950 dark:text-gray-50">{{ item.checkInCheckOut.checkOut }}</td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
    <p class="text-lg dark:text-gray-300 text-justify mb-3">{{ item.description }}</p>

    <h3 class="text-xl uppercase font-medium text-lime-500 dark:text-lime-600">Room Details</h3>
    <div class="grid grid-cols-1 gap-4">
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Bed Type</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.bedType }} Bed</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Bathroom</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ bathroom }}</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Size</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.size }} Sqft</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Number Of Rooms</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.numberOfRooms }} rooms</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">View</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.view }}</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Max Occupancy</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.occupancy }} Persons</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Smoking Policy</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.smokingPolicy }}</span>
      </div>
      <div class="grid grid-cols-3 items-center border-b dark:border-gray-800 py-4">
        <span class="col-span-1 dark:text-gray-300">Pet Policy</span>
        <span class="col-span-2 text-gray-500 dark:text-gray-100 ml-2 capitalize">: {{ item.petPolicy }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>