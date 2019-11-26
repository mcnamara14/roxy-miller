import React, { useState } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import { Button } from "@material-ui/core"
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat"
import classNames from "classnames"

const styles = theme => ({
  button: {
    gridColumn: "2/4",
    margin: "30px 0 100px 0",
    ...theme.buttons.blackMedium,
  },
  arrow: {
    color: "#c8a559",
    marginLeft: 15,
  },
  hoveredArrow: {
    transform: "translate(15px,0)",
    transition: "all 0.4s ease-in-out",
  },
})

const ButtonMediumBlack = ({ classes }) => {
  const [hovering, setHovering] = useState(false)

  return (
    <Button
      to="/"
      variant="container"
      className={classes.button}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      VIEW ALL NEWS
      <TrendingFlatIcon
        className={classNames(classes.arrow, {
          [classes.hoveredArrow]: hovering,
        })}
      />
    </Button>
  )
}

export default withStyles(styles)(ButtonMediumBlack)
