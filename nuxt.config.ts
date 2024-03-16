// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Vue.js Italia",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui"],
  typescript: { typeCheck: true },
});
