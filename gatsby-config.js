/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "web-warrior",
    description: "I teach Javascript, React. GraphQL and Gatsby",
    author: "Marea Norton"
  },
  
  plugins: [
       "gatsby-plugin-sass",
       "gatsby-transformer-remark",
        {
          resolve: "gatsby-source-filesystem",
          options: {
            name: "src",
            path: `${__dirname}/src/`,
          },
        },
      ],
    }
