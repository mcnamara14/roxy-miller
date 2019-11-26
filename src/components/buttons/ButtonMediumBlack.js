import React, { useState } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import { Button } from "@material-ui/core"
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat"

const styles = ({ buttons }) => ({
  button: {
    ...buttons.blackMedium,
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

const ButtonMediumBlack = ({ classes, buttonStyles }) => {
  const [hovering, setHovering] = useState(false)

  return (
    <Button
      to="/"
      variant="container"
      className={classNames(classes.button, buttonStyles)}
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
