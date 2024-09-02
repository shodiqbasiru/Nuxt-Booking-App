<script lang="ts" setup>

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: "md",
  },
  variant: {
    type: String,
    default: "primary",
  },
  transform: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "button",
  },
});

const { label, size, variant, transform } = props;

const sizeClasses: any = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
  xl: "px-10 py-5 text-xl rounded-2xl",
};

const variantClasses: any = {
  primary: `bg-lime-500 dark:bg-lime-600 hover:bg-lime-600 dark:hover:bg-lime-700 text-white`,
  primaryOutline: `bg-transparent border border-lime-500 dark:border-lime-600 hover:text-white hover:bg-lime-500 dark:hover:bg-lime-600 text-lime-500 dark:text-lime-600`,
  secondary: `bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 text-gray-950`,
  secondaryOutline: `bg-transparent border border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-800`,
  accent: `bg-amber-200 hover:bg-amber-300 text-black`,
  accentOutline: `bg-transparent border border-amber-200 hover:bg-amber-200 text-amber-200`,
  danger: `bg-red-500 hover:bg-red-600 text-gray-50`,
  dangerOutline: `bg-transparent border border-red-500 hover:bg-red-500 text-red-500`,
};

const textTransform: any = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

const typeClasses: any = {
  button: "button",
  submit: "submit",
  reset: "reset",
};

</script>

<template>
  <button
    :class="`${sizeClasses[size]} ${variantClasses[variant]} ${textTransform[transform]} font-semibold transition-colors`"
    :type="typeClasses[type]"
  >
    {{ label }}
  </button>  
</template>
