import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import "./app.css"
import { ThemeProvider } from "@material-ui/styles"
import theme from "src/constants/roxymillerTheme"

const styles = theme => ({
  page: {
    background: "white",
    height: "100vh",
  },
})

const App = ({ children, classes }) => {
  return (
    <div className={classes.page}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(App)
