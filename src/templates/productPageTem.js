import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../layouts/Container"
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'
import "react-image-gallery/styles/css/image-gallery.css";
import "./productPageTem.css"
import heart from "../Icons/heart.svg";


export default class Template extends React.Component {
    state = {
        activeSize: false,
        modalOpen: false
    };
    
  
    setActiveSize(name) {
        this.setState({ activeSize: name })
        let SelectedSize = name;
        console.log(SelectedSize);
        return {SelectedSize}
    }

    ToggleSizeguide(){
        this.setState((currentState) => ({
            modalOpen: !currentState.modalOpen, 
        }));
    }


    render(){
        const { data } = this.props;
        const { markdownRemark } = data
        const { frontmatter, html } = markdownRemark
        const { images } = data
        //size info for snip-buy-button
        var selectedSize = this.state.active
        var sizeOptions = frontmatter.sizes.join('|')
        // var sizeOptions = frontmatter.sizes.map(size => (
        //     size.join('|')
        // ))
        

 

        const SizeBtns =  frontmatter.sizes.map(size => (
            <button 
            className={this.state.activeSize === size ? 'sizeBtn active' : 'sizeBtn'}
            value={size}
            onClick={() => this.setActiveSize(size)}
            key={ size }

            
            >{size}</button>
        ))
        
        
        
       
    
        // create array of images from querys - does using src still enable blur up??
          var productImages = images.nodes.map(image => (
           { 
               original: image.childImageSharp.fluid.src,
               thumbnail: image.childImageSharp.fluid.src,
            }
    
          ))

          console.log(productImages[1].thumbnail)

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
                {SizeBtns}
                <button onClick={() => this.ToggleSizeguide(this.value)} value={this.state.modalOpen}>size guide</button>
            </div>  
            <div className={this.state.modalOpen === true ? 'sizeguide-modal open' : 'sizeguide-modal'}>
                <div className="modal-content">
                    <button className="close" onClick={() => this.ToggleSizeguide(this.value)} value={this.state.modalOpen}>&times;</button>
                    <h1>Size Guide:</h1>
                    <h2>Tops</h2>
                    <p><b>Tops:</b> T-shirts & Singlets, Shirts & Polos, Coats & Jackets, Jumpers & Cardigans, Sweats & Hoodies, Base Layers, Sleepwear Top </p>
                    <table >
                        <tr>
                            <th>SIZE INTL.</th>
                            <th>EU</th>
                            <th>UK/US</th>
                            <th>Chest (cm)</th>
                            <th>Collar (cm)</th>
                        </tr>
                        <tr>
                            <th>S</th>
                            <th>46</th>
                            <th>36</th>
                            <th>100</th>
                            <th>38</th>

                        </tr>
                        <tr>
                            <th>M</th>
                            <th>48</th>
                            <th>38</th>
                            <th>105</th>
                            <th>39</th>
                        </tr>
                        <tr>
                            <th>L</th>
                            <th>50</th>
                            <th>40</th>
                            <th>110</th>
                            <th>40</th>
                        </tr>
                        <tr>
                            <th>XL</th>
                            <th>52</th>
                            <th>42</th>
                            <th>115</th>
                            <th>41</th>
                        </tr>
                    </table>
                    <br></br>
                    <h2>Bottoms</h2>
                    <p><b>Bottoms:</b> T-shirts & Singlets, Shirts & Polos, Coats & Jackets, Jumpers & Cardigans, Sweats & Hoodies, Base Layers, Sleepwear Top </p>
                    <table>
                        <tr>
                            <th>SIZE INTL.</th>
                            <th>EU</th>
                            <th>UK/US</th>
                            <th>Chest (cm)</th>
                            <th>Collar (cm)</th>
                        </tr>
                        <tr>
                            <th>S</th>
                            <th>46</th>
                            <th>36</th>
                            <th>100</th>
                            <th>38</th>

                        </tr>
                        <tr>
                            <th>M</th>
                            <th>48</th>
                            <th>38</th>
                            <th>105</th>
                            <th>39</th>
                        </tr>
                        <tr>
                            <th>L</th>
                            <th>50</th>
                            <th>40</th>
                            <th>110</th>
                            <th>40</th>
                        </tr>
                        <tr>
                            <th>XL</th>
                            <th>52</th>
                            <th>42</th>
                            <th>115</th>
                            <th>41</th>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
         

         <button href='#' selectedSize
            className='snipcart-add-item'
            data-item-image={productImages[1].thumbnail}
            data-item-price={frontmatter.price}
            data-item-name={frontmatter.name}
            data-item-id={frontmatter.id}
            data-item-weight={frontmatter.weight}
            data-item-custom2-name="Size"
            data-item-custom2-options={sizeOptions}
            data-item-custom2-value={selectedSize}
            data-item-url={"http://snipcart-gatsby.netlify.com" + frontmatter.path}>
            Add to Cart

        </button>
        <button className="heart-icon"><img src={heart} alt="red heart wishlist icon"/></button>
        
        
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
        sort: {fields: name, order: ASC}
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