<script setup lang="ts">
import type {IRoom} from "~/data/types";
import {useRoom} from "~/composables/useRoom";

const item = ref<IRoom | undefined>();

const route = useRoute()
const {data: {rooms}, methods: {fetchRooms}} = useRoom();
await fetchRooms();

const {slug} = route.params;
const currentRoom = computed(() => rooms.find(room => room.slug === slug));
item.value = currentRoom.value;

</script>

<template>
  <PageContainer class="flex flex-col min-h-screen my-24">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="md:col-span-2 rounded-xl">
        <form>
          <div class="mb-8">
            <h1 class="text-lime-500 text-xl font-bold mb-3 uppercase">Guest Details</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">
              <div>
                <label for="firstName" class="text-gray-950 dark:text-gray-300">First Name</label>
                <input type="text" id="firstName" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100"/>
              </div>
              <div>
                <label for="lastName" class="text-gray-950 dark:text-gray-300">Last Name</label>
                <input type="text" id="lastName" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100"/>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">
              <div class="mt-4">
                <label for="email" class="text-gray-950 dark:text-gray-300">Email</label>
                <input type="email" id="email" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100"/>
              </div>
              <div class="mt-4">
                <label for="phone" class="text-gray-950 dark:text-gray-300">Phone</label>
                <input type="tel" id="phone" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100"/>
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-lime-500 text-xl font-bold mb-3 uppercase">Personal Information</h1>
            <div class="mb-4">
              <label for="address" class="text-gray-950 dark:text-gray-300">Address</label>
              <textarea id="address" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100" rows="3"></textarea>
            </div>
            <div class="mb-4">
              <label for="city" class="text-gray-950 dark:text-gray-300">City</label>
              <input type="text" id="city" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100"/>
            </div>
            <div class="mb-4">
              <label for="zip" class="text-gray-950 dark:text-gray-300">Zip</label>
              <input type="text" id="zip" class="w-full p-2 dark:bg-gray-950 border dark:border-gray-50 text-gray-950 dark:text-gray-100"/>
            </div>
          </div>
        </form>
      </div>
      <div class="md:col-span-2 bg-slate-50 dark:bg-gray-800 p-4 rounded-lg relative shadow-lg">
        <div class="relative overflow-hidden rounded-md mb-8">
          <img :src="item.url" :alt="item.room" class="w-full rounded-md object-cover hover:scale-110 transition-all duration-500 ease-in-out brightness-75 hover:brightness-100"/>
        </div>
        <div class="mb-8">
          <div class="flex justify-center items-center">
            <hr class="w-full border-gray-600 border my-4"/>
            <h2 class="text-xl w-full text-center uppercase font-bold text-lime-600 py-4">{{ item.room }}</h2>
            <hr class="w-full border-gray-600 border my-4"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="col-span-1 grid grid-cols-2">
              <p class="dark:text-gray-50 font-bold">Check-in</p>
              <p class="text-gray-950 dark:text-gray-300">: 2024-12-12</p>
            </div>
            <div class="col-span-1 grid grid-cols-2">
              <p class="dark:text-gray-50 font-bold">Check-out</p>
              <p class="text-gray-950 dark:text-gray-300">: 2024-12-12</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="col-span-1 grid grid-cols-2">
              <p class="dark:text-gray-50 font-bold">Guests</p>
              <p class="text-gray-950 dark:text-gray-300">: 2</p>
            </div>
            <div class="col-span-1 grid grid-cols-2">
              <p class="dark:text-gray-50 font-bold">Rate</p>
              <p class="text-gray-950 dark:text-gray-300">: ${{ item.price }}</p>
            </div>
          </div>
        </div>
        <div class="mt-8 mb-3">
          <p class="text-gray-950 dark:text-gray-300">{{ item.cancellationPolicy }}.</p>
        </div>
        <div class="mb-8">
          <div class="flex justify-between items-center">
            <p class="dark:text-gray-50 font-bold text-xl">Price</p>
            <p class="text-gray-950 dark:text-gray-300 text-xl">${{ item.price }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="dark:text-gray-50 font-bold text-xl">Tax (10%)</p>
            <p class="text-gray-950 dark:text-gray-300 text-xl">${{ item.price * 0.1 }}</p>
          </div>
          <hr class="border border-gray-600 my-4"/>
          <div class="flex justify-between items-center">
            <p class="dark:text-gray-50 font-bold text-xl">Total</p>
            <p class="text-lime-500 text-2xl font-bold">${{ item.price + item.price * 0.1 }}</p>
          </div>
        </div>
        <BookingPaymentMethod/>
        <div class="mt-8">
          <AppButton label="Book & Pay" variant="primary" transform="uppercase" size="lg" class="w-full"/>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<style scoped>

</style>