import React from "react"
import { Link, graphql } from "gatsby"
import image from "../components/image"
import Layout from "../components/layout"



export default function Template({
    data,
}){
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
        <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.name}</h1>
          <h2>${frontmatter.price}</h2>
          <img src={frontmatter.featuredImage} alt={frontmatter.name + " worn by one of Mencos models"}/>
          <image src={frontmatter.featuredImage}></image>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        <button
             href='#' 
            className='snipcart-add-item buyBtn'
            data-item-price={frontmatter.price}
            data-item-name={frontmatter.name}
            data-item-id={frontmatter.id}
            data-item-weight={frontmatter.weight}
            data-item-url={"http://snipcart-gatsby.netlify.com" + frontmatter.path}>
            Buy

        </button>

        
        <div class="snipcart-summary">
            Number of items: <span class="snipcart-total-items"></span>
            Total price: <span class="snipcart-total-price"></span>
        </div>
        <Link to="/">Back</Link>

        </div>
      </div>
      </Layout>
    )
}

export const productsQuery = graphql`
query productPost($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
        frontmatter {
            path
            name
            id
            price
            weight
            templateKey
            title
            date(formatString: "MMMM DD, YYYY")
            
        }
    }
}
`





// query {
//     allMarkdownRemark(filter: {fields: {collection: {eq: "products"}}}){
//         edges {
//             node {
//                 frontmatter {
//                     path
//                     name
//                     id
//                     price
//                     weight
//                     templateKey
//                     title
//                     date(formatString: "MMMM DD, YYYY")
//                 }
//             }
//         }
//     }
// }
// `