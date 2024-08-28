<template>
  <PageContainer class="py-4 lg:py-32 flex flex-col items-center mt-8 lg:mt-20">
    <div>
      <h1 class="text-4xl font-bold text-center">
        Hana<span class="text-lime-500">Bass</span> Experience
      </h1>
      <p class="text-center mt-4 text-gray-400 w-full lg:w-[900px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Minima illum, cumque quis
        similique commodi ab provident! Perferendis animi beatae fuga eum
        voluptatibus necessitatibus rerum unde voluptate, delectus omnis
        perspiciatis hic?
      </p>
    </div>

    <div class="mt-16 grid grid-cols-6 gap-4">
      <div class="lg:col-span-2 md:col-span-3 col-span-6 bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <div class="flex-1 overflow-hidden">
          <img
            src="~/assets/images/lr.jpg"
            alt="luxury-room"
            class="w-full h-64 object-cover brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
          />
        </div>
        <div class="p-4 lg:p-6 flex flex-col">
          <div class="flex-1">
            <h2 class="text-xl font-bold text-gray-50">Luxury Room</h2>
            <p class="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="mt-4 min-h-[50px]">
            <NuxtLink
              to="/rooms"
              class="mt-4 text-lime-500 font-medium rounded-lg underline hover:text-white transition-colors float-start lg:float-end"
              >View Rooms</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="lg:col-span-2 md:col-span-3 col-span-6 bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <div class="flex-1 overflow-hidden">
          <img
            src="~/assets/images/sp.jpg"
            alt="swimming-pool"
            class="w-full h-64 object-cover brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
          />
        </div>
        <div class="p-4 lg:p-6 flex flex-col">
          <div class="flex-1">
            <h2 class="text-xl font-bold text-gray-50">Swimming Pool</h2>
            <p class="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="mt-4 min-h-[50px]">
            <NuxtLink
              to="/swimming-pool"
              class="mt-4 text-lime-500 font-medium rounded-lg underline hover:text-white transition-colors float-start lg:float-end"
              >View Pool</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="lg:col-span-2 md:col-span-3 col-span-6 bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <div class="flex-1 overflow-hidden">
          <img
            src="~/assets/images/rh.jpg"
            alt="restaurant-hotel"
            class="w-full h-64 object-cover brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
          />
        </div>
        <div class="p-4 lg:p-6 flex flex-col">
          <div class="flex-1">
            <h2 class="text-xl font-bold text-gray-50">Restaurant</h2>
            <p class="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="mt-4 min-h-[50px]">
            <NuxtLink
              to="/restaurant"
              class="mt-4 text-lime-500 font-medium rounded-lg underline hover:text-white transition-colors float-start lg:float-end"
              >View Restaurant</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>
