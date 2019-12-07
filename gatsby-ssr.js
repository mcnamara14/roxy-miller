/* eslint-disable import/prefer-default-export, react/prop-types */

import React from "react"
import App from "src/components/App/App"

export const wrapRootElement = ({ element }) => {
  console.log("element", element)
  return <App>{element}</App>
}
