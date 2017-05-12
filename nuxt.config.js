module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: '/vendors/sweetalert/sweetalert.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' },
      { rel: 'stylesheet', href: '/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/js/plugins/owl-carousel/owl.carousel.css'},
      { rel: 'stylesheet', href: '/js/plugins/owl-carousel/owl.theme.css' },
      { rel: 'stylesheet', href: '/js/plugins/magnific-popup/magnific-popup.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'apple-touch-icon-precomosed', sizes: '144x144', href: '/images/fav-144.png'},
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/images/fav-72.png'},
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/images/fav-57.png'},
      { rel: 'apple-touch-icon-precomposed', href: '/images/fav-57.png' },
      { rel: 'shortcut icon', href: '/images/fav.png' }
    ],
    script: [
      { src: 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js' },
      { src: 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js' },
      { src: '/vendors/sweetalert/sweetalert.min.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
  }
}
