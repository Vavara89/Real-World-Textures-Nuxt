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
    { src: '@/plugins/vClickOutside', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxt/typescript-build',
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
    }
  },
  env: {
    baseUrl: 'http://34.107.89.42/'
  },
  axios: {
    baseURL: 'http://34.107.89.42/api'
  },
  auth: {
    plugins: [
      '~/plugins/auth.js'
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
        client_id: '221960029050181',
        userinfo_endpoint: 'https://graph.facebook.com/v6.0/me?fields=name,email',
        scope: ['public_profile', 'email']
      },
      google: {
        client_id: '373123692545-gm0g4sohn7fa0i9c39cln90i0b41kpe3.apps.googleusercontent.com',
        secret: '9AU0QeNQxx_--TW0FXOe_Mim'
      }
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/'
      },
      expires: 1,
    }
  }
};

try{
  const localhost = require('./nuxt.localhost.config');
  production = Object.assign(production, localhost.congig);
}catch (e){
  console.log(e);
}

export default production;
