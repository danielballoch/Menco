import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import "../pages/index.css";
import styled from '@emotion/styled';


const Wrapper = styled.div`
margin: 50px auto;
max-width: 400px;
h1{
    margin: 1px;
}
`

class PostListing extends React.Component {
    getPostList() {
        const postList = [];
        this.props.postEdges.forEach(postEdge => {
            postList.push({
                path: postEdge.node.frontmatter.path,
                tags: postEdge.node.frontmatter.tags,
                image: postEdge.node.frontmatter.image,
                title: postEdge.node.frontmatter.title,
                date: postEdge.node.frontmatter.date,
                excerpt: postEdge.node.excerpt,
                timeToRead: postEdge.node.timeToRead
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
                        <h1>{post.title}</h1>
                        <p className="sub_text">{post.excerpt}</p>
                        <p className="sub_text">{post.date} {post.timeToRead}m read</p>
                        {post.tags}
                        </Wrapper>
                    </Link>
                ))
                }
            </div>
        )
    }
}

export default PostListing;




// const PostLink = ({ post }) => (
//     <Link to={`/${post.frontmatter.path}`} key={post.title}>
//         <div className="post_div">
//             <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
//             {post.frontmatter.title}
//             <br/>
//             <p className="sub_text"> {post.frontmatter.date}</p>
//             <p className="sub_text">{post.excerpt}</p>
//             {post.frontmatter.tags}
            
//         </div>
//     </Link>
// )











// const PostLink = ({ post }) => (
//     <Link to={`/${post.frontmatter.path}`} key={post.title}>
//         <div className="post_div">
//             <Image fluid={post.frontmatter.image.childImageSharp.fluid}/>
//             {post.frontmatter.title}
//             <br/>
//             <p className="sub_text"> {post.frontmatter.date}</p>
//             <p className="sub_text">{post.excerpt}</p>
//             {post.frontmatter.tags}
            
//         </div>
//     </Link>
// )

// export default PostLink