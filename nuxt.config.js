export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Dennis Fink | Frontend Entwickler',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Als ausgebildeter Mediengestalter und autodidaktischer Programmierer entwickle ich moderne Websites und Apps.' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: "static/css/style.css" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/google-fonts'
    ],
    styleResources: {
        sass: ['~/assets/sass/index.sass']
    },
    googleFonts: {
        families: {
            Poppins: [400, 700]
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["gsap"]
    }
}