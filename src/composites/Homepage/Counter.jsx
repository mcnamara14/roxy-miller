import React from "react"
import { withStyles } from "@material-ui/core/styles"
import CountUp from "react-countup"
import { Typography } from "@material-ui/core"

const styles = ({ breakpoints }) => ({
  counter: {
    fontWeight: 700,
    fontSize: 50,
    fontFamily: "Open Sans",
  },
  text: {
    marginTop: 5,
    fontWeight: 300,
  },
})

const Counter = ({ classes, isVisible }) => {
  const startCounter = () => {
    console.log("start")
  }

  if (isVisible) {
    return (
      <>
        <CountUp start={0} end={31} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} className={classes.counter} />
            </div>
          )}
        </CountUp>
        <Typography variant="h5" className={classes.text}>
          Happy Clients
        </Typography>
      </>
    )
  } else {
    return null
  }
}

export default withStyles(styles)(Counter)
