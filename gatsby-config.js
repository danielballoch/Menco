module.exports = {
  siteMetadata: {
    title: `Menco`,
    description: `Menco Apparel - making smart mens fashion a breeze. We sell quality tees, shirts, jeans, jackets, chinos, pants and give insider tips on mens fashion through our blog.`,
    author: `@danielballoch`,
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
        resolve: `gatsby-source-instagram`,
        options: {
          username: `mencoapparel`,
          access_token: "18116458011.1677ed0.69e22be9a2224d4b90f0d8cd9bcfb476",
        //   access_token: "EAAHSUvICu4ABAJ5MLidSArZBWvLi7rM9DcRvUZCQ0dhR3ZCaArT6mRRPjmn2mXEKu30HZA3LxO1eHB1yE4qeATAFVkUrnO8EyhlSqhaohYUW7uh8tOQH422RLEVRhqJUyZB08S1KyxraO9kbcKhEwxqpWSYf8tLzC9WfkiZAJvuwZDZD",
        //   instagram_id: "mencoapparel"

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
    `gatsby-v2-plugin-page-transitions`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Menco Apparel`,
        short_name: `Menco`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/img/MencoFavicon3.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
        resolve: 'gatsby-plugin-typography',
        options: {
            pathToConfigModule: `config/typography`,
        }
    },
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
                    maxWidth: 1280,
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
        modulePath: `${__dirname}/static/admin/config.yml`,
        // modulePath: `${__dirname}/src/cms/cms`,
    }   
},'gatsby-plugin-netlify',
{
    resolve: 'gatsby-plugin-snipcart',
    options: {
      apiKey: 'MmVjYmVjYzMtZTA5MS00NzJjLTlmZGMtMmIxYjVlZjFjMjM0NjM2ODUzNjg2NTY4NTk5NTIy',
      styles: `${__dirname}/config/base/snipcart.min.css`,
    //   styles: 'http://localhost:3006/themes/base/snipcart.css',
    //   styles: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        
    }
  },
  

  ],
}
