/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

const _ = require("lodash")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
  
    if (_.get(node, "internal.type") === `MarkdownRemark`) {
      // Get the parent node
      const parent = getNode(_.get(node, "parent"));
  
      // Create a field on this node for the "collection" of the parent
      // NOTE: This is necessary so we can filter `allMarkdownRemark` by
      // `collection` otherwise there is no way to filter for only markdown
      // documents of type `post`.
      createNodeField({
        node,
        name: "collection",
        value: _.get(parent, "sourceInstanceName")
      });
    }
  };




exports.createPages = ({ actions, graphql }) => {
    const {createPage} = actions;

 return new Promise((resolve, reject) => {
    const productPostTemplate = path.resolve(`src/templates/productPageTem.js`);
    const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
    const postTagPage = path.resolve('src/pages/blogTags.jsx');
    const productTagPage = path.resolve('src/pages/productTags.jsx');
    const postTag = path.resolve('src/templates/postTag.jsx');
    const productTag = path.resolve('src/templates/productTag.jsx');
    // const replacePath = path => (path === `/` ? path : path.replace(/\/$/,``))

    resolve(
         graphql(`{
            products: allMarkdownRemark(
                filter: {fields: {collection: {eq: "products"}}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                ){
                edges {
                    node {
                        fileAbsolutePath
                        html
                        id
                        frontmatter {
                            path
                            date
                            name
                            tags
                        }
                    }
                }
            }   
            posts: allMarkdownRemark(
                filter: {fields: {collection: {eq: "posts"}}}
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
                ){
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            path
                            date
                            title
                            tags
                        }
                    }
                }
            }   
        }`).then(result => {
        if (result.errors){
            return reject(result.errors);
        }
// 


        // const oldPage = Object.assign({}, page)
        // // Remove trailing slash unless page is /
        // page.path = replacePath(page.path)
        // if (page.path !== oldPage.path) {
        //     // Replace new page with old page
        //     deletePage(oldPage)
        //     createPage({
        //         ...page,
        //         context: {
        //             ...page.context,
        //             catagorie: `shirts`,
        //         }
        //     })
        // }









// 
        //shorten links
        const products = result.data.products.edges;
        const posts = result.data.posts.edges;
        //tag

        const postsByTag = {};
        // create post tags page
        posts.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }

              postsByTag[tag].push(node);
            });
          }
        });
        const productsByTag = {};
        //create product tags page
        products.forEach(({ node }) => {
            if (node.frontmatter.tags) {
              node.frontmatter.tags.forEach(tag => {
                if (!productsByTag[tag]) {
                  productsByTag[tag] = [];
                }
  
                productsByTag[tag].push(node);
              });
            }
          });


        const postTags = Object.keys(postsByTag);

        createPage({
          path: '/blog-tags',
          component: postTagPage,
          context: {
            tags: postTags.sort(),
          },
        });

        const productTags = Object.keys(productsByTag);
        const productsList = productsByTag[productTags];
        createPage({
            
          path: '/product-catagories',
          component: productTagPage,
          context: {
            tags: productTags.sort(),
            productsList,
          },
        });

        //create tags
        postTags.forEach(tagName => {
          const posts = postsByTag[tagName];

          createPage({
            path: `/blog-tags/${tagName}`,
            component: postTag,
            context: {
              posts,
              tagName,
            },
          });
        });

         //create tags
         productTags.forEach(tagName => {
            const products = productsByTag[tagName];
  
            createPage({
              path: `/product-catagories/${tagName}`,
              component: productTag,
              context: {
                products,
                tagName,
              },
            });
          });







        //tag
        
        
        //create product pages
        products.forEach(({node}) => {
            // const path = node.frontmatter.path;

            createPage({
                path: node.frontmatter.path,
                component: productPostTemplate,
                context: {
                    contextpathSlug: node.frontmatter.path,
                    // Pass the current directory of the project as regex in context so that the GraphQL query can filter by it
                    absolutePathRegex: `/^${path.dirname(node.fileAbsolutePath)}/`,
                }
                
            });
        });
    

        //create post pages
        posts.forEach(({node}, index) => {
            const path = node.frontmatter.path;
            const prev = index === 0 ? null : posts[index -1].node;
            const next = index === posts.length - 1 ? null : posts[index + 1].node;
            createPage({
                path,
                component: blogPostTemplate,
                context: {
                    pathSlug: path,
                    prev,
                    next,
                }
            });
        });
        

        
    })
    );
});     
};

        
        
        


