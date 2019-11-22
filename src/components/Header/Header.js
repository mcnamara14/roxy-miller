import React from "react"
import headerLogo from "src/images/header-logo.png"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
  container: {
    display: "grid",
  },
  image: {
    width: 105,
    gridColumn: "1/3",
  },
  nav: {
    gridColumn: "6/-1",
  },
}

const Header = ({ classes }) => {
  return (
    <div className={classes.container}>
      <img
        src={headerLogo}
        className={classes.image}
        alt="Header navigation logo"
      />
      <nav className={classes.nav}>
        <ul>
          <li>Our Work</li>
          <li>What We Do</li>
          <li>About</li>
          <li>News</li>
          <li>Career</li>
        </ul>
      </nav>
    </div>
  )
}

export default withStyles(styles)(Header)
