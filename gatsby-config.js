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
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
