import React from "react"
import headerLogo from "src/images/header-logo.png"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography } from "@material-ui/core"
import Fade from "react-reveal/Fade"

const styles = {
  title: {
    gridColumn: "1/8",
    marginTop: 80,
  },
}

const Hero = ({ classes }) => {
  return (
    <Fade bottom>
      <div className={classes.title}>
        <Typography variant="h1" color="primary">
          We're a branding & experience design agency that builds digital
          products and services that turn cultural values into company value.
        </Typography>
      </div>
    </Fade>
  )
}

export default withStyles(styles)(Hero)
