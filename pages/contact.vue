<script setup lang="ts">

</script>

<template>
  <div class="my-20">
    <PageContainer>
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl font-bold mx-auto text-lime-500 dark:text-lime-600 py-2 px-3 border-b-4 dark:border-gray-500 inline-block mb-8">
          Our <span class="text-gray-950 dark:text-gray-50">Contact</span>
        </h1>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col">
          <h3 class="text-2xl text-lime-500 dark:text-lime-600 font-light uppercase mb-3">
            Contact Information
          </h3>
          <p class="text-lg text-justify dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            facilisis magna. Nullam nec mi et neque pharetra sollicitudin. Praesent
            imperdiet mi nec ante. Donec ac urna eget nisi pulvinar placerat. Cras
            auctor congue odio, et efficitur massa facilisis id. Sed ut odio
            ultricies, varius enim in, lacinia nulla. Donec auctor, libero a
            ultricies lacinia, nunc nulla porttitor nunc, nec tincidunt urna
            turpis vel sapien. Donec nec semper nunc. Nulla facilisi. Nullam
            bibendum, nunc eget pharetra fringilla, est nisl ultricies diam, ac
            aliquet sem nisl non erat. Donec vel dolor nec urna posuere lacinia.
            Vivamus auctor, nisi et dictum ultricies, nisi orci rhoncus turpis, sit
            amet pharetra nunc nulla vel nunc. Nullam ac nunc at libero malesuada
            fermentum. Nullam nec nunc sit amet nunc tincidunt aliquam. Nullam
            ultricies, nunc nec tincidunt aliquam, est nunc fermentum nunc, nec
            porttitor nunc nunc ac nunc. Nullam nec nunc sit amet nunc tincidunt
            aliquam. Nullam ultricies, nunc nec tincidunt aliquam, est nunc
          </p>
        </div>
        <div class="flex flex-col">
          <h3 class="text-2xl text-lime-500 dark:text-lime-600 font-light uppercase mb-3">
            Contact Form
          </h3>
          <form action="#" method="POST" class="flex flex-col gap-4">
            <input type="text" placeholder="Name" class="p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"/>
            <input type="email" placeholder="Email" class="p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"/>
            <textarea placeholder="Message" class="p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"></textarea>
            <button type="submit" class="bg-lime-500 dark:bg-lime-600 text-white py-2 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </PageContainer>
  </div>
</template>

<style scoped>

</style>