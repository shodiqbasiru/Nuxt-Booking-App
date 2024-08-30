<script lang="ts" setup>

</script>

<template>
  <div class="pt-24 pb-8 lg:py-24 min-h-screen relative">
    <PageContainer class="grid grid-cols-6 lg:grid-cols-5 gap-8 px-4 lg:px-0 ">
      <div class="bg-image absolute inset-0 opacity-75 dark:opacity-20"></div>

      <div
        class="col-span-6 lg:col-span-3 flex flex-col justify-center text-center lg:text-start relative z-10"
      >
        <h3 class="text-lg text-gray-50 dark:text-gray-400">Welcome to</h3>
        <h1 class="text-5xl lg:text-7xl font-bold capitalize text-gray-50">
          Hana<span class="text-lime-500">Bass</span> Hotel
        </h1>

        <p class="mt-4 text-lg text-gray-50 dark:text-gray-400 w-full lg:max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="mt-8 flex space-x-4 justify-center lg:justify-start">
          <AppButton
            label="view Rooms"
            size="md"
            variant="primary"
            transform="capitalize"
            to="/room"
          />

          <AppButton
            label="Book Now"
            size="md"
            variant="secondaryOutline"
            transform="capitalize"
            to="/booking"
          />


        </div>
      </div>

      <div class="col-span-6 lg:col-span-2 relative">
        <!-- Galery Images -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col space-y-4">
            <div class="flex-1 h-[300px] overflow-hidden rounded-lg">
              <img
                src="~/assets/images/hotel-1.jpg"
                alt="hotel room"
                class="object-cover w-full h-full brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
            <div class="h-[400px] overflow-hidden rounded-lg">
              <img
                src="~/assets/images/hotel-2.jpg"
                alt="hotel room"
                class="object-cover w-full h-full brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="h-[400px] overflow-hidden rounded-lg">
              <img
                src="~/assets/images/hotel-3.jpg"
                alt="hotel room"
                class="object-cover w-full h-full brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
            <div class="flex-1 h-[300px] overflow-hidden rounded-lg">
              <img
                src="~/assets/images/hotel-4.jpg"
                alt="hotel room"
                class="object-cover w-full h-full brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<style>
.bg-image {
  background-image: url("~/assets/images/hotel-4.jpg");
  background-size: cover;
  background-position: center;
}
</style>
