// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: {enabled: true},
    modules: [
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
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
            ],
        },
    },
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.scss', { injectPosition: "first" }],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: false,
    }
});