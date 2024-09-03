<script setup lang="ts">

defineProps<{ error: { statusCode: number} }>();

useHead({
  title: error.statusCode === 404 ? 'Page not found' : 'An error occurred',
  meta: [
    {
      name: 'description',
      content: 'Error page'
    }
  ]
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
   <div class="p-8 rounded-lg shadow-lg text-center bg-white dark:bg-gray-800 max-w-md w-full">
     <h1 class="text-6xl font-bold text-lime-500 dark:text-lime-600">
       {{ error.statusCode }}
     </h1>
     <p class="text-2xl text-gray-700 dark:text-gray-300 mt-4">
       {{ error.statusCode === 404 ? 'Page not found' : 'Oops! Something went wrong' }}
     </p>
     <NuxtLink to="/" class="mt-6 text-lime-500 dark:text-lime-600 underline">Go back to Home</NuxtLink>
   </div>
  </div>
</template>