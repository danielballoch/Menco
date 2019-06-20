import React from "react"
import { Link, graphql } from "gatsby"
import PostLink from "../components/post-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const products = ({
    data: {
        allMarkdownRemark: { edges },
      },
    }) => {
      const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <div>
        <Layout>
        <SEO title="Page two" />
        <h1>Hi from the products page</h1>
        {Posts}
    </Layout>
  </div>
  
  }


export default products

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {fields: {collection: {eq: "posts"}}}
            limit: 6
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 75)
                frontmatter {
                  title
                  path
                  tags
                  date(formatString: "DD MMMM, YYYY")
                  image {
                    childImageSharp {
                      fluid(
                        maxWidth: 1000
                        quality: 90
                        traceSVG: { color: "#2B2B2F" }
                      ) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;