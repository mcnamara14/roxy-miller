import React from "react"
import jssWrapper from "src/utils/jssWrapper"

const JssServerSideRenderWrapper = jssWrapper(props => props.children)

export const wrapRootElement = ({ element }) => {
  return <>{element}</>
}
