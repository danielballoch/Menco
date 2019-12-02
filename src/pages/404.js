import React from "react"
import styled from '@emotion/styled';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Center404 = styled.div`
text-align: center;

padding-top: 12vw;
padding-bottom: 10vw;
`



const NotFoundPage = () => (
  <Layout>
        <Center404>
            <SEO title="404: Not found" />
            <h1>PAGE NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist :(</p>
        </Center404>
  </Layout>
)

export default NotFoundPage