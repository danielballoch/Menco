import React from 'react';
import {StyledLink} from '../NavigationLinks';
import './SideDrawer.css'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
   return(
   <nav className={drawerClasses}> 
   
       
        <div className="draw-link-wrapper">
            <StyledLink id="StyledLink" to="/" >Home</StyledLink>
            <StyledLink to="/products" >products</StyledLink>
            shirts <br/>
            pants <br/>
            etc <br/>
            <StyledLink to="/about" >About</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
            <StyledLink to="/lookbook" >Lookbook</StyledLink>
        </div>
   </nav> 
   );
};

export default sideDrawer;