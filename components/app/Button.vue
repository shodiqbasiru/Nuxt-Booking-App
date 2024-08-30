<script lang="ts" setup>

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: "md", // default size
  },
  variant: {
    type: String,
    default: "primary", // default variant
  },
  transform: {
    type: String,
    default: null,
  },
  to: {
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
  primary: `bg-lime-500 dark:bg-lime-600 hover:bg-lime-500 dark:hover:bg-lime-700 text-gray-900 dark:text-gray-50`,
  secondary: `bg-gray-50 hover:bg-gray-500 text-black`,
  secondaryOutline: `bg-transparent border border-gray-50 hover:bg-gray-50 text-gray-50 hover:text-gray-950`,
  accent: `bg-amber-200 hover:bg-amber-300 text-black`,
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

const navigate = (path: string) => {
  return navigateTo({
    path: path,
  });
};
</script>

<template>
  <button
    :class="`${sizeClasses[size]} ${variantClasses[variant]} ${textTransform[transform]} font-semibold transition-colors`"
    @click="navigate(to)"
    :type="typeClasses[type]"
  >
    {{ label }}
  </button>  
</template>
