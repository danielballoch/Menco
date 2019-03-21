import React from "react"
import { Link, graphql } from "gatsby"


export default function Template({
    data,
}){
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.name}</h1>
          <h2>${frontmatter.price}</h2>
          <h2>{frontmatter.title}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        <a
             href='#' 
            className='snipcart-add-item buyBtn'
            data-item-price={frontmatter.price}
            data-item-name={frontmatter.name}
            data-item-weight={frontmatter.weight}
            data-item-url={"http://snipcart-gatsby.netlify.com" + frontmatter.path}>
            Buy
        </a>
        <Link to="/">Back</Link>

        </div>
      </div>
    )
}

export const productsQuery = graphql`
query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
        frontmatter {
            path
            name
            price
            weight
            templateKey
            title
            date(formatString: "MMMM DD, YYYY")
        }
    }
}
`