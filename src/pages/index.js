import React from "react"
import { graphql, Link} from "gatsby"
import Img from "gatsby-image"
import ProductListing from "../components/product-link"
import PostListing from "../components/post-link-wide"
import Layout from "../components/layout"
import SEO from "../components/seo"
import heroimage from "../images/cover-image2.jpg";
import "../pages/index.css";
import twitter from "../../static/icons/twitter.svg"
import facebook from "../../static/icons/facebook.svg"
import instagram from "../../static/icons/instagram.svg"




class Index extends React.Component {
    render() {
      const productEdges = this.props.data.product.edges;
      const postEdges = this.props.data.post.edges;
      const instagramEdges = this.props.data.instagram.edges;
    
      return (
        <Layout navtheme="light">
            <SEO title="Home"/>
        
            <div className="hero-wrapper">
                <img className="hero-image" id="hero-image" src={heroimage} alt="Menco model Andrew fitted with navy jacket, grey pants, shirt and tie looking smart"/>
                {/* <Image fluid={data.hero.childImageSharp.fluid} className="hero-image"  /> */}
                <div className="hero-text">
                    <h3>M</h3>
                    <h1>Quality Menswear</h1>
                    <h2>making smart attire effortless</h2>
                    {/* <button className="shop-now">shop now</button> */}
                </div>
            </div>
            <h1>Featured Products</h1>
        
            <div className="post_wrapper_div">
                <ProductListing postEdges={productEdges} className="post_div" wrap={"wrapper-center"}/>
                </div>
                {/* <p>Menco is about making looking smart easy. We understand how busy our people are and hate seeing them look anything
                    less than their best, just because their wardrobe is a mess.
                    As such, we provide products you can't go wrong with, timeless classics, 
                    versitile colors and quality materials.
                </p> */}
            <button className="shop-all"><Link to="/products/frontmatter___date/ASC/all/all">Shop All</Link></button>
            <div className="blog-banner">
                <div className="banner-text">
                    <h2>Want to look smart with ease?</h2>
                    <h3><Link to="/blog">View our recent <b>posts</b> to get on track</Link></h3>
                </div>
            </div>
            <div className="blog-posts">
                <PostListing postEdges={postEdges} />   
            </div>


            <div className="social-section" id="social-subsection">
                <div className="social-top">
                    <div className="social-side-text">
                        <h1>@Menco #SmartMan</h1>
                    </div>

                    <div className="social-images">{instagramEdges.map(edge => (
                        <a href={"https://www.instagram.com/p/" + edge.node.id}>
                        <Img fluid={edge.node.localFile.childImageSharp.fluid}  alt="featured instagram customer or model #smartman" />
                        </a>
                        
                        )
                    )}</div>
                </div>

                <div className="social-subsection" >
                    <div className="social-icons"><a href="https://twitter.com/home"><img  src={twitter} alt="white bird icon twitter"/></a><a href="https://www.facebook.com/"><img  src={facebook} alt="white f icon facebook"/></a><a href="https://www.instagram.com/mencoapparel/"><img  src={instagram} alt="white camera icon instagram"/></a></div>
                    <div className="social-sub">We love to share fashion/business tips and have a laugh on social media.
                    Post with #SmartMan for a chance to be featured alongside other inspiring men on @Menco.
                    </div>
                </div>
            </div>
            
        </Layout>
      );
    }
  }
  
  export default Index;


  export const pageQuery = graphql`
    query {
        hero: file(relativePath: { eq: "david-goggins.jpg"}){
            childImageSharp {
                fluid(maxWidth: 980) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    src
                }
            }
        }
        product: allMarkdownRemark(
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
        post: allMarkdownRemark(
            filter: {fields: {collection: {eq: "posts"}}}
            limit: 3
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 310)
                timeToRead
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
          instagram: allInstaNode{
              edges {
                  node {
                        id
                        localFile{
                          childImageSharp {
                              fluid(maxHeight: 400, maxWidth: 400 quality: 90){
                                  ...GatsbyImageSharpFluid_withWebp
                              }
                          }
                      }
                  }
              }
          }
      }
    `





