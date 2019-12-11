import React from  'react';
import {StyledLink} from './NavigationLinks';
import './footer.css';

const footer = props => {


return(
    <footer className="footer">
        <div className="links">
                <div>
                    <StyledLink to="/" >Menco</StyledLink>
                    <StyledLink to="/products/frontmatter___date/ASC/all/all">Products</StyledLink>
                    <StyledLink to="/" >Privacy</StyledLink>  
                    <StyledLink to="/" >Affiliates</StyledLink>                  
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
                    <StyledLink to="/#social-subsection" >Follow Us</StyledLink>
                    <a href="https://www.instagram.com/mencoapparel/">Instagram</a>
                    <a href="https://twitter.com/home" >Twitter</a>
                    <a href="https://www.facebook.com/" >Facebook</a>
                </div>
            </div>
                
            <p className="copyright">© 2019 Menco, Inc. All Rights Reserved</p>
    </footer>
);
}
export default footer;