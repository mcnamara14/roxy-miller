import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import AnimatedImageThree from "src/components/AnimatedImages/AnimatedImageThree"
import Fade from "react-reveal/Fade"

const styles = ({ breakpoints }) => ({
  title: {
    textAlign: "center",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
    padding: "60px 0",
  },
  workOne: {
    gridColumn: "1/5",
    [breakpoints.down("xs")]: {
      gridColumn: "1/13",
    },
  },
  workTwo: {
    gridColumn: "5/9",
    [breakpoints.down("xs")]: {
      gridColumn: "1/13",
    },
  },
  workThree: {
    gridColumn: "9/13",
    [breakpoints.down("xs")]: {
      gridColumn: "1/13",
    },
  },
})

const Portfolio = ({ classes }) => {
  return (
    <>
      <div className={classes.title}>
        <Fade bottom>
          <Typography variant="h5" align="center">
            <b>OUR WORK</b>
          </Typography>
        </Fade>
      </div>
      <AnimatedImageThree styles={classes.workOne} />
      <AnimatedImageThree styles={classes.workTwo} />
      <AnimatedImageThree styles={classes.workThree} />
    </>
  )
}

export default withStyles(styles)(Portfolio)