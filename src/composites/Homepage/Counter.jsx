import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import CountUp from "react-countup"
import { Typography } from "@material-ui/core"

const styles = ({ breakpoints }) => ({
  counter: {
    fontWeight: 900,
    fontSize: 70,
    fontFamily: "Montserrat",
  },
  text: {
    margin: "-10px 0 60px 0",
    fontWeight: 300,
  },
})

const Counter = ({ classes, isVisible }) => {
  const [hasStarted, updateStarted] = useState(false)

  if (isVisible || hasStarted) {
    return (
      <>
        <CountUp
          start={0}
          end={31}
          delay={0}
          onStart={() => updateStarted(true)}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} className={classes.counter} />
            </div>
          )}
        </CountUp>
        <Typography variant="h6" className={classes.text}>
          development <br /> projects
        </Typography>
        <CountUp
          start={0}
          end={18}
          delay={0}
          onStart={() => updateStarted(true)}
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} className={classes.counter} />
            </div>
          )}
        </CountUp>
        <Typography variant="h6" className={classes.text}>
          website & logo <br /> design clients
        </Typography>
      </>
    )
  } else {
    return null
  }
}

export default withStyles(styles)(Counter)
