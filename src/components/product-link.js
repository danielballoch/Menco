import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import "../pages/index.css";
import heart from "../Icons/heart.svg";
import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px auto;
    max-width: 1240px;
    width: 100%;
    text-align: center;
`
const Product = styled.div`
height: 300px;
width: 240px;
margin: 20px;
background-color: #f4f4f4;
text-align: center;
color: #362E2E;
h1{
    margin: 1px;
}
&:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
    transition: .5s;
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
                image: postEdge.node.frontmatter.image,
                name: postEdge.node.frontmatter.name,
                weight: postEdge.node.frontmatter.weight,
            });
        });
        return postList;
    }
    render(){
        const postList = this.getPostList();
        return(
            <Wrapper>
                {
                postList.map(post => (
                    <Link to={post.path} key={post.name}>
                        <Product>
                        
                        <Image fluid={post.image.childImageSharp.fluid}/>
                        {post.name}<br/>
                        <p className="sub_text"> ${post.price} - add to wishlist <img className="symbol" src={heart}/> </p>
                        </Product>
                    </Link>
                ))
                }
            </Wrapper>
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