
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const divStyle = {
    height: '46vh',
    marginTop: '110px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };



const lookbook = () => (
  <Layout>
    <SEO title="Page two" />
    <br/>
    <div style={divStyle}>
        <h2>New Season Lookbook</h2>
        <h3>Coming November 2019</h3>
    </div>
  </Layout>
)

export default lookbook