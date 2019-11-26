import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Typography } from "@material-ui/core"
import DashHeadline from "../DashHeadline/DashHeadline"
import ButtonMediumBlack from "../buttons/ButtonMediumBlack"

const styles = theme => ({
  title: {
    gridColumn: "2/9",
    marginTop: 60,
  },
  button: {
    gridColumn: "2/4",
    margin: "30px 0 100px 0",
    [theme.breakpoints.only("xs")]: {
      gridColumn: "2/9",
    },
  },
})

const CtaHeadlineTitleButton = ({ classes }) => {
  // const trackUser = () => {
  //   window.analytics.track("Registered", {
  //     plan: "Pro Annual",
  //     accountType: "Facebook",
  //   })
  // }

  return (
    <>
      <DashHeadline />
      <Typography variant="h1" color="primary" className={classes.title}>
        Recent agency happenings, press, and perspectives.
      </Typography>
      <ButtonMediumBlack title="hello" buttonStyles={classes.button} />
    </>
  )
}

export default withStyles(styles)(CtaHeadlineTitleButton)
