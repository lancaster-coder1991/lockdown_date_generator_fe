import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

//Example of css modules / CSS-IN-JS
import styles from "../components/index.module.css"

///Example of inline styling using Gatsby
const wrapperStyles = {
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
  lineHeight: 1.5,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p id="welcome">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={wrapperStyles}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
  </Layout>
)

export default IndexPage
