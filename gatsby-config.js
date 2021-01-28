const config = require("./config")
const slashes = require("remove-trailing-slash")
const wpUrl = slashes(config.wordPressUrl)
const siteUrl = slashes(config.siteUrl)

module.exports = {
  siteMetadata: {
    title: `Daniel G. Amen MD - Know Your Dragons Quiz
    `,
    description: ` I have created this quick quiz where you just answer a few questions, and you can identify the Dragons that are impacting your life the most`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "531032957235317",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-3PRSLZMMRK",
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
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${wpUrl}/graphql`,
        verbose: true,
        excludeFields: [`blocksJSON`, `saveContent`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
