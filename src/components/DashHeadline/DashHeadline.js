import React from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography } from "@material-ui/core"

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridColumn: "1/13",
  },
  hr: {
    background: "black",
    gridColumn: "1/2",
    height: 1,
    border: "none",
    alignSelf: "center",
    margin: "0 20px 0 0",
    padding: 0,
  },
  headline: {
    fontSize: "10px",
    gridColumn: "2/13",
    alignSelf: "center",
  },
}

const DashHeadline = ({ classes, containerStyles }) => {
  return (
    <div className={classNames(containerStyles, classes.container)}>
      <div className={classes.hr} />
      <Typography variant="body1" className={classes.headline}>
        WHAT WE DO
      </Typography>
    </div>
  )
}

export default withStyles(styles)(DashHeadline)
