const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Nav Links`,
    menuLinks: [
      {
        name: `Exercises`,
        link: `exercises`,
      },
      {
        name: `Stats`,
        link: `stats`,
      },
      {
        name: `Trends`,
        link: `trends`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
