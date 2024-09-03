<script setup lang="ts">
import BcaLogo from '~/assets/icons/bca.png';
import BriLogo from '~/assets/icons/bri.png';
import BniLogo from '~/assets/icons/bni.png';
import ShopeePayLogo from '~/assets/icons/shopeepay.png';
import OvoLogo from '~/assets/icons/ovo.png';
import GoPayLogo from '~/assets/icons/gopay.png';

const paymentMethods = [
  { name: 'Bank BCA', src: BcaLogo },
  { name: 'Bank BRI', src: BriLogo },
  { name: 'Bank BNI', src: BniLogo },
  { name: 'ShopeePay', src: ShopeePayLogo },
  { name: 'OVO', src: OvoLogo },
  { name: 'GoPay', src: GoPayLogo },
];

const selectedPaymentMethod = ref<string | null>(null);

const selectPaymentMethod = (method: string) => {
  selectedPaymentMethod.value = method;
  emit('update:paymentMethod', method);
};
</script>

<template>
  <div class="payment-methods">
    <h2 class="text-xl font-bold mb-4">Choose Payment Method</h2>
    <div class="grid grid-cols-3 gap-4">
      <div
          v-for="method in paymentMethods"
          :key="method.name"
          @click="selectPaymentMethod(method.name)"
          :class="['payment-method', { 'selected': selectedPaymentMethod === method.name }]"
          class="cursor-pointer border rounded-lg flex flex-col items-center"
      >
        <img :src="method.src" :alt="method.name" class="aspect-auto h-16 w-16 mb-2 object-contain"/>
        <span class="mb-2">{{ method.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.payment-method.selected {
  @apply bg-lime-600 text-gray-50;
}
</style>