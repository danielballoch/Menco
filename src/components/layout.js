import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions';
import { css, Global } from '@emotion/core';
import theme from '../../config/theme';



import Toolbar from './toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import Footer from './footer'
import './layout.css'
import { ThemeProvider } from 'emotion-theming';
// import SEO from '../components/SEO'






export default class Layout extends React.Component {
    state = {
        sideDrawerOpen: false 
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
      
      let backdrop;

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
            
          }

        `}
      />
        



        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} open={this.state.sideDrawerOpen}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
          <PageTransition>
          <div id="wrapper">
            {children}
          </div>
          </PageTransition>
          
        <Footer/>
        </ThemeProvider>
          </>
      );
    }
  }












    



