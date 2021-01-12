import React from "react"

import Header from "./header"
import "./layout.css"

const Wrapper = props => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      {props.children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Gatsby Default" />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
