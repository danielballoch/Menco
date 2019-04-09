import React from 'react';
import { Link } from 'gatsby'
import {StyledLink, Nav} from '../NavigationLinks';
import profile from "../../images/profile5.jpg";
import './SideDrawer.css'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
   return(
   <nav className={drawerClasses}> 
   
   <img id="styled_img" src={profile} alt="profile image"/> 
       
        <div>
            <StyledLink id="StyledLink" to="/" ><Nav>Work</Nav></StyledLink>
            <StyledLink to="/about" ><Nav>About</Nav></StyledLink>
            <StyledLink to="/services"><Nav>Services</Nav></StyledLink>
            <StyledLink to="/contact" ><Nav>Contact</Nav></StyledLink>
        </div>
   </nav> 
   );
};

export default sideDrawer;