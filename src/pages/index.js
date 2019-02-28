import React from "react"
import { Link, graphql } from "gatsby"

import productLink from "../components/productLink"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ENGINE_METHOD_DIGESTS } from "constants";

const IndexPage = ({
    data: {
        allMarkdownRemark: {edges},
    },
}) => {
    const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.name)
    .map(edge => <productLink key={edge.node.id} product={edge.node} />)

    return<div>{Posts}</div>



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
}

export default IndexPage

