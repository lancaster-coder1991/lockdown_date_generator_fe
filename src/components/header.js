import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import styles from "./header.module.css"

const SiteHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  <SiteHeader className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.heading}>
        <Link className={styles.link} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
