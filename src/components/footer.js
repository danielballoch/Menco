import React from  'react';
import { Link, graphql } from 'gatsby'
import {StyledLink} from './NavigationLinks';
import './footer.css';

const footer = props => {


return(
    <footer className="footer">
        <links className="links">
                <div>
                    <StyledLink to="/products/" >Menco</StyledLink>
                    <StyledLink to="/about/">Products</StyledLink>
                    <StyledLink to="/contact" >About</StyledLink>
                    <StyledLink to="/lookbook/" >Privacy</StyledLink>  
                    <StyledLink to="/contact" >Affiliates</StyledLink>                  
                </div>
                <div>
                    <StyledLink to="/products/" >Customer Care</StyledLink>
                    <StyledLink to="/about/">FAQ & Contact</StyledLink>
                    <StyledLink to="/contact" >Shipping</StyledLink>
                    <StyledLink to="/lookbook/" >Returns</StyledLink>
                    <StyledLink to="/lookbook/" >Account</StyledLink>
                    <StyledLink to="/lookbook/" >Size Guides</StyledLink>
                </div>
                <div>
                    <StyledLink to="/products/" >Follow Us</StyledLink>
                    <StyledLink to="/about/">Instagram</StyledLink>
                    <StyledLink to="/lookbook/" >Twitter</StyledLink>
                    <StyledLink to="/contact" >Facebook</StyledLink>
                </div>
            </links>
                
            <p className="copyright">© 2019 Menco, Inc. All Rights Reserved</p>
    </footer>
);
}
export default footer;