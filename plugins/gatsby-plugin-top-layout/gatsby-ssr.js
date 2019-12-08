/* eslint-disable import/prefer-default-export, react/prop-types */

import React from "react"
import TopLayout from "./TopLayout"
import jssWrapper from "src/utils/jssWrapper"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
