import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import "../pages/index.css";
import heart from "../../static/icons/heart.svg"
import styled from '@emotion/styled';

const Wrap = styled.div`
@media(max-width: 530px){
background-color: #f4f4f4
};`


const Product = styled.div`
/* height: 360px; */
width: 240px;
margin: 10px;
background-color: #f4f4f4;
text-align: center;
color: #362E2E;
:hover {
    div {
        opacity: 1;
        transition: .3s;
    }
}
h1{
    margin: 1px;
}
@media (max-width: 530px){
    width: 50vw;
    height: auto;
    min-height: 260px;
    margin: 0px;
}
`
const Price = styled.div`
position: absolute;
z-index: 100;
/* background: yellow; */
text-align: left;
padding: 10px;
color: #676565;
opacity: .8;
`
const Stock = styled.div`
position: absolute;
opacity: 0;
transform: rotate(-90deg);
z-index: 100;
color: #676565;
margin-top: 40%;
margin-left: -14px;
transition: .5s;
:hover{
    color: green;
}

`

class ProductListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.frontmatter.path,
                price: postEdge.node.frontmatter.price,
                tags: postEdge.node.frontmatter.tags,
                color: postEdge.node.frontmatter.color,
                image: postEdge.node.frontmatter.image,
                name: postEdge.node.frontmatter.name,
                weight: postEdge.node.frontmatter.weight,
            });
        });
        return postList;
    }
   
    render(){
        const postList = this.getPostList();
        const wrap = this.props.wrap;

        return(
            // <Wrapper Justify={this.props.Justify}>
            
            <Wrap className={wrap}>       
                {
                postList.map(post => (
                    <Link to={post.path} key={post.name}>
                        
                        <Product>

                        {/* <Price>${post.price}</Price> */}
                        {/* <Stock>Add to cart</Stock> */}
                        <Image fluid={post.image.childImageSharp.fluid}/>
                         <p className="sub_text">${post.price} - {post.name}</p> 
                        {/* <p className="sub_text">  - add to wishlist <img className="symbol" src={heart} alt="red heart icon"/> </p> */}
                        </Product>
                    </Link>
                ))
                }
            </Wrap>
           
        )
    }
}

export default ProductListing;




// const PostLink = ({ post }) => (
//   <div className="post_div">
//     <Link to={`/${post.frontmatter.path}`} key={post.title}>
//     <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
//     {post.frontmatter.name}
//     <br/>
//     <p className="sub_text"> ${post.frontmatter.price} - add to wishlist <img className="symbol" src={heart}/> </p>
//     </Link>
//   </div>
// )

// export default PostLink