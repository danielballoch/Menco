import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"
import Toolbar from "./toolbar"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Seo/>
       
        <div
          style={{
            margin: `56px auto`,
            // maxWidth: 960,
            paddingTop: 0, height: '100%',
          }}
        >
        <Toolbar/>
          <main>{children}</main>
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
          
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
