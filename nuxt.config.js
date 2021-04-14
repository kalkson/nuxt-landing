export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bitcoin-landing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/svg',
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-fonts',
      {
        /* module options */
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  css: ['~/style/_global.css'],
  styleResources: {
    scss: ['~/style/_variables.scss'],
  },
  googleFonts: {
    families: {
      Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preconnect: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
