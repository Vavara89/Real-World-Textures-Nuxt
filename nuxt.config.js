
export default {
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
    loading: { color: '#fff' },
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
      '@nuxtjs/style-resources',
      '@nuxtjs/svg'
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
        extend(config, ctx) {
        }
    }
}
