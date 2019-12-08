import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import classNames from "classnames"

const styles = theme => {
  return {
    root: {
      background: ({ fullWidthBackground }) => fullWidthBackground,
    },
    container: {
      maxWidth: 1200,
      boxSizing: "border-box",
      width: "100%",
      height: "fit-content",
      gridTemplateColumns: "repeat(12, 1fr)",
      display: "grid",
      margin: `0 auto`,
      padding: "0 50px",
    },
  }
}

const Layout = ({ children, classes, styles }) => {
  return (
    <div className={classes.root}>
      <div className={classNames(classes.container, styles)}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
