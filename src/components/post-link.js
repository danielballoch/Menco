import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
       {post.frontmatter.name} ${post.frontmatter.price}
    </Link>
  </div>
)

export default PostLink