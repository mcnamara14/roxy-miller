import React from "react"
import headerLogo from "src/images/roxy-miller-header-logo.jpg"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link } from "gatsby"

const styles = theme => ({
  logoLink: {
    gridColumn: "1/3",
    alignSelf: "center",
  },
  logo: {
    width: 190,
  },
  nav: {
    gridColumn: "3/13",
    display: "grid",
    justifyContent: "end",
    padding: "30px 0",
    [theme.breakpoints.down("sm")]: {
      gridColumn: "1/13",
      justifyContent: "start",
      marginTop: 30,
    },
  },
  navRoot: {
    margin: 0,
    padding: 0,
    "& li": {
      width: "fit-content",
      display: "inline",
      marginLeft: 40,
      fontFamily: "Open Sans",
      fontSize: 14,
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        marginRight: 40,
        marginLeft: 0,
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: 20,
        marginLeft: 0,
        lineHeight: "28px",
      },
      "&:hover": {
        cursor: "pointer",
        transition: "color .2s cubic-bezier(.72,.16,.345,.875)",
      },
      "& a": {
        textDecoration: "none",
        color: "black",
      },
    },
  },
})

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
            <Link to="/page-2" activeStyle={{ color: "darkslategray" }}>
              Our Work
            </Link>
          </li>
          <li>What We Do</li>
          <li>About</li>
          <li>News</li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default withStyles(styles)(Header)
