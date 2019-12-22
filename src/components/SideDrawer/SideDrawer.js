import React from 'react';
import {Link} from 'gatsby';
import './SideDrawer.css'
import GatsbyImage from 'gatsby-image';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
padding: 10px;
text-decoration: none;
color: white;
list-style-type: none;
transition: 0.1s;
padding-left: 30px;
background-color: #38373c;
border-bottom: 1px solid #e5e5e5;
&:hover {
    color: ${props => props.theme.colors.nav.texthover};
}
&:active {
    color: red;
    background: radial-gradient(rgba(255,245,255, 0.95), rgba(255,255,255, 0.95)); 
  }

`

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
        return(
            <nav className={drawerClasses}> 
                    <div className="draw-link-wrapper">  
                        <StyledLink id="StyledLink" className="snipcart-checkout" >Cart</StyledLink>
                        <StyledLink to="/products/frontmatter___date/ASC/all/all" >Clothing</StyledLink>
                        <StyledLink to="/lookbook" >Lookbook</StyledLink>
                        <StyledLink id="StyledLink" className="snipcart-user-profile" >Profile</StyledLink>
                        <StyledLink to="/customer-care" >Help</StyledLink>
                        {/* <TagsBlock list={data.allMarkdownRemark.edges.nodes.frontmatter.tags}/> */}
                        <StyledLink to="/blog/all">Blog</StyledLink>
                    </div>
            </nav> 
        );
   
   
};
export default SideDrawer;
 


