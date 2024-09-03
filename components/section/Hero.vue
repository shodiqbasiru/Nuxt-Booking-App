<script lang="ts" setup>

const colorMode = useColorMode();

const backgroundClass = computed(() => {
  return colorMode.value === 'dark' ? 'bg-image-dark' : 'bg-image-light';
});


const navigateToRooms = () => {
  return navigateTo("/room");
};

const navigateToBooking = () => {
  return navigateTo("/booking-room");
};

</script>

<template>
  <div class="pt-24 pb-8 lg:py-24 min-h-screen relative">
    <PageContainer class="grid grid-cols-6 lg:grid-cols-5 gap-8 px-4 lg:px-0">
      <div :class="[backgroundClass, 'absolute inset-0', colorMode.value === 'dark' ? 'dark:opacity-30' : 'bg-gray-900 opacity-30']"></div>

      <div
          class="col-span-6 lg:col-span-3 flex flex-col justify-center text-center lg:text-start relative z-10"
      >
        <h3 class="text-lg text-gray-950 dark:text-gray-200">Welcome to</h3>
        <h1 class="text-5xl lg:text-7xl font-bold capitalize dark:text-gray-50">
          Hana<span class="text-lime-500 dark:text-lime-600">Bass</span> Hotel
        </h1>

        <p class="mt-4 text-lg text-gray-950 dark:text-gray-200 w-full lg:max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="mt-8 flex space-x-4 justify-center lg:justify-start">
          <AppButton
              label="view Rooms"
              size="md"
              variant="primary"
              transform="uppercase"
              @click="navigateToRooms"
          />

          <AppButton
              label="Book Now"
              size="md"
              variant="secondary"
              transform="uppercase"
              @click="navigateToBooking"
          />
        </div>

      </div>

      <div class="col-span-6 lg:col-span-2 relative">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col space-y-4">
            <div class="flex-1 h-[300px] overflow-hidden rounded-lg">
              <img
                  src="~/assets/images/hotel-1.jpg"
                  alt="hotel room"
                  class="object-cover w-full h-full brightness-100 dark:brightness-75 hover:brightness-125 dark:hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
            <div class="h-[400px] overflow-hidden rounded-lg">
              <img
                  src="~/assets/images/hotel-2.jpg"
                  alt="hotel room"
                  class="object-cover w-full h-full brightness-100 dark:brightness-75 hover:brightness-125 dark:hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="h-[400px] overflow-hidden rounded-lg">
              <img
                  src="~/assets/images/hotel-3.jpg"
                  alt="hotel room"
                  class="object-cover w-full h-full brightness-100 dark:brightness-75 hover:brightness-125 dark:hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
            <div class="flex-1 h-[300px] overflow-hidden rounded-lg">
              <img
                  src="~/assets/images/hotel-4.jpg"
                  alt="hotel room"
                  class="object-cover w-full h-full brightness-100 dark:brightness-75 hover:brightness-125 dark:hover:brightness-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<style>
.bg-image-dark {
  background-image: url("~/assets/images/bg-dark.jpg");
  background-size: cover;
  background-position: center;
}

.bg-image-light {
  background-image: url("~/assets/images/bg-light.jpg");
  background-size: cover;
  background-position: center;
}

</style>
