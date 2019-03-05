const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/bulma@0.6.2/css/bulma.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff',
  },

  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          browsers: [
            'last 2 versions',
            'safari 8',
            'ie 11',
            'opera 12.1',
            'ios 6',
            'android 4'
          ]
        },
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    },
  },

  /*
  ** Server settings
  */
  server: {
    port: 3000, // default: 3000
    host: 'spa.mezhevykh.ekreative.com', // default: localhost,
    timing: false
  },

  /*
  ** Manifest
  */
  manifest: {
    name: 'My Awesome App',
    lang: 'en',
    'background_color': '#fff',
  },
}
