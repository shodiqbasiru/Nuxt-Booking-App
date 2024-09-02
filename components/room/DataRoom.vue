<script lang="ts" setup>

import type {IRoom} from "~/data/types";

defineProps<{ rooms: IRoom[] }>();
</script>

<template>
  <div
      class="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700 gap-4 p-4 rounded-lg overflow-y-scroll max-h-[720px] shadow-lg bg-gray-50 dark:bg-gray-900">
    <div v-if="rooms.length === 0" class="text-center py-4">
      <p class="text-lg dark:text-gray-300 font-light">
        No rooms available
      </p>
    </div>
    <div
        class="col-span-1 flex gap-4 py-2 "
        v-for="item in rooms" :key="item.id">
      <div class="max-w-[200px] relative overflow-hidden rounded-lg">
        <img
            :src="item.url"
            alt="About Us"
            class="h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out brightness-75 hover:brightness-100 rounded-lg cursor-pointer"/>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex justify-between">
          <div class="flex-1 flex items-center gap-4 mb-2">
            <h3 class="text-xl text-lime-500 dark:text-lime-600 font-bold uppercase ">
              {{ item.room }}
            </h3>
            <span :class="`text-sm px-4 py-1 rounded-full uppercase
              ${item.numberOfRooms == 0 ? 'bg-red-800' : 'bg-lime-800'}
            `">
             {{ item.numberOfRooms == 0 ? 'Unavailable' : 'Available' }}
            </span>
          </div>
          <div class="">
            <p class="text-3xl text-lime-500 font-bold">
              ${{ item.price }}<span class="text-sm dark:text-gray-300 font-light">/night</span>
            </p>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-gray-700">
          <div class="col-span-2">
            <div class="grid grid-cols-4 mb-2">
              <div class="col-span-2">
                  <span class="flex items-center gap-2">
                    <Icon name="cbi:roomsbedroom" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">
                      Available Rooms
                    </p>
                  </span>
              </div>
              <div class="col-span-2">
                <p class="text-sm dark:text-gray-300 font-light">
                  : {{ item.numberOfRooms }} Rooms
                </p>
              </div>
            </div>
            <div class="grid grid-cols-4 mb-2">
              <div class="col-span-2">
                 <span class="flex items-center gap-2">
                    <Icon name="mdi:bunk-bed" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">
                       Room
                    </p>
                  </span>
              </div>
              <div class="col-span-2">
                <p class="text-sm dark:text-gray-300 font-light">
                  : {{ item.roomNumber.toString() }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-4 mb-2">
              <div class="col-span-2">
                <span class="flex items-center gap-2">
                    <Icon
                        name="guidance:guest-within-height-limit-must-be-supervised"
                        class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">
                       Maximum Occupancy
                    </p>
                  </span>
              </div>
              <div class="col-span-2">
                <p class="text-sm dark:text-gray-300 font-light">
                  : {{ item.occupancy }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-4 mb-2">
              <div class="col-span-2">
                <span class="flex items-center gap-2">
                    <Icon name="fluent:resize-large-16-filled" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">
                       Size
                    </p>
                  </span>
              </div>
              <div class="col-span-2">
                <p class="text-sm dark:text-gray-300 font-light">
                  : {{ item.size }} sqft
                </p>
              </div>
            </div>
            <div class="grid grid-cols-4 mb-2">
              <div class="col-span-2">
               <span class="flex items-center gap-2">
                    <Icon name="cbi:roomsguestroom" class="w-5 h-5 inline-block"/>
                    <p class="text-sm dark:text-gray-300 font-light">
                       Bed Type
                    </p>
                  </span>
              </div>
              <div class="col-span-2">
                <p class="text-sm dark:text-gray-300 font-light">
                  : {{ item.bedType }} Size
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 px-2">
            <div class="flex flex-wrap gap-2 mb-3">
              <h3 class="text-xl dark:text-lime-600 font-light">
                Amenities
              </h3>
              <p class="text-sm dark:text-gray-300 font-light">
                {{ item.amenity.roomFeatures.toString().replace(/,/g, ', ') }}
              </p>
            </div>
            <div class="flex justify-evenly">
              <AppButton
                  label="Proceed"
                  size="sm"
                  variant="primary"
                  transform="uppercase"
              />
              <AppButton
                  label="View Detail"
                  size="sm"
                  variant="secondaryOutline"
                  transform="uppercase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
