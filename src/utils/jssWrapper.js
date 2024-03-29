// Help from https://github.com/mui-org/material-ui/blob/master/examples/gatsby
import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import JssProvider from "react-jss/lib/JssProvider"
import getPageContext from "./getPageContext"

function jssWrapper(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.muiPageContext = getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side")
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          <MuiThemeProvider
            theme={this.muiPageContext.theme}
            sheetsManager={this.muiPageContext.sheetsManager}
          >
            <CssBaseline />
            <Component {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }
}

export default jssWrapper
