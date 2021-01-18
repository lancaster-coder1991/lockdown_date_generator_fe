import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const wrapperStyles = {
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
  lineHeight: 1.5,
}

const HomeTitle = styled.h2`
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeTitle>Welcome!</HomeTitle>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={wrapperStyles}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
  </Layout>
)

export default IndexPage
