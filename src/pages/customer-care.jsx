
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Customer Care</h1>
    <p>FAQ & Contact
Shipping
Returns
Account
Size Guid</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default about