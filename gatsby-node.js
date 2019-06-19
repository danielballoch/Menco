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

    resolve(
         graphql(`{
            products: allMarkdownRemark(
                filter: {fields: {collection: {eq: "products"}}}
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
                        }
                    }
                }
            }   
        }`).then(result => {
        if (result.errors){
            return reject(result.errors);
        }

        const products = result.data.products.edges;

        products.forEach(({node}) => {
            const path = node.frontmatter.path;

            createPage({
                path,
                component: productPostTemplate,
                contextpathSlug: path,
            });
        });
        


        const posts = result.data.posts.edges;

        posts.forEach(({node}) => {
            const path = node.frontmatter.path;

            createPage({
                path,
                component: blogPostTemplate,
                contextpathSlug: path,
            });
        });
        

        
    })
    );
});     
};

        
        
        


