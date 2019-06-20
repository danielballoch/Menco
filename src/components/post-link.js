import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import "../pages/index.css";
import heart from "../Icons/heart.svg";

const PostLink = ({ post }) => (
    <Link to={`/${post.frontmatter.path}`} key={post.title}>
        <div className="post_div">
            <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
            {post.frontmatter.title}
            <br/>
            <p className="sub_text"> {post.frontmatter.date}</p>
            <p className="sub_text">{post.excerpt}</p>
            {post.frontmatter.tags}
            
        </div>
    </Link>
)

export default PostLink