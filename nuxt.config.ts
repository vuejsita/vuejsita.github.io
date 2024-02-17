// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { typeCheck: true },

  // Modules
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxt/ui"],
  i18n: {
    vueI18n: "./lang/i18n.config.ts",
  },
});
