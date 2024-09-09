// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"], css: [
    '~/assets/css/fonts.css' // ścieżka do twojego pliku CSS z definicjami czcionek
  ],
})