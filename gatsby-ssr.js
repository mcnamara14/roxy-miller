// /* eslint-disable import/prefer-default-export, react/prop-types */

import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "src/constants/roxymillerTheme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
