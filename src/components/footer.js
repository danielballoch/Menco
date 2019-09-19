import React from  'react';
import {StyledLink} from './NavigationLinks';
import './footer.css';

const footer = props => {


return(
    <footer className="footer">
        <div className="links">
                <div>
                    <StyledLink to="/" >Menco</StyledLink>
                    <StyledLink to="/products">Products</StyledLink>
                    <StyledLink to="/" >About</StyledLink>
                    <StyledLink to="/lookbook/" >Privacy</StyledLink>  
                    <StyledLink to="/lookbook" >Affiliates</StyledLink>                  
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
            </div>
                
            <p className="copyright">© 2019 Menco, Inc. All Rights Reserved</p>
    </footer>
);
}
export default footer;