<script setup lang="ts">

const props = defineProps({
  item: Object
})

const {item} = props;
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <h2 class="text-xl uppercase font-medium text-lime-600">
        Entertainment
      </h2>
      <div class="py-4">
        <ul class="list-disc">
          <li v-for="data in item?.entertainment" :key="item.id" class="ms-4 dark:text-gray-300 text-lg leading-relaxed">
            <span class="capitalize text-gray-700 dark:text-gray-50">{{ data }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="text-xl uppercase font-medium text-lime-600">
        Room Features
      </h2>
      <div class="py-4">
        <ul class="list-disc">
          <li v-for="data in item?.roomFeatures" :key="item.id" class="ms-4 dark:text-gray-300 text-lg leading-relaxed">
            <span class="capitalize text-gray-700 dark:text-gray-50">{{ data }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="text-xl uppercase font-medium text-lime-600">
        Dining
      </h2>
      <div class="py-4">
        <ul class="list-disc">
          <li v-for="data in item?.mealPlan" :key="item.id" class="ms-4 dark:text-gray-300 text-lg leading-relaxed">
            <span class="capitalize text-gray-700 dark:text-gray-50">{{ data }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="text-xl uppercase font-medium text-lime-600">
        Services
      </h2>
      <div class="py-4">
        <ul class="list-disc">
          <li v-for="data in item?.services" :key="item.id" class="ms-4 text-lg leading-relaxed">
            <span class="capitalize text-gray-700 dark:text-gray-50">{{ data }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="text-xl uppercase font-medium text-lime-600">
        Bathroom Amenities
      </h2>
      <div class="py-4">
        <ul class="list-disc">
          <li v-for="data in item?.bathroom" :key="item.id" class="ms-4 text-lg leading-relaxed">
            <span class="capitalize text-gray-700 dark:text-gray-50">{{ data }}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>