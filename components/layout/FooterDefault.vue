<template>
  <footer class="border-t border-gray-500/50 flex py-8">
    <PageContainer class="flex-1 flex flex-col">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 lg:col-span-1">
          <NuxtLink to="/" class="font-extrabold text-3xl"
          >Hana<span class="text-lime-500">Bass</span></NuxtLink
          >
          <p class="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="col-span-3 lg:col-span-1">
          <h2 class="text-xl font-bold text-gray-50">Explore</h2>

          <ul class="mt-4 space-y-2">
            <li>
              <NuxtLink to="/pages/about-us" class="hover:text-lime-500"
              >About
              </NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/pages/contact" class="hover:text-lime-500"
              >Contact
              </NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/room" class="hover:text-lime-500"
              >Rooms
              </NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/facilities" class="hover:text-lime-500"
              >Facilities
              </NuxtLink
              >
            </li>


          </ul>
        </div>

        <div class="col-span-3 lg:col-span-1 flex flex-col space-y-4">
          <h2 class="text-xl font-bold text-gray-50">Contact</h2>
          <div class="text-gray-400 flex items-center space-x-2">
            <Icon
                name="material-symbols:location-city"
                class="w-6 h-6 inline-block"
            />
            <span>Jl. Lorem Ipsum Dolor Sit Amet</span>
          </div>
          <div class="text-gray-400 flex items-center space-x-2">
            <Icon
                name="material-symbols:phone-enabled-sharp"
                class="w-6 h-6 inline-block"
            />
            <span>+62 123 456 789</span>
          </div>
          <div class="text-gray-400 flex items-center space-x-2">
            <Icon name="material-symbols:mail" class="w-6 h-6 inline-block"/>
            <span> hanabass@gmail.com </span>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center">
          <span class="text-lg">
            &copy; 2021 HanaBass. All rights reserved.
          </span>
        <p>Made by MSFB</p>
        <a
            href="https://github.com/shodiqbasiru"
            class="text-lime-500 hover:text-lime-600"
            target="_blank"
        >
            <span class="flex justify-center items-center space-x-2">
              <Icon name="mdi:github" class="w-6 h-6 inline-block"/>
              <p>
                github.com/shodiqbasiru
              </p>
            </span>
        </a>
      </div>
    </PageContainer>
  </footer>
</template>
<script setup lang="ts">
</script>