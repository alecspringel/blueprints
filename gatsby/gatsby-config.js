module.exports = {
  siteMetadata: {
    title: `SEO Title`,
    description: `SEO Description`,
    url: "https://www.blueprint.com",
    image: "/image-within-the-static-folder.jpg",
    author: `@alecspringel`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "alecspringel.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site Name`,
        short_name: `Short Site Name`,
        start_url: `/`,
        background_color: `#343434`,
        theme_color: `#343434`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
};
