const queries = require('./src/utils/algolia')
require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        // defaultLayouts: {
        //   posts: require.resolve('./src/components/default-post-layout.js'),
        //   default: require.resolve('./src/components/default-page-layout.js'),
        // },
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `programs`,
        path: `${__dirname}/../programs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lessons`,
        path: `${__dirname}/../lessons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assignments`,
        path: `${__dirname}/../assignments`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `warm-ups`,
    //     path: `${__dirname}/../warm-ups`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@handbook': `${__dirname}/src/components/content`,
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['@mdx-deck'],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylelint`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
  ],
}
