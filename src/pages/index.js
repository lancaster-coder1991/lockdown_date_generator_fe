import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

//Writing css inline with Gatsby
//This would be applied using style={wrapperStyles} on an HTML element
const wrapperStyles = {
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
  lineHeight: 1.5,
}

//More styled components examples
const HomeHeader = styled.h1`
  color: blue;
`
const HomePara = styled.p`
  text-align: center;
`
const HomeImgContainer = styled.div`
  maxwidth: 300px;
  margin-bottom: 1.45rem;
  line-height: 1.5;
`

const PageLink = styled(Link)`
  text-decoration: none;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>Hi people</HomeHeader>
    <HomePara>Welcome to your new Gatsby site.</HomePara>
    <HomePara>Now go build something great.</HomePara>
    <HomeImgContainer>
      <Image />
    </HomeImgContainer>
    <PageLink to="/page-2/">Go to page 2</PageLink> <br />
    <PageLink to="/using-typescript/">Go to "Using TypeScript"</PageLink> <br />
  </Layout>
)

export default IndexPage
