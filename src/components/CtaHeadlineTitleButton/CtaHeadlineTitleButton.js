import React, { useState } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography, Button } from "@material-ui/core"
import DashHeadline from "../DashHeadline/DashHeadline"
import ButtonMediumBlack from "../buttons/ButtonMediumBlack"

const styles = theme => {
  return {
    container: {
      padding: "0 0 100px 0",
      gridColumn: "1/13",
      display: "grid",
    },
    hrHeadline: {
      gridColumn: "1/13",
      display: "grid",
    },
    innerContainer: {
      display: "grid",
      columnGap: 5,
    },
    hr: {
      width: "calc(100% - 20px)",
      background: "black",
      gridColumn: "1/2",
      marginRight: 18,
    },
    headline: {
      fontSize: "10px",
      gridColumn: "2/6",
      alignSelf: "center",
    },
    title: {
      gridColumn: "2/9",
      marginTop: 60,
    },
  }
}

const CtaHeadlineTitleButton = ({ classes }) => {
  const trackUser = () => {
    window.analytics.track("Registered", {
      plan: "Pro Annual",
      accountType: "Facebook",
    })
  }

  return (
    <>
      <DashHeadline />
      <Typography variant="h1" color="primary" className={classes.title}>
        Recent agency happenings, press, and perspectives.
      </Typography>
      <ButtonMediumBlack />
    </>
  )
}

export default withStyles(styles)(CtaHeadlineTitleButton)
