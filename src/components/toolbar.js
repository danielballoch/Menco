import React from  'react';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import { Link } from 'gatsby'
import styled from '@emotion/styled';


const Toolbar = styled.header`
    transition: 1s;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* background-color:rgba(255,255,255, 0.95); */
    background-color: ${props => props.light ? 'rgba(255,255,255, 0)' : 'rgba(255,255,255, 0.95)'};
    height: 110px;
    box-shadow: ${props => props.light ? '' : '0 1px 5px rgba(0, 0, 0, 0.05)'};
    z-index: 300;
    font-family: "open sans";
    a{
        
        color: ${props => props.light ? 'white' : 'black'};
        &:hover {
            color: ${props => props.light ? '' : '#36648b' };
            text-shadow:${props => props.light ? '0px 0px 6px rgba(255,255,255,0.3)' : '' } ;
        }
        
    }
    button{
        color: ${props => props.light ? 'white' : 'black'};
        align-items: center;
        &:hover {
            color: ${props => props.light ? '' : '#36648b' };
            text-shadow:${props => props.light ? '0px 0px 6px rgba(255,255,255,0.3)' : '' } ;
        }
        
    }
    @media (max-width: 880px) {
        margin-top: -20px;
        height: 80px;
    }

`

const ToolbarNavigation = styled.nav`
    display: flex;
    height: 100%;
    max-width: 100%;
    justify-content: space-between;
    margin: auto;
`
const StyledLink = styled(Link)`
padding: 10px;
text-decoration: none;
/* color: ${props => props.theme.colors.nav.textlight}; */
list-style-type: none;
transition: 0.3s;


`
const LeftNav = styled.div`
    display:flex;
    transition: 0.3s;
    z-index: 300;
   height: 100%;
   font-family: 'Quattrocento', serif;
   margin-left: 70px;
   a{
        text-decoration: none;
        align-items: center;
        font-size: 1.8rem; 
        transition: 0.3s;
        padding: 1rem 1rem;
        font-size: 3rem;
        &:hover{
            text-decoration: none;
        }
   }
   @media (max-width: 880px) {
        margin-left: 30px;
    }
    @media (max-width: 480px) {
        margin-left: 0px;
    }

`

const MiddleNav = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 1rem 1rem;
    margin: auto;
    font-size: 14px;
    a{
        padding: 1rem 1rem;
        
    }
    @media (max-width: 880px) {
        display: none;
    }
`

const RightNav = styled.div`
    display: flex;
    height: 100%;
    margin-right: 70px;
    padding: 1rem 1rem;
    align-items: flex-start;
    a {transition: 0.3s;}
    button{
        transition: 0.3s;
        display: flex;
        border: none;
        background-color: rgba(255,255,255, 0);
        padding: 1.7rem 1rem;
        text-decoration: none;
        align-items: flex-start;
        &:hover{
            cursor: pointer;
        }
    }
    @media (max-width: 880px) {
        margin-right: 0;
    }
    @media(max-width: 365px){
        display: none;
    }
`

const ToggleButton = styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    margin-right: 70px;
    padding: 1rem 1rem;
    @media (min-width: 880px) {
        display: none;
        margin-right: 30px;
    }
    @media(max-width: 365px){
        margin-right: 0px;
    }
    
}

`




export default class toolbar extends React.Component {
   
  render(){ 
    let navtheme = this.props.navtheme;
    if (this.props.scroll === true){navtheme = ""};

    return(
        
        
        <Toolbar light={navtheme} >
            <ToolbarNavigation>
            
                <LeftNav>
                    <StyledLink id="StyledLink" to="/" >Menco</StyledLink>
                </LeftNav>
            
                
                <MiddleNav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/products/frontmatter___date/ASC/all/all">Products</StyledLink>
                    <StyledLink to="/blog" >Blog</StyledLink>
                    <StyledLink to="/lookbook/" >Lookbook</StyledLink>
                </MiddleNav>
                
                
                <RightNav>
                        
                    <button className="snipcart-user-profile profile-btn">
                       <a href="#" class="snipcart-user-profile"> Login </a>
                    </button>
                        
                    <button className="cart-div snipcart-checkout" >
                        Cart 
                        <div className="snipcart-summary snip-item-count">
                            <span className="snipcart-total-items"></span>
                        </div>
                    </button>  
                </RightNav>
                <ToggleButton >
                    <DrawerToggleButton open={this.props.open} click={this.props.drawerClickHandler} aria-label="Toggle side drawer" light={navtheme}/>
                </ToggleButton>
                
            </ToolbarNavigation>  
        </Toolbar>
    );
    }
}
