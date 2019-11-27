import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography } from "@material-ui/core"
import Fade from "react-reveal/Fade"

const styles = theme => ({
  title: {
    marginTop: 80,
    [theme.breakpoints.up("xs")]: {
      gridColumn: "1/13",
    },
    [theme.breakpoints.up("sm")]: {
      gridColumn: "1/11",
    },
    [theme.breakpoints.up("md")]: {
      gridColumn: "1/8",
    },
  },
  hr: {
    width: 100,
    margin: "20px 0 0 0",
    gridColumn: "1/2",
  },
})

const Hero = ({ classes, title }) => {
  return (
    <Fade bottom>
      <div className={classes.title}>
        <Typography variant="h1" color="primary">
          {title}
        </Typography>
      </div>
    </Fade>
  )
}

export default withStyles(styles)(Hero)
