import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions';



import Toolbar from './toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import Footer from './footer'
import './layout.css'
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
        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} open={this.state.sideDrawerOpen}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
          <PageTransition>
          <div id="wrapper">
            {children}
          </div>
          </PageTransition>
          
        <Footer/>
        
          </>
      );
    }
  }












    



