import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../layouts/Container"
import ImageGallery from 'react-image-gallery'
import PropTypes from 'prop-types'
import "react-image-gallery/styles/css/image-gallery.css";
import "./productPageTem.css"
import heart from "../../static/icons/heart.svg";


export default class Template extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        activeSize: "M",
        modalOpen: false,
        showThumbnails: true,
        };

    window.addEventListener('resize', this.handleResize())
    
}

    
    
  
    setActiveSize(name) {
        this.setState({ activeSize: name })
        let selectedsize = name;
        console.log(selectedsize);
        return {selectedsize}
    }

    ToggleSizeguide(){
        this.setState((currentState) => ({
            modalOpen: !currentState.modalOpen, 
        }));
    }

    componentDidUpdate(){
        
        
    }

    handleResize(showThumbnails) {
        console.log(showThumbnails);
        var windowWidth = (document.documentElement.clientWidth);
        if (windowWidth < 420 & this.state.showThumbnails !== false){this.setState({showThumbnails: false})}
        else if (windowWidth > 420 & this.state.showThumbnails !== true){this.setState({showThumbnails: true})}
        console.log("windowWidth: " + windowWidth);
        console.log(this.state.showThumbnails);
    }
   


    render(){
        const { data } = this.props;
        const { markdownRemark } = data
        const { frontmatter, html } = markdownRemark
        const { images } = data
        //size info for snip-buy-button
        var selectedsize = this.state.activeSize
        console.log(selectedsize);
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

          var topSizeGuide = [
              {Size:'S', EU:'46', UKUS:'36', Chestcm:'100', Collarcm:'38', Collarin:'15',},
              {Size:'M', EU:'48', UKUS:'38', Chestcm:'105', Collarcm:'39', Collarin:'15.5',},
              {Size:'L', EU:'50', UKUS:'40', Chestcm:'110', Collarcm:'40', Collarin:'16',},
              {Size:'XL', EU:'52', UKUS:'42', Chestcm:'115', Collarcm:'41', Collarin:'16.5',},
          ]
          var bottomSizeGuide = [
            {Size:'S', Waistin:'30-31', Waistcm:'76-79', innerLegLength:'83', EU:'46',},
            {Size:'M', Waistin:'32-33', Waistcm:'81-84', innerLegLength:'84', EU:'48',},
            {Size:'L', Waistin:'34-35', Waistcm:'86-89', innerLegLength:'85', EU:'50',},
            {Size:'XL', Waistin:'36-37', Waistcm:'91-94', innerLegLength:'86', EU:'52',},
        ]

          
     

          console.log(productImages[1].thumbnail)

        return (
            <>
            <Layout>
            <Container type="big">
        


            <div className="container">
                {/* pushing array into ImageGallery component */}
                <ImageGallery  items={productImages} showPlayButton={false} showFullscreenButton={false} showNav={false} showThumbnails={true} thumbnailPosition={"left"} showBullets={true}/>
        
                <div className="product">
                    <h2>{frontmatter.name} - ${frontmatter.price}</h2>

                    <div className="cart-heart-btn">
                        <button href='#' selectedsize
                        className='snipcart-add-item add-item-button'
                        data-item-image={productImages[1].thumbnail}
                        data-item-price={frontmatter.price}
                        data-item-name={frontmatter.name}
                        data-item-id={frontmatter.id}
                        data-item-weight={frontmatter.weight}
                        data-item-custom2-name="Size"
                        data-item-custom2-options={sizeOptions}
                        data-item-custom2-value={selectedsize}
                        data-item-url={"http://snipcart-gatsby.netlify.com" + frontmatter.path}>
                        Add to Cart

                        </button>
                        <button className="heart-icon"><img src={heart} alt="red heart wishlist icon"/></button>
                    </div>

         
                    <div className="detail-section">
                    <div className="section">
                        {frontmatter.details.map(detail => (
                        <li key={detail}>{detail}</li>
                        ))}
                    </div>
                    <div className="section" id="myDiv">                
                        <h3>Size:</h3>
                        {SizeBtns}
                        <button onClick={() => this.ToggleSizeguide(this.value)} value={this.state.modalOpen} className="size-guide-btn">size guide</button>
                    </div>  
                    <div className={this.state.modalOpen === true ? 'sizeguide-modal open' : 'sizeguide-modal'}>
                        <div className="modal-content">
                            <button className="close" onClick={() => this.ToggleSizeguide(this.value)} value={this.state.modalOpen}>&times;</button>
                            <h1>Size Guide:</h1>
                            <h2>Tops</h2>
                            <p><b>Tops:</b> T-shirts & Singlets, Shirts & Polos, Coats & Jackets, Jumpers & Cardigans, Sweats & Hoodies, Base Layers, Sleepwear Top </p>
                            {/* <Table data={sizeGuide}/> */}
                            <table>
                                 <tr><td>SIZE INTL.</td><td>EU</td><td>UK/US</td><td>Chest(cm)</td><td>Collar(cm)</td><td>Collar(in)</td></tr>
                                    {topSizeGuide.map(row => (
                                        <tr>
                                            <td key={row.Size}>{row.Size}</td>
                                            <td key={row.EU}>{row.EU}</td>
                                            <td key={row.UKUS}>{row.UKUS}</td>
                                            <td key={row.Chestcm}>{row.Chestcm}</td>
                                            <td key={row.Colarcm}>{row.Collarcm}</td>
                                            <td key={row.Colarcm}>{row.Collarin}</td>
                                        </tr>
                                    ))}
                            </table>
                            <br></br>
                            <h2>Bottoms</h2>
                            <p><b>Bottoms:</b> Pants, Jeans, Shorts, Sleepwear Bottom, Underwear </p>
                            <table>
                                <tr><td>SIZE INTL.</td><td>Denim/Pant Waist (in)</td><td>Waist(cm)</td><td>Pants Inner Leg Length (cm)</td><td>EU</td></tr>
                                    {bottomSizeGuide.map(row => (
                                        <tr>
                                            <td key={row.Size}>{row.Size}</td>
                                            <td key={row.Waistin}>{row.Waistin}</td>
                                            <td key={row.Waistcm}>{row.Waistcm}</td>
                                            <td key={row.innerLegLength}>{row.innerLegLength}</td>
                                            <td key={row.EU}>{row.CEU}</td>
                                        </tr>
                                    ))}
                            </table>
                    </div>
            </div>
            
        </div>
         

        
        
        
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