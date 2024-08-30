// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@primevue/nuxt-module",
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "nuxt-swiper"
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  app: {
    head: {
      title: "HanaBass | Booking App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  primevue: {
    options :{
      theme: {
        preset: Lara
      },
      ripple: true,
    }
  }
});