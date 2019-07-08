import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from "../layouts/Container"
import slideshow from "../components/slideshow"
import PropTypes from 'prop-types'

import styled from '@emotion/styled';


const ProductImage = styled(Img)`
  width: 40%;
  max-width: 90%;
`;


export default function Template({
    data
}){
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const { images } = data
    return (
        <Layout>
            <Container type="big">
        <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.name} - ${frontmatter.price}</h1>
          
        
          
          {images.nodes.map(image => (
              <Img
                alt={image.name}
                key={image.childImageSharp.fluid.src}
                fluid={image.childImageSharp.fluid}
                style={{ margin: '3rem 0' }}
              />
            ))}

            

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
      </Container>
      </Layout>
    )
}


Template.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.object.isRequired,
    }).isRequired,
}


export const productsQuery = graphql`
query productPost($path: String!, $absolutePathRegex:String!) {
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
    images: allFile(
        filter: {
          absolutePath: { regex: $absolutePathRegex }
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        }
      ) {
        nodes {
            name
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
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
// {/* <img src={frontmatter.featuredImage} alt={frontmatter.name + " worn by one of Mencos models"}/> */}