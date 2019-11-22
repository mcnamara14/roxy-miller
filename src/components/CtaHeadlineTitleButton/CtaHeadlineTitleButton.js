import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography } from "@material-ui/core"

const styles = {
  hrHeadline: {
    gridColumn: "1/3",
  },
  container: {
    gridTemplateColumns: "repeat(12, 1fr)",
    display: "grid",
    columnGap: 5,
  },
  hr: {
    width: "100%",
    background: "black",
    gridColumn: "1/4",
  },
  headline: {
    fontSize: "10px",
    gridColumn: "5/13",
    alignSelf: "center",
  },
}

const CtaHeadlineTitleButton = ({ classes }) => {
  return (
    <div className={classes.hrHeadline}>
      <div className={classes.container}>
        <hr className={classes.hr} />
        <Typography variant="body1" className={classes.headline}>
          WHAT WE DO
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(CtaHeadlineTitleButton)
