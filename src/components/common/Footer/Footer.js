import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography } from "@material-ui/core"

const styles = theme => ({
  root: {
    padding: "80px 0",
    gridTemplateColumns: "repeat(12, 1fr)",
    display: "grid",
    gridColumn: "1/13",
    [theme.breakpoints.only("xs")]: {
      gridColumn: "2/12",
    },
  },
  title: {
    gridColumn: "1/6",
    fontSize: 54,
    fontWeight: 700,
    color: "white",
  },
  subtitle: {
    marginTop: 20,
    color: "black",
    fontWeight: 300,
    borderBottom: "1px solid white",
    width: "fit-content",
    color: "white",
  },
  link: {
    gridColumn: "1/6",
    textDecoration: "none",
  },
  address: {
    gridColumn: "1/5",
    alignSelf: "end",
    color: "white",
    [theme.breakpoints.only("xs")]: {
      gridColumn: "1/13",
      marginTop: 30,
    },
  },
  links: {
    gridColumn: "5/13",
    display: "grid",
    columnGap: 40,
    [theme.breakpoints.only("xs")]: {
      display: "block",
      gridColumn: "1/13",
    },
  },
  leftLinks: {
    gridColumn: "8/10",
    justifySelf: "end",
    marginTop: 80,
    [theme.breakpoints.only("xs")]: {
      "& ul": {
        padding: 0,
      },
    },
  },
  rightLinks: {
    gridColumn: "10/13",
  },
  navLink: {
    color: "white",
    fontWeight: 300,
    textDecoration: "none",
  },
  list: {
    listStyle: "none",
    marginTop: 20,
  },
  linkText: {
    width: "fit-content",
    borderBottom: "1px dotted white",
  },
})

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Let's talk.
      </Typography>
      <a href="mailto: mcnamara14@gmail.com" className={classes.link}>
        <Typography variant="h5" className={classes.subtitle}>
          mcnamara14@gmail.com
        </Typography>
      </a>
      <Typography variant="h6" className={classes.address}>
        1016 West Spruce St <br /> San Diego, CA 92103
      </Typography>
      <div className={classes.links}>
        <div className={classes.leftLinks}>
          <ul>
            <li className={classes.list}>
              <a
                href="mailto: mcnamara14@gmail.com"
                className={classes.navLink}
              >
                <Typography variant="h6" className={classes.linkText}>
                  Our Work
                </Typography>
              </a>
            </li>
            <li className={classes.list}>
              <a
                href="mailto: mcnamara14@gmail.com"
                className={classes.navLink}
              >
                <Typography variant="h6" className={classes.linkText}>
                  What We Do
                </Typography>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.rightLinks}>
          <li className={classes.list}>
            <a href="mailto: mcnamara14@gmail.com" className={classes.navLink}>
              <Typography variant="h6" className={classes.linkText}>
                About
              </Typography>
            </a>
          </li>
          <li className={classes.list}>
            <a href="mailto: mcnamara14@gmail.com" className={classes.navLink}>
              <Typography variant="h6" className={classes.linkText}>
                News
              </Typography>
            </a>
          </li>
          <li className={classes.list}>
            <a href="mailto: mcnamara14@gmail.com" className={classes.navLink}>
              <Typography variant="h6" className={classes.linkText}>
                Contact
              </Typography>
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
