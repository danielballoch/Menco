import React from  'react';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './toolbar.css';
import {StyledLink} from './NavigationLinks';
import ShoppingCart from "../icons/shopping-cart.svg";






export default class toolbar extends React.Component {

    
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

   
    
    
   
  render(){ 
    
    return(
        
        
        <header className="toolbar">
            <nav className="toolbar_navigation">
            
                <div className="toolbar_logo"><StyledLink id="StyledLink" to="/" >Menco</StyledLink></div>
            
                
                    <div className="middleNav">
                         <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/products/" >Products</StyledLink>
                        <StyledLink to="/blog" >Blog</StyledLink>
                        <StyledLink to="/lookbook/" >Lookbook</StyledLink>
                    </div>
                
                
                    <div className="rightNav">
                        <div className="login-button">
                            <button className="snipcart-user-profile">
                                Login
                            </button>
                        </div>
                        <button className="cart-div snipcart-checkout" >  <div className="cart-text " >Cart</div><img className="cart-icon" alt="shopping cart icon" src={ShoppingCart}/> 
                        <div className="snipcart-summary"><span className="snipcart-total-items"></span></div>
                        </button>
                    </div>
                    
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton open={this.props.open} click={this.props.drawerClickHandler} aria-label="Toggle side drawer"/>
                </div>
                    
            </nav>  
            
        </header>
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