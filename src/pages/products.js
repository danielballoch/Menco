import React from "react"
import { Link, graphql } from "gatsby"
import ProductListing from "../components/product-link"

import Layout from "../components/layout"
import SEO from "../components/seo"



class Index extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Layout>
          <div >
            <SEO />
            <h1>Shop All</h1>
            <ProductListing postEdges={postEdges} />
          </div>
        </Layout>
      );
    }
  }
  
  export default Index;


// const products = ({
//     data: {
//         allMarkdownRemark: { edges },
//       },
//     }) => {
//       const Posts = edges
//         .filter(edge => !!edge.node.frontmatter.price) // You can filter your posts based on some criteria
//         .map(edge => <ProductLink key={edge.node.id} post={edge.node} />)
//   return <div>
//         <Layout>
//         <SEO title="Page two" />
//         <h1>products page</h1>
//         {Posts}
//     </Layout>
//   </div>
  
//   }


// export default products

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: {
             order: DESC, fields: [frontmatter___date] }
             filter: {fields: {collection: {eq: "products"}}}
             ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                path
                name
                price
                weight
                templateKey
                tags
                image {
                    childImageSharp {
                        fluid(maxWidth: 980) {
                            ...GatsbyImageSharpFluid
                            src
                        }
                    }
                }
              }
    
            }
          }
        }
      }
    `