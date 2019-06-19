import React from  'react';
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Img from 'gatsby-image'

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import {StyledLink} from './NavigationLinks';
import ShoppingCart from "../icons/shopping-cart.svg";





const toolbar = props => {


return(
    <header className="toolbar">
        <nav className="toolbar_navigation">
           
            <div className="toolbar_logo"><StyledLink id="StyledLink" to="/" >Menco</StyledLink></div>
          
            
                <div className="middleNav">
               
                    <StyledLink to="/products/" >Products</StyledLink>
                    <StyledLink to="/about/">About</StyledLink>
                    <StyledLink to="/contact" >Blog</StyledLink>
                    <StyledLink to="/lookbook/" >Lookbook</StyledLink>
                </div>
            
               
                <div className="rightNav">
                    <div className="login-button"><a href="#" class="snipcart-user-profile">
                         <span>Login</span>
                        </a>
                    </div>
                    <div className="cart-div">  <a href="#" class="snipcart-checkout" className="cart-text" >Cart </a><img class="snipcart-checkout" className="cart-icon" src={ShoppingCart}/> 
                    {/* <a href="#" class="snipcart-user-logout">
                            Logout
                        </a>
                     */}
                     </div>
                </div>
                
            <div className='toolbar__toggle-button'>
                <DrawerToggleButton open={props.open} click={props.drawerClickHandler} aria-label="Toggle side drawer"/>
            </div>
                
          </nav>  
        
    </header>
);
}
export default toolbar;

