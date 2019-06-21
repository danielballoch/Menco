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
                    <StyledLink to="/customer-care" >Customer Care</StyledLink>
                    <StyledLink to="/customer-care">FAQ & Contact</StyledLink>
                    <StyledLink to="/customer-care" >Shipping</StyledLink>
                    <StyledLink to="/customer-care" >Returns</StyledLink>
                    <StyledLink to="/customer-care" >Account</StyledLink>
                    <StyledLink to="/customer-care" >Size Guides</StyledLink>
                </div>
                <div>
                    <StyledLink to="/#" >Follow Us</StyledLink>
                    <StyledLink to="/#">Instagram</StyledLink>
                    <StyledLink to="/#" >Twitter</StyledLink>
                    <StyledLink to="/#" >Facebook</StyledLink>
                </div>
            </links>
                
            <p className="copyright">© 2019 Menco, Inc. All Rights Reserved</p>
    </footer>
);
}
export default footer;