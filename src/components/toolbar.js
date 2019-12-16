import React from  'react';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import { Link } from "gatsby"
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
    z-index: 400;
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
    z-index: 400;
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
    z-index: 400;
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
    z-index: 400;
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
 z-index: 400;
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
    
`
   


const NotificationBar = styled.div`
position: fixed;
z-index: 100;
top: ${props => props.theme.main};
opacity: ${props => props.theme.opac};
width: 100%;
background-color: #50c878;
color: white;
transition: .5s;
text-align: center;
display: block;
height: 24px;
@media (max-width: 880px) {
    top: ${props => props.theme.mobile};
}
`
NotificationBar.defaultProps = {
    theme: {
        main: "86px",
        mobile: "36px",
        opac: "0",
    }
};

const active = {
    main: "110px",
    mobile: "60px",
    opac: "1"
};




export default class toolbar extends React.Component {
    state = {
        notification: false,
        notificationMessage: "",
    };

   

    componentDidMount(){
        window.Snipcart.events.on('item.added', (parsedCartItem) => {
            this.notification(parsedCartItem.name);
            console.log(parsedCartItem)
            setTimeout(() => {
                this.setState({notification: false});
              }, 1200);
            });

    }

    componentWillUnmount(){
        clearTimeout()
    }

    notification(message){
        console.log(message);
        this.setState({notificationMessage: message});
        this.setState({notification: true});
    }

    

  render(){ 
    let navtheme = this.props.navtheme;
    if (this.props.scroll === true){navtheme = ""};

    
    return(
        <div>
        <Toolbar light={navtheme} >
            <ToolbarNavigation>
            
                <LeftNav>
                    <StyledLink id="StyledLink" to="/" >Menco</StyledLink>
                </LeftNav>
            
                
                <MiddleNav>
                    <StyledLink swipe to="/">Home</StyledLink>
                    <StyledLink to="/products/frontmatter___date/ASC/all/all">Products</StyledLink>
                    <StyledLink to="/blog/all" >Blog</StyledLink>
                    <StyledLink fade to="/lookbook/" >Lookbook</StyledLink>
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
        <NotificationBar theme={this.state.notification === true ? active : undefined }>{this.state.notificationMessage} added to cart</NotificationBar>
        </div>
    );
    }
}
