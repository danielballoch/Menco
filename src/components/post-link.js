import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import "../pages/index.css";
import heart from "../Icons/heart.svg";

const PostLink = ({ post }) => (
  <div className="post_div">
    <Link to={`/${post.frontmatter.path}`} key={post.title}>
    <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
    {post.frontmatter.name}
    <br/>
    <p className="sub_text"> ${post.frontmatter.price} - add to wishlist <img className="symbol" src={heart}/> </p>
    </Link>
  </div>
)

export default PostLink