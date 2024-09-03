<script setup lang="ts">
import type {IRoom} from "~/data/types";

defineProps<{ room: IRoom | null; isShow: Boolean }>();

const emit = defineEmits(["close-modal"]);

const handleCloseModal = () => {
  emit("close-modal");
};
</script>

<template>
  <AppModal :isShow="isShow" @modal-close="handleCloseModal">
    <template #title> Room Detail</template>
    <template #body>
      <div class="flex flex-col md:flex-row gap-4 py-2">
        <div class="w-full md:max-w-[250px] relative overflow-hidden rounded-lg">
          <img
              :src="room?.url"
              :alt="room?.room"
              class="h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out brightness-75 hover:brightness-100 rounded-lg cursor-pointer"
          />
        </div>
        <div class="flex flex-col max-h-[400px] overflow-y-scroll">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="flex-1 flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-2">
              <h3 class="text-xl text-lime-500 dark:text-lime-600 font-bold uppercase">
                {{ room?.room }}
              </h3>
              <span
                  :class="`text-sm px-4 py-1 rounded-full uppercase
                  ${
                    room?.numberOfRooms == 0
                      ? 'bg-red-800'
                      : 'dark:bg-lime-800 bg-lime-300'
                  }`">
                {{ room?.numberOfRooms == 0 ? "Unavailable" : "Available" }}
              </span>
            </div>
            <div>
              <p class="text-3xl text-center md:text-start text-lime-500 font-bold me-3">
                ${{ room?.price }}
                <span class="text-sm text-gray-800 dark:text-gray-300 font-light">/night</span>
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            <div class="col-span-2">
              <div class="grid grid-cols-2 mb-2">
                <div class="col-span-1">
                  <span class="flex items-center gap-2">
                    <Icon name="cbi:roomsbedroom" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">Available Rooms</p>
                  </span>
                </div>
                <div class="col-span-1">
                  <p class="text-sm dark:text-gray-300 font-light">: {{ room?.numberOfRooms }} Rooms</p>
                </div>
              </div>
              <div class="grid grid-cols-2 mb-2">
                <div class="col-span-1">
                  <span class="flex items-center gap-2">
                    <Icon name="mdi:bunk-bed" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">Room</p>
                  </span>
                </div>
                <div class="col-span-1">
                  <p class="text-sm dark:text-gray-300 font-light">: {{ room?.roomNumber.toString() }}</p>
                </div>
              </div>
              <div class="grid grid-cols-2 mb-2">
                <div class="col-span-1">
                  <span class="flex items-center gap-2">
                    <Icon name="guidance:guest-within-height-limit-must-be-supervised" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">Maximum Occupancy</p>
                  </span>
                </div>
                <div class="col-span-1">
                  <p class="text-sm dark:text-gray-300 font-light">: {{ room?.occupancy }}</p>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <div class="grid grid-cols-2 mb-2">
                <div class="col-span-1">
                  <span class="flex items-center gap-2">
                    <Icon name="fluent:resize-large-16-filled" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">Size</p>
                  </span>
                </div>
                <div class="col-span-1">
                  <p class="text-sm dark:text-gray-300 font-light">: {{ room?.size }} sqft</p>
                </div>
              </div>
              <div class="grid grid-cols-2 mb-2">
                <div class="col-span-1">
                  <span class="flex items-center gap-2">
                    <Icon name="cbi:roomsguestroom" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">Bed Type</p>
                  </span>
                </div>
                <div class="col-span-1">
                  <p class="text-sm dark:text-gray-300 font-light">: {{ room?.bedType }} Size</p>
                </div>
              </div>
            </div>
            <div class="col-span-2 md:col-span-4">
              <h3 class="text-xl dark:text-lime-600 font-bold uppercase mb-1">Amenities</h3>
              <div class="mb-2">
                <h5 class="text-lg dark:text-gray-50 font-light">Room Features</h5>
                <ul class="flex flex-col flex-wrap list-disc list-inside text-sm dark:text-gray-300 font-light max-h-36">
                  <li v-for="(item, index) in room?.amenity.roomFeatures" :key="index" class="text-sm">{{ item }}</li>
                </ul>
              </div>
              <div class="mb-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div>
                  <h5 class="text-lg dark:text-gray-50 font-light">Bathroom</h5>
                  <ul class="flex flex-col flex-wrap list-disc list-inside text-sm dark:text-gray-300 font-light max-h-36">
                    <li v-for="(item, index) in room?.amenity.bathroom" :key="index" class="text-sm">{{ item }}</li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg dark:text-gray-50 font-light">Meals</h5>
                  <ul class="flex flex-col flex-wrap list-disc list-inside text-sm dark:text-gray-300 font-light max-h-36">
                    <li v-for="(item, index) in room?.amenity.mealPlan" :key="index" class="text-sm">{{ item }}</li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg dark:text-gray-50 font-light">Entertainment</h5>
                  <ul class="flex flex-col list-disc list-inside text-sm dark:text-gray-300 font-light max-h-36">
                    <li v-for="(item, index) in room?.amenity.entertainment" :key="index" class="text-sm">{{ item }}</li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg dark:text-gray-50 font-light">Services</h5>
                  <ul class="flex flex-col list-disc list-inside text-sm dark:text-gray-300 font-light max-h-36">
                    <li v-for="(item, index) in room?.amenity.services" :key="index" class="text-sm">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppModal>
</template>