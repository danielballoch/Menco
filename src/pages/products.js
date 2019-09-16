import React from "react"
import {graphql } from "gatsby"
import ProductListing from "../components/product-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./products.css"



class Index extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Layout>
          <div className="wrapper">
            <SEO />
            <div className="sort-bar">Shop/ *items found* <button>sort by: popularity</button></div>
            <div className="content">
                
                <div className="filter-bar">
                <h2>Clothing:</h2>
                <div className="catalog-menu">
                    
                    <p>Catagory</p>
                    <a>T-Shirts & Singlets</a> <br/>
                    <a>Shirts & Polos</a> <br/>
                    <a>Jumpers & Cardigans</a><br/>
                    <a>Pants</a><br/>
                    <a>Jeans</a><br/>
                    <a>Underwear & Socks</a><br/>
                    <a>Shorts</a><br/>
                    <a>Suits & Blazers</a><br/>
                    <p>Refine</p><br/>

                </div>
                </div>
                <ProductListing postEdges={postEdges} />
            </div>
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
    query  {
        allMarkdownRemark(sort: {
             order: DESC, fields: [frontmatter___date] }
             filter: {fields: {collection: {eq: "products"}},frontmatter: {tags: {eq: "shirt"}}}
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