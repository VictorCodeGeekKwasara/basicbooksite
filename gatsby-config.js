module.exports = {
  siteMetadata: {
    title: `BasicBookSite`,
    description: `A basic book site made using gatsbyjs and  material ui `,
    author: `Victor Kwasara`,
    siteUrl: `https://basicbooksitemain.gatsbyjs.io/`,
  },
  plugins: [   
     "gatsby-plugin-mdx",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/books`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
