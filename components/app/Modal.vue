<script setup lang="ts">
import {ref} from 'vue';
import {onClickOutside} from '@vueuse/core';

defineProps({
  isShow: Boolean
});

const emit = defineEmits(['modal-close']);

const handleCloseModal = () => {
  emit('modal-close');
};

// const target = ref(null);
// onClickOutside(target, () => emit('modal-close'));
</script>

<template>
  <div
      v-show="isShow"
      class="modal fixed inset-0 z-50 bg-gray-900 bg-opacity-30 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title">
    <div class="bg-slate-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-[900px] w-full max-h-[90vh] overflow-y-auto">
      <header class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 id="modal-title" class="text-2xl font-bold text-center text-lime-500 dark:text-lime-600 uppercase">
          <slot name="title">Modal Title</slot>
        </h1>
        <span class="cursor-pointer text-gray-500 dark:text-gray-400">
          <Icon name="material-symbols:close-rounded" @click="handleCloseModal" class="text-2xl"/>
        </span>
      </header>
      <main class="mt-4">
        <slot name="body">Modal Content</slot>
      </main>
      <footer class="flex justify-end mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
        <slot name="footer">
          <AppButton
              label="Close"
              type="button"
              transform="uppercase"
              size="md"
              variant="danger"
              @click="handleCloseModal"/>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal {
  transition: opacity 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>