<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <!--  <div class="text-gray-950 dark:text-gray-50 flex items-center">-->
  <!--    <Icon name="material-symbols:clear-day-rounded" size="sm" />-->
  <!--    <ToggleSwitch v-model="isDark" />-->
  <!--    <Icon name="material-symbols:dark-mode" size="sm" />-->
  <!--  </div>-->
  <span
      class="cursor-pointer text-gray-950 dark:text-lime-500 flex items-center bg-gray-200 dark:bg-gray-800 p-4 rounded-full fixed bottom-4 right-4 z-50 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-2xl"
      @click="isDark = !isDark"
  >
          <Icon
              :name="`${
              isDark
                ? 'material-symbols:clear-day-rounded'
                : 'material-symbols:dark-mode'
            }`"
              size="sm"
          />
        </span>
</template>
