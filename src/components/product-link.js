import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import "../pages/index.css";
import heart from "../Icons/heart.svg";
import styled from '@emotion/styled';

const Wrapper = styled.div`
margin: 50px auto;
max-width: 400px;
h1{
    margin: 1px;
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
                title: postEdge.node.frontmatter.title,
                weight: postEdge.node.frontmatter.weight,
            });
        });
        return postList;
    }
    render(){
        const postList = this.getPostList();
        return(
            <div>
                {
                postList.map(post => (
                    <Link to={post.path} key={post.title}>
                        <Wrapper>
                        <Image fluid={post.image.childImageSharp.fluid}/>
                        {post.title}<br/>
                        <p className="sub_text"> ${post.price} - add to wishlist <img className="symbol" src={heart}/> </p>
                        {post.tags}
                        </Wrapper>
                    </Link>
                ))
                }
            </div>
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