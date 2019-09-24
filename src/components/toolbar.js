import React from  'react';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import ShoppingCart from "../icons/shopping-cart.svg";
import { Link } from 'gatsby'
import styled from '@emotion/styled';


const Toolbar = styled.header`
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
        &:hover {
            color: ${props => props.light ? '' : '#36648b' };
            text-shadow:${props => props.light ? '0px 0px 6px rgba(255,255,255,0.3)' : '' } ;
        }
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
transition: 0.1s;
&:active {
    color: red;
    background: radial-gradient(rgba(255,245,255, 0.95), rgba(255,255,255, 0.95)); 
  }

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
        font-size: 1.8rem; 
        transition: 0.3s;
        padding: 1rem 1rem;
        font-size: 3rem;
        &:hover{
            text-decoration: none;
        }
   }

`

const MiddleNav = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: .5rem 1rem;
    margin: auto;
    font-size: 14px;
    a{
        padding: 1rem 1rem;
    }
    @media (max-width: 760px) {
        display: none;
    }
`

const RightNav = styled.div`
    display: flex;
    height: 100%;
    align-items: right;
    padding: 1rem 2rem;
    button{
        display: flex;
        border: none;
        background-color: rgba(255,255,255, 0);
        padding: 0 1rem;
        text-decoration: none;
        &:hover{
            cursor: pointer;
        }
        
    }
`




export default class toolbar extends React.Component {
   
  render(){ 
      const navtheme = this.props.navtheme;
      
      console.log(navtheme);
    //   if (this.props.scroll){
    //     return navtheme = "dark"
    //     }
    return(
        
        
        <Toolbar light={navtheme} >
            <ToolbarNavigation>
            
                <LeftNav>
                    <StyledLink id="StyledLink" to="/" >Menco</StyledLink>
                </LeftNav>
            
                
                <MiddleNav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/products/">Products</StyledLink>
                    <StyledLink to="/blog" >Blog</StyledLink>
                    <StyledLink to="/lookbook/" >Lookbook</StyledLink>
                </MiddleNav>
                
                
                <RightNav>
                        
                    <button className="snipcart-user-profile">
                        Login
                    </button>
                        
                    <button className="cart-div snipcart-checkout" >
                        Cart 
                        <div className="snipcart-summary snip-item-count">
                            <span className="snipcart-total-items"></span>
                        </div>
                    </button>
                </RightNav>
                    
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton open={this.props.open} click={this.props.drawerClickHandler} aria-label="Toggle side drawer"/>
                </div>
                    
            </ToolbarNavigation>  
        </Toolbar>
    );
    }
}






// const toolbar = props => {
   
    
//     return(
        
//         <header className="toolbar">
//             <nav className="toolbar_navigation">
               
//                 <div className="toolbar_logo"><StyledLink id="StyledLink" to="/" >Menco</StyledLink></div>
              
                
//                     <div className="middleNav">
                   
//                         <StyledLink to="/products/" >Products</StyledLink>
//                         <StyledLink to="/about/">About</StyledLink>
//                         <StyledLink to="/blog" >Blog</StyledLink>
//                         <StyledLink to="/lookbook/" >Lookbook</StyledLink>
//                     </div>
                
                   
//                     <div className="rightNav">
//                         <div className="login-button">
//                             <a href="#" className="snipcart-user-profile">
//                                 Login
//                             </a>
//                         </div>
//                         <div className="cart-div snipcart-checkout" href="#">  <a className="cart-text " >Cart</a><img className="cart-icon" src={ShoppingCart}/> 
//                         {count}
//                          </div>
//                     </div>
                    
//                 <div className='toolbar__toggle-button'>
//                     <DrawerToggleButton open={props.open} click={props.drawerClickHandler} aria-label="Toggle side drawer"/>
//                 </div>
                    
//               </nav>  
            
//         </header>
//     );
//     }
//     export default toolbar;







    
    //didn't work :/
    // constructor(props) {
    //     super(props);
    //     this.handleSnip = this.handleSnip.bind(this);
    // }
    // handleSnip = event => {
    //     var count = Snipcart.api.items.count();
    // }
    
    // componentDidMount(){
    //     ReactDOM.findDOMNode(this).addEventListener('snipcart.ready', this.handleSnip);
    // }


    // constructor(props){
    //     super(props)
    //     this.state = {itemCount : 0 }
    // }
    // componentDidMount() {
    //     ReactDOM.findDOMNode(this).addEventListener('snipcart.ready', function(){
    //         var count = Snipcart.api.items.count();
    //     })
    // }

   