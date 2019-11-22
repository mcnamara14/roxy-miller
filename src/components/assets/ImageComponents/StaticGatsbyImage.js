import Img from "gatsby-image"
import React from "react"

export default function StaticGatsbyImage(Component) {
  return props => {
    const {
      wrapperStyle = {},
      imgStyle = {},
      placeholderStyle = {},
      className = "",
      alt = "",
      fileName = "file",
      type,
      ...restOfProps
    } = props

    return (
      <Component
        render={data => {
          return <Img fluid={data.file.childImageSharp.fluid} />
        }}
      />
    )
  }
}
