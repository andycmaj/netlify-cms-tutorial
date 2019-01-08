module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/guide`,
        name: 'guide',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/events`,
        name: 'events',
      },
    },
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     // You can find your read-only API token under the Settings > API tokens
    //     // section of your administrative area:
    //     apiToken: `e23e293e9858045a7be85c39650bcf`,
    //   },
    // },
  ],
};
