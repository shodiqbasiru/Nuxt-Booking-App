<script lang="ts" setup>

</script>

<template>
  <div
    class="min-h-screen bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50 flex flex-col relative"
  >
    <LayoutHeaderDefault />

    <!-- main -->
    <main class="flex-1 relative">
      <slot />
    </main>

    <LayoutFooterDefault />
  </div>
</template>
