<script setup lang="ts">

</script>

<template>
  <form action="">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="checkIn" class="dark:text-gray-300">Check-in</label>
        <input type="date" id="checkIn" class="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-700 rounded-lg dark:text-gray-100" />
      </div>
      <div>
        <label for="checkOut" class="dark:text-gray-300">Check-out</label>
        <input type="date" id="checkOut" class="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-700 rounded-lg dark:text-gray-100" />
      </div>
    </div>
    <div class="mt-4">
      <label for="guests" class="dark:text-gray-300">Guests</label>
      <input type="number" id="guests" class="w-full p-2 bg-gray-50 dark:bg-gray-800 border border-gray-700 rounded-lg dark:text-gray-100" />
    </div>
    <div class="mt-4">
      <button class="w-full p-2 bg-lime-500 dark:bg-lime-600 text-gray-800 rounded-lg">Book Now</button>
    </div>
  </form>
</template>

<style scoped>

</style>