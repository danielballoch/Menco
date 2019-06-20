import React from "react"
import { Link, graphql } from "gatsby"
import ProductLink from "../components/product-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const products = ({
    data: {
        allMarkdownRemark: { edges },
      },
    }) => {
      const Posts = edges
        .filter(edge => !!edge.node.frontmatter.price) // You can filter your posts based on some criteria
        .map(edge => <ProductLink key={edge.node.id} post={edge.node} />)
  return <div>
        <Layout>
        <SEO title="Page two" />
        <h1>products page</h1>
        {Posts}
    </Layout>
  </div>
  
  }


export default products

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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