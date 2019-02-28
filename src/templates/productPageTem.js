import React from "react"
import { graphql } from "gatsby"

export default function Template({
    data,
}){
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.name}</h1>
          <h2>{frontmatter.price}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    )
}

export const productsQuery = graphql`
query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
        frontmatter {
            name
            price
            weight
        }
    }
}
`