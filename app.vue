<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <NuxtLayout>
    <div :class="`color-mode-${colorMode.value}`">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
