module.exports = {
  siteMetadata: {
    title: `Nav Links`,
    menuLinks:[
      {
        name: `Exercises`,
        link: `/src/pages/exercises`
      },
      {
        name: `Stats`,
        link: `/src/pages/stats`
      },
      {
        name: `Trends`,
        link: `/src/pages/trends`
      }
      ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
  ],
}
