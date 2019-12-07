import React from "react"
import PropTypes from "prop-types"
// Providers
// Components
import { Helmet } from "react-helmet"
// Constants
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "src/constants/roxymillerTheme"

const TopLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

export default TopLayout
