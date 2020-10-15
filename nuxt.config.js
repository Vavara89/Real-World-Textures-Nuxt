let production =  {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Real World Textures',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1 width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4CBC81' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vClickOutside', ssr: false },
    { src: '~/plugins/notifications-ssr', mode: 'server'},
    { src: '~/plugins/notifications-client', mode: 'client' },
    { src: '~/plugins/v-mask', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    'cookie-universal-nuxt',
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_definitions.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['vue-notifications']
  },
  env: {
    baseUrl: 'https://rwt.bypixelfield.com/',
    contacts: {
      youtube_link:'http://youtube.com',
      facebook_link:'http://facebook.com',
      instagram_link:'http://instagram.com',
      email: 'info@rwt.ru',
    }
  },
  axios: {
    baseURL: 'https://rwt.bypixelfield.com/api'
  },
  auth: {
    plugins: [
      '~/plugins/auth.js',
    ],
    redirect: {
      login: '/login',
      callback: '/callback',
      home: '/profile',
      logout: false
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/auth', method: 'post', propertyName: 'access' },
          user: { url: '/users/profile', method: 'get', propertyName: false },
          logout: false
        }
      },
      facebook: {
        client_id: '1027291147700087',
        userinfo_endpoint: 'https://graph.facebook.com/v6.0/me?fields=name,email',
        scope: ['public_profile', 'email']
      },
      google: {
        client_id: '135799743259-rka8sila4i8f8qdquk6b4utlejiclgah.apps.googleusercontent.com',
        secret: 'b1ufbjb7LkqD_ea-ptH3qBcF'
      }
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/'
      },
      expires: 1,
    }
  },

};

// try{
//   const localhost = require('./nuxt.localhost.config');
//   production = Object.assign(production, localhost.congig);
// }catch (e){
//   console.log(e);
// }

export default production;
