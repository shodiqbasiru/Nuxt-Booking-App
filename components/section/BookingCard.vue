<script lang="ts" setup></script>

<template>
  <!-- booking card -->
  <div
    class="bg-gray-800 w-full lg:w-[90rem] py-8 px-6 static lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-none lg:rounded-lg shadow-lg lg:z-10"
  >
    <h2 class="text-xl font-bold text-center text-gray-50 uppercase">Book your room</h2>
    <form class="mt-4">
      <!-- formnya hanya ada checkin,checkout,adult,children,button -->
      <div class="grid grid-cols-8 gap-4">
        <div class="lg:col-span-2 md:col-span-4 col-span-8">
          <label for="checkin" class="block text-gray-50">Check-in</label>
          <input
            type="date"
            id="checkin"
            class="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
          />
        </div>
        <div class="lg:col-span-2 md:col-span-4 col-span-8">
          <label for="checkout" class="block text-gray-50">Check-out</label>
          <input
            type="date"
            id="checkout"
            class="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
          />
        </div>
        <div class="lg:col-span-1 md:col-span-4 col-span-8">
          <label for="adult" class="block text-gray-50">Adult</label>
          <input
            type="number"
            id="adult"
            placeholder="1"
            class="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
          />
        </div>
        <div class="lg:col-span-1 md:col-span-4 col-span-8">
          <label for="children" class="block text-gray-50">Children</label>
          <input
            type="number"
            id="children"
            placeholder="0"
            class="w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
          />
        </div>
        <div class="lg:col-span-2 md:col-span-8 col-span-8 grid place-items-end">
          <button
            type="submit"
            class="w-full px-6 h-full bg-lime-500 text-gray-900 font-semibold rounded-lg hover:bg-lime-600 transition-colors uppercase md:py-4 lg:py-2 py-4"
          >
            Book Now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
