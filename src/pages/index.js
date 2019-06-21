import React from "react"
import { Link, graphql } from "gatsby"

import ProductLink from "../components/product-link"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ENGINE_METHOD_DIGESTS } from "constants";
import heroimage from "../images/whiteb.jpg";
import "../pages/index.css";


const IndexPage =  ({
    
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.price) // You can filter your posts based on some criteria
      .map(edge => <ProductLink key={edge.node.id} post={edge.node} />)

    return <div>
        <img className="hero-image" src={heroimage} />
        <div className="hero-text">
        <h1>Quality Essentials</h1>
        
        <button className="shop-now">shop now</button>
        </div>

        <h1>Featured Products</h1>
        
    <Layout>
        <div className="post_wrapper_div">
            {Posts}
        </div>
            <button className="shop-all" href="#">Shop All</button>
            <div className="blog-banner">
                <div className="banner-text">
                    <h2>Want to look smart with ease?</h2>
                    <h3>View our recent posts to get on track</h3>
                </div>
            </div>
    </Layout>
    
    
    </div> 
  }
  
  export default IndexPage

  export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {fields: {collection: {eq: "products"}}}
            sort: { order: DESC, fields: [frontmatter___price] }
            limit: 4

            ) {
          edges {
            node {
              id
              frontmatter {
                path
                name
                price
                weight
                templateKey
                image {
                    childImageSharp {
                        fluid(maxWidth: 980) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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











