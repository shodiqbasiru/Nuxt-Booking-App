<script lant="ts" setup>
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
  <div class="text-gray-950 dark:text-gray-50 flex items-center">
    <Icon name="material-symbols:clear-day-rounded" size="sm" />
    <ToggleSwitch v-model="isDark" />
    <Icon name="material-symbols:dark-mode" size="sm" />
  </div>
  <!-- <span
          class="cursor-pointer text-gray-950 dark:text-gray-50"
          @click="isDark = !isDark"
        >
          <Icon
            :name="`${
              isDark
                ? 'material-symbols:dark-mode'
                : 'material-symbols:clear-day-rounded'
            }`"
            size="sm"
          />
        </span> -->
</template>
