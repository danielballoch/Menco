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
                            color
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
        //create product tags array
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

          const productsByColor = {};
        //create product colors array
        products.forEach(({ node }) => {
            if (node.frontmatter.color) {
              node.frontmatter.color.forEach(color => {
                if (!productsByColor[color]) {
                  productsByColor[color] = [];
                }
  
                productsByColor[color].push(node);
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
        const productColors = Object.keys(productsByColor);
        const productsList = productsByTag[productTags];
        //create different product pages based on sortOption's
        const orderOption = [`ASC`,`DESC`];
        const sortOptions = [`frontmatter___price`,`frontmatter___date`];
        //creating price options array for dropdown refine option
        const PriceOptions = {"all": {"lower": 0, "upper": 1000},"0-50": {"lower": 0, "upper": 50}, "50-100": {"lower": 50, "upper": 100}, "100-200": {"lower": 100, "upper": 200}};
        // looping though price options to create vars for nested values, using such to create all possible pages.
        // *checking needed pages is not possible at this stage 
        for (let [key, value] of Object.entries(PriceOptions)) {
            var PriceRange = key;
            var pricerange = []
            for (let [k,v] of Object.entries(value)){
              pricerange[k] = v;  
            }
            productColors.forEach(color => {
                sortOptions.forEach(option => {
                    orderOption.forEach(order => {
                        createPage({
                            
                            path: `/products/${option}/${order}/${color}/${PriceRange}`,
                            component: productTagPage,
                            context: {
                            tags: productTags.sort(),
                            colors: productColors.sort(),
                            order: order,
                            sortOption: option,
                            sort: {'fields': [option], 'order': [order]},
                            colorOption: color,
                            priceLower: pricerange.lower,
                            priceUpper: pricerange.upper,
                            priceRange: PriceRange,
                            productsList,
                            },
                        });
                    })

                })
            })
        }
        
        
        

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

        productColors.forEach(color => {
            sortOptions.forEach(option => {
                orderOption.forEach(order => {
                    productTags.forEach(tagName => {
                        for (let [key, value] of Object.entries(PriceOptions)) {
                            var PriceRange = key;
                            var pricerange = []
                            for (let [k,v] of Object.entries(value)){
                              pricerange[k] = v;  
                            }
                            
                                const products = productsByTag[tagName];
                    
                                createPage({
                                path: `/products/${tagName}/${option}/${order}/${color}/${PriceRange}`,
                                component: productTagPage,
                                context: {
                                    products,
                                    tagName,
                                    colors: productColors.sort(),
                                    colorOption: color,
                                    order: order,
                                    sortOption: option,
                                    sort: {'fields': [option], 'order': [order]},
                                    priceLower: pricerange.lower,
                                    priceUpper: pricerange.upper,
                                    priceRange: PriceRange,
                                    
                                },
                                });
                            
                        }
                    });
                })
            })
        });


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

        
        
        


