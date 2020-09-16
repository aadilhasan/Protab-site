module.exports = {
  siteMetadata: {
    title: `The Best Chrome Extension for Productivity`,
    description: `Boost your productivity with a highly customizable new tab. Manage your tabs and have acees to your notes, todos, read laters collections collection in your new tab with Protab chrome extension`,
    author: 'Aadil Hasan'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
        icon: `src/images/site-icon.png`
      },
      pathPrefix: '/protab'
    }
  ]
};
