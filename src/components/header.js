import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

console.log(styles)

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.heading}>
        <Link className={styles.link} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
