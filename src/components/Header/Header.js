import React from "react"
import headerLogo from "src/images/header-logo.png"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link } from "gatsby"

const styles = {
  logoLink: {
    gridColumn: "1/3",
    alignSelf: "center",
  },
  logo: {
    width: 105,
  },
  nav: {
    gridColumn: "3/13",
    display: "grid",
    justifyContent: "end",
  },
  navRoot: {
    "& li": {
      width: "fit-content",
      display: "inline",
      marginRight: 40,
      fontFamily: "Open Sans",
      fontSize: 12,
      fontWeight: 700,
      "&:hover": {
        cursor: "pointer",
        transition: "color .2s cubic-bezier(.72,.16,.345,.875)",
      },
      "& a": {
        textDecoration: "none",
      },
    },
  },
}

const Header = ({ classes }) => {
  return (
    <>
      <Link
        to="/"
        activeStyle={{ color: "darkslategray" }}
        className={classes.logoLink}
      >
        <img
          src={headerLogo}
          alt="Header navigation logo"
          className={classes.logo}
        />
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navRoot}>
          <li>
            <Link to="/" activeStyle={{ color: "darkslategray" }}>
              Our Work
            </Link>
          </li>
          <li>What We Do</li>
          <li>About</li>
          <li>News</li>
          <li>Career</li>
        </ul>
      </nav>
    </>
  )
}

export default withStyles(styles)(Header)
