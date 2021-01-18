import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  background: #344961;
  margin-bottom: 1.45rem;
  text-align: center;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
  margin: 0;
`
//Example of using styled components on another component
const HomeLink = styled(Link)`
  text-decoration: none;
  color: #99d4c4;
`

const Header = ({ siteTitle }) => {
  return (
    <SiteHeader>
      <Inner>
        <Heading>
          <HomeLink to="/">{siteTitle}</HomeLink>
        </Heading>
      </Inner>
    </SiteHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
