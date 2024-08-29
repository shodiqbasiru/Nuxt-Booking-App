<script lang="ts" setup>
const checkIn = ref();
const checkOut = ref();
const countAdult = ref();
const countChildren = ref();
</script>

<template>
  <!-- booking card -->
  <div
    class="bg-slate-200 dark:bg-gray-800 w-full lg:w-[90rem] py-8 px-6 static lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-none lg:rounded-lg shadow-lg lg:z-10"
  >
    <h2 class="text-xl font-bold text-center text-gray-950 dark:text-gray-50 uppercase mb-8">
      Book your room
    </h2>
    <form class="mt-4">
      <!-- formnya hanya ada checkin,checkout,adult,children,button -->
      <div class="grid grid-cols-8 gap-4">
        <FloatLabel class="lg:col-span-2 md:col-span-4 col-span-8 relative">
          <DatePicker
            v-model="checkIn"
            showIcon
            fluid
            iconDisplay="input"
            inputId="icondisplay"
            inputClass="w-full bg-gray-100 dark:bg-gray-800"
          />
          <label for="checkin" class="block text-gray-50">Check-in</label>
        </FloatLabel>

        <FloatLabel class="lg:col-span-2 md:col-span-4 col-span-8 relative">
          <DatePicker
            v-model="checkOut"
            showIcon
            fluid
            iconDisplay="input"
            inputId="icondisplay"
            inputClass="w-full"
          />
          <label for="checkout" class="block text-gray-50">Check-out</label>
        </FloatLabel>

        <FloatLabel class="lg:col-span-1 md:col-span-4 col-span-8 relative">
          <InputNumber
            id="number-adult"
            v-model="countAdult"
            inputClass="w-full"
          />
          <label for="adult" class="block text-gray-50">Adult</label>
        </FloatLabel>

        <FloatLabel class="lg:col-span-1 md:col-span-4 col-span-8 relative">
          <InputNumber
            id="number-children"
            v-model="countChildren"
            inputClass="w-full"
          />
          <label for="children" class="block text-gray-50">Children</label>
        </FloatLabel>

        <div
          class="lg:col-span-2 md:col-span-8 col-span-8 grid place-items-end"
        >
          <AppButton
            label="Book Now"
            variant="primary"
            transform="uppercase"
            class="w-full h-full"
            type="submit"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
