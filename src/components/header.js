import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
  margin: 0;
`
//Example os using styled components on another component
const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          name
          description
          link {
            href
            text
          }
        }
      }
    }
  `)
  console.log(nodes)
  return (
    <SiteHeader>
      <Inner>
        <Heading>
          <HomeLink to="/">{siteTitle}</HomeLink>
          {nodes.map(node => (
            <div>{node.name}</div>
          ))}
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
