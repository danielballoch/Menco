import React from 'react';
import {StyledLink} from '../NavigationLinks';
import './SideDrawer.css'
const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
        return(
            <nav className={drawerClasses}> 
                    <div className="draw-link-wrapper">
                        <StyledLink id="StyledLink" to="/" >Cart</StyledLink>
                        <StyledLink to="/products/frontmatter___date/ASC/all/all" >Clothing</StyledLink>
                        <StyledLink to="/lookbook" >Lookbook</StyledLink>
                        <StyledLink id="StyledLink" to="/" >Profile</StyledLink>
                        {/* <TagsBlock list={data.allMarkdownRemark.edges.nodes.frontmatter.tags}/> */}
                        <StyledLink to="/blog">Blog</StyledLink>
                    </div>
            </nav> 
        );
   
   
};
export default SideDrawer;
 


