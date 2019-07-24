import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from "../layouts/Container"
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'
import "react-image-gallery/styles/css/image-gallery.css";
import "./productPageTem.css"
import styled from '@emotion/styled';
import heart from "../Icons/heart.svg";


export default class Template extends React.Component {
    state = {
        selected: true 
    };
    
    sizeToggleClickHandler = () => {
     this.setState((prevState)=> {
         return{selected: !prevState.selected};
     });
    };
    someFunct(name) {
        this.setState({ active: name })
    }
    render(){
        const { data } = this.props;
        const { markdownRemark } = data
        const { frontmatter, html } = markdownRemark
        const { images } = data
        console.log(this.state)
        console.log(frontmatter.sizes)

       
       
    
        // create array of images from querys - does using src still enable blur up??
          var productImages = images.nodes.map(image => (
           { 
               original: image.childImageSharp.fluid.src,
               thumbnail: image.childImageSharp.fluid.src,
            }
    
          ))

          var sizeButtons = frontmatter.sizes.map(size => (
            { 
                size,
             }
     
           ))
        

        return (
            <>
            <Layout>
            <Container type="big">


            <div className="container">
                {/* pushing array into ImageGallery component */}
                <ImageGallery items={productImages} showPlayButton={false} showFullscreenButton={false} showNav={false}/>
        
        <div className="product">
          <h2>{frontmatter.name} - ${frontmatter.price}</h2>
         
        <div className="detail-section">
            <div className="section">
                {frontmatter.details.map(detail => (
                    <li>{detail}</li>
                ))}
            </div>
            <div className="section" id="myDiv">
                
                <h3>Size:</h3>
                {/* someFunct(name) {
                    this.setState({ active: name })
                }   */}
                
                {frontmatter.sizes.map(size => (
                    <button 
                    className={this.state.active === size ? 'active' : ''}
                    value={size}
                    onClick={() => this.someFunct(size)}
                    key={ size }

                    
                    >{size}</button>
                ))}

                
              
            
               







                

                {/* {frontmatter.sizes.map(size => (
                    <label className="sizeBtn button">
                        {size}
                    <input id="radio" type="radio" className="radio" name="size-radio"/>
                    </label>
                ))} */}


            </div>

            
        </div>
         

         <button
             href='#' 
            className='snipcart-add-item'
            data-item-price={frontmatter.price}
            data-item-name={frontmatter.name}
            data-item-id={frontmatter.id}
            data-item-weight={frontmatter.weight}
            data-item-categories="s, m, l, xl"
            data-item-url={"http://snipcart-gatsby.netlify.com" + frontmatter.path}>
            Add to Cart

        </button>
        <button className="heart-icon"><img src={heart}/></button>
        
        
          <div
            className="product-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

        <Link to="/">Back</Link>

        </div>
      </div>
      </Container>
      </Layout>
      </>
        );
    }
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
            details
            sizes
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

    //  {images.nodes.map(image => (
    //           <Img
    //             alt={image.name}
    //             key={image.childImageSharp.fluid.src}
    //             fluid={image.childImageSharp.fluid}
    //             style={{ margin: '3rem 0' }}
    //           />
    //         ))} 



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
















//// old template

// export default function Template( {
//     data
    
// }){
//     const { markdownRemark } = data
//     const { frontmatter, html } = markdownRemark
//     const { images } = data

//     // create array of images from querys - does using src still enable blur up??
//       var productImages = images.nodes.map(image => (
//        { 
//            original: image.childImageSharp.fluid.src,
//            thumbnail: image.childImageSharp.fluid.src,
//         }

//       ))

//     //   var btnContainer = document.getElementById("myDiv");
//     //   var btns = btnContainer.getElementsByClassName("sizeBtn");

//     //   for (var i = 0; i < btns.length; i++) {
//     //       btns[i].addEventListener("click", function(){
//     //           var current = document.getElementsByClassName("active");
//     //           current[0].className = current[0].className.replace("active", "");
//     //           this.className += " active"
//     //       });
//     //   }
    
    
    

//     return (
        

//         <Layout>
//             <Container type="big">


//             <div className="container">
//                 {/* pushing array into ImageGallery component */}
//                 <ImageGallery items={productImages} showPlayButton={false} showFullscreenButton={false} showNav={false}/>
        
//         <div className="product">
//           <h2>{frontmatter.name} - ${frontmatter.price}</h2>
         
//         <div className="detail-section">
//             <div className="section">
//                 {frontmatter.details.map(detail => (
//                     <li>{detail}</li>
//                 ))}
//             </div>
//             <div className="section" id="myDiv">
                
//                 <h3>Size:</h3>
//                 {/* someFunct(name) {
//                     this.setState({ active: name })
//                 }  
                
//                 {frontmatter.sizes.map(size => (
//                     <button 
//                     className={this.state.active === size ? 'active' : ''}
//                     value={size}
//                     onClick={() => this.someFunct(size)}
//                     key={ size }

                    
//                     >{size}</button>
//                 ))} */}







                

//                 {frontmatter.sizes.map(size => (
//                     <label className="sizeBtn button">
//                         {size}
//                     <input id="radio" type="radio" className="radio" name="size-radio"/>
//                     </label>
//                 ))}


//             </div>

            
//         </div>
         

//          <button
//              href='#' 
//             className='snipcart-add-item'
//             data-item-price={frontmatter.price}
//             data-item-name={frontmatter.name}
//             data-item-id={frontmatter.id}
//             data-item-weight={frontmatter.weight}
//             data-item-categories="s, m, l, xl"
//             data-item-url={"http://snipcart-gatsby.netlify.com" + frontmatter.path}>
//             Add to Cart

//         </button>
//         <button className="heart-icon"><img src={heart}/></button>
        
        
//           <div
//             className="product-content"
//             dangerouslySetInnerHTML={{ __html: html }}
//           />

//         <Link to="/">Back</Link>

//         </div>
//       </div>
//       </Container>
//       </Layout>
//     )
// }