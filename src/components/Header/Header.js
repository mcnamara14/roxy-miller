import React from "react"
import headerLogo from "src/images/header-logo.png"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  image: {
    width: 105,
    gridColumn: "1/3",
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
      marginRight: 20,
    },
  },
}

const Header = ({ classes }) => {
  return (
    <>
      <img
        src={headerLogo}
        className={classes.image}
        alt="Header navigation logo"
      />
      <nav className={classes.nav}>
        <ul className={classes.navRoot}>
          <li>Our Work</li>
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
