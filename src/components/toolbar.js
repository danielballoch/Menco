import React from  'react';
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Img from 'gatsby-image'

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import {StyledLink, Nav} from './NavigationLinks';




const toolbar = props => {


return(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className='toolbar__toggle-button'>
                <DrawerToggleButton open={props.open} click={props.drawerClickHandler} aria-label="Toggle side drawer"/>
            </div>
            <div className="toolbar_logo"><StyledLink id="StyledLink" to="/" ><Nav>GreenBox</Nav></StyledLink></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <div>
                    <Nav>  <a href="#" class="snipcart-checkout">Cart</a> </Nav>
                    <StyledLink to="/about/" ><Nav>Our Plans</Nav></StyledLink>
                    <StyledLink to="/services/"><Nav>Our Recipes</Nav></StyledLink>
                    <StyledLink to="/contact" ><Nav>Support</Nav></StyledLink>
                    <Nav><a href="#" class="snipcart-user-profile">
                         <span>Login</span>
                        </a>
                    </Nav>
                    <Nav><a href="#" class="snipcart-user-logout">
                            Logout
                        </a>
                    </Nav>
                </div>
                
            </div>
        </nav>
    </header>
);
}
export default toolbar;

