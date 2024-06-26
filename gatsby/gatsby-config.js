module.exports = {
  siteMetadata: {
    // Todo: update metadata
    title: 'Sungrown Farms',
    description: 'Land leases and licensing for cannabis businesses in Washington state',
    url: 'http://sungrownfarms.com-dev.s3-website-us-west-2.amazonaws.com',
    image: '/meta-img.jpg',
    author: '@alecspringel',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      // Todo: Update SEO + manifest info
      options: {
        name: 'Sungrown Farms',
        short_name: 'Sungrown Farms',
        description: 'Land leases and licensing for cannabis businesses in Washington state',
        start_url: '/',
        background_color: '#4C4C4C',
        theme_color: '#4C4C4C',
        display: 'browser',
        icon: 'src/images/manifest/512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        // Todo: Update bucket name
        bucketName: process.env.DEPLOY_ENV === 'prod' ? 'sungrownfarms.net' : 'sungrownfarms.com-dev',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-< Todo: enter ID here >', // Google Analytics
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT- Todo: enter ID here',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
