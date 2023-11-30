// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content','nuxt-quasar-ui'],
  quasar: { /* */ },
  components: {
    global: true,
    dirs: ['~/components']
        },
})
