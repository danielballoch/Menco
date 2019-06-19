module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/static/img`,
          name: 'uploads',
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/src/images`,
          name: 'images',
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/content/products`,
            name: 'products',
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/content/blog`,
            name: 'posts',
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    { resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                {
                  resolve: 'gatsby-remark-relative-images',
                  options: {
                    name: 'uploads',
                  },
                },
                {
                  resolve: 'gatsby-remark-images',
                  options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 400,
                  },
                },
                {
                  resolve: 'gatsby-remark-copy-linked-files',
                  options: {
                    destinationDir: 'static',
                  }
                },
              ],
        }

    },
    { resolve: 'gatsby-plugin-netlify-cms',
    options: {

        modulePath: `${__dirname}/src/cms/cms`,
    }
},'gatsby-plugin-netlify',
{
    resolve: 'gatsby-plugin-snipcart',
    options: {
      apiKey: 'MmVjYmVjYzMtZTA5MS00NzJjLTlmZGMtMmIxYjVlZjFjMjM0NjM2ODUzNjg2NTY4NTk5NTIy',
      styles: 'http://localhost:3006/themes/base/snipcart.css',
    }
  },

  ],
}
