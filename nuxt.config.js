// path
const baseDir = process.env.BASE_DIR || '/'

// meta
const lang = 'en'
const siteName = 'Takumi Isobe'
const siteDesc = 'takumiisobe.com is a portfolio site and column page for photography'
const siteKeywords = 'photography, japanese, portfolio'


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TakumiIsobe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
    ],
    link: [
      //Favicon generator for multiple usage => https://favicon-generator.mintsu-dev.com/
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/ktr1vds.css' },

      // pwa splash screens
      // Doc: https://appsco.pe/developer/splash-screens
      { href: 'iphone5_splash.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'iphone6_splash.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'iphoneplus_splash.png', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: 'iphonex_splash.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: 'iphonexr_splash.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'iphonexsmax_splash.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: 'ipad_splash.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'ipadpro1_splash.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'ipadpro3_splash.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'ipadpro2_splash.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  
  buildModules: [
    'nuxt-gsap-module'
  ],

  pageTransition: {
    name: 'page',
    appear: true,
  },

  gsap: {
    extraPlugins: {
      cssRule: true,
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      rehypePlugins: ["~/plugins/rehype-content-image.js"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


  pwa: {
    icon: {},
    meta: {
      // mobileAppIOSオプションを有効にする前に、以下記事を一読すること。
      // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
      // mobileAppIOS: true
    },
    manifest: {
      lang,
      name: "Takumi Isobe",
      short_name: "TakumiIsobe",
      description: siteDesc,
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://polyfill.io/.*',
          handler: 'cacheFirst'
        },
        {
          urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
          handler: 'cacheFirst'
        },
        {
          urlPattern: 'https://cdn.jsdelivr.net/.*',
          handler: 'cacheFirst'
        },
        {
          urlPattern: baseDir + '.*',
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'my-cache',
            cacheExpiration: {
              maxAgeSeconds: 24 * 60 * 60 * 30
            }
          }
        }
      ]
    }
  }
}
