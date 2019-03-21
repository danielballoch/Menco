import React from "react"
import { Link, graphql } from "gatsby"

import productLink from "../components/productLink"
import PostLink from "../components/post-link"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ENGINE_METHOD_DIGESTS } from "constants";



const IndexPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.price) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return <div>{Posts}</div>
  }
  
  export default IndexPage

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
          }
        }
      }
    }
  }
`


















// const IndexPage = ({
//     data: {
//         allMarkdownRemark: { edges },
//     },
// }) => {
//     const Posts = edges
//     .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
//     .map(edge => <productLink key={edge.node.id} product={edge.node} />)

//     return <div>{Posts}</div>

// }

// export default IndexPage



//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>


//   </Layout>