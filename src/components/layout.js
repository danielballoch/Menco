import React from 'react'

import PageTransition from 'gatsby-v2-plugin-page-transitions';
import { css, Global } from '@emotion/core';
import theme from '../../config/theme';



import Toolbar from './toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import Footer from './footer'
import './layout.css'
import '../../config/base/snipcart.min.css'
import { ThemeProvider } from 'emotion-theming';
// import SEO from '../components/SEO'






export default class Layout extends React.Component {
      
      componentDidMount() {
          //index page is currently only page which has non-top white
          //if more added, create getScrollTarget fuction 
          if(this.props.navtheme === "light"){
            window.addEventListener('scroll', this.handleScroll);
          }
      };
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      };

      state = {
        sideDrawerOpen: false, 
        scroll: false,
    };
      
      handleScroll = (event) => {
        // console.log('the scroll things', event)
        // console.log(document.getElementsByClassName('hero-image', event));
        // console.log(window.pageYOffset, event);
        const scrollTarget = document.getElementById('hero-image').offsetHeight-60;
        console.log(scrollTarget)
        if(window.pageYOffset > scrollTarget){
            console.log("over and out")
            this.setState({
                scroll: true
            })
            console.log("state:" + this.state.scroll)
        } else {
            this.setState({
                scroll: false
            })
        }
        
        
        
      };

    
    
    drawerToggleClickHandler = () => {
     this.setState((prevState)=> {
         return{sideDrawerOpen: !prevState.sideDrawerOpen};
     });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

   




    render() {
      const { children } = this.props;
      let scroll = this.state.scroll;
      
      let backdrop;
      console.log("scroll state " + scroll);

      if(this.state.sideDrawerOpen){
          backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
      return (
        <>
        
        {/* <SEO/> */}
        <ThemeProvider theme={theme}>
        <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            margin: 4rem 0;
          }

        `}
      />
        



        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} open={this.state.sideDrawerOpen} navtheme={this.props.navtheme} scroll={this.state.scroll} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
          <PageTransition>
          <div id="wrapper" >
            {children}
          </div>
          </PageTransition>
          
        <Footer/>
        </ThemeProvider>
          </>
      );
    }
  }












    



