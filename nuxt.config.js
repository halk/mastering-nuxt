export default {
  components: true,
  head: {
    titleTemplate: 'Mastering Nuxt: %s',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ['my-style']
    },
    meta: [{
      charset: 'utf-8'
    }]
  },
  router: {
    prefetchLinks: false
  },
  plugins: [
    '~/plugins/maps.client'
  ],
  publicRuntimeConfig: {
    googleApiKey: process.env.GOOGLE_API_KEY
  }
};
