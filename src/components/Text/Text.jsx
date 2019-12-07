import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const styles = {}

const Text = ({ classes, children, styling, variant }) => {
  return (
    <Typography variant={variant} className={styling}>
      {children}
    </Typography>
  )
}

export default withStyles(styles)(Text)
