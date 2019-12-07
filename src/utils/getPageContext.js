// Help from https://github.com/mui-org/material-ui/blob/master/examples/gatsby
import { SheetsRegistry } from "jss"
import { createGenerateClassName } from "@material-ui/core/styles"
import theme from "src/constants/roxyMillerTheme"

function createPageContext() {
  console.log("theme", theme)
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName({
      dangerouslyUseGlobalCSS: false,
      productionPrefix: "c",
    }),
  }
}

function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}

export default getPageContext
